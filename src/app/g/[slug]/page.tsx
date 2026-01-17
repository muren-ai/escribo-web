import { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Download } from 'lucide-react';
import ClientActionButton from './ClientActionButton';

// Force the Safari title bar to be white for this specific page
export const viewport: Viewport = {
    themeColor: "#ffffff",
    viewportFit: "cover",
};

// Types matching FastAPI response
interface Garment {
    id: string;
    slug: string;
    status: string;
    current_story: {
        id: string;
        content: string;
        emoji?: string;
        background_color?: string;
        created_at: string;
    } | null;
    owner?: {
        username?: string;
        avatar_url?: string;
    };
}

// Fetch data from FastAPI
async function getGarment(slug: string): Promise<Garment | null> {
    try {
        // In production, use env var. For now, localhost is fine for server-to-server 
        // (if Next.js is running on same machine as FastAPI)
        // IMPORTANT: When running in Docker/Cloud, this needs to reach the backend
        const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        const res = await fetch(`${apiUrl}/api/v1/garments/${slug}`, {
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (res.status === 404) return null;
        if (!res.ok) throw new Error('Failed to fetch garment');

        return res.json();
    } catch (error) {
        console.error('Error fetching garment:', error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const garment = await getGarment(slug);

    if (!garment || !garment.current_story) {
        return {
            title: 'Escribo - Interactive Storytelling',
            description: 'Discover stories hidden in clothing.',
        };
    }

    return {
        title: `Mood by ${garment.owner?.username || 'Escribo User'} | Escribo`,
        description: garment.current_story.content,
    };
}

export default async function GarmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const garment = await getGarment(slug);

    if (!garment) {
        notFound();
    }

    const story = garment.current_story;

    // Deterministically select footer image based on slug to avoid hydration mismatches
    const slugCharSum = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const footerImage = slugCharSum % 2 === 0 ? '/footer-person.png' : '/footer-tv.png';

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                html {
                    background: linear-gradient(to bottom, #ffffff 50%, #5B4DFF 50%) !important;
                    overscroll-behavior: auto !important;
                }
                body {
                    background-color: transparent !important;
                }
                body::before {
                    background-color: transparent !important;
                }
            ` }} />
            <div className="min-h-screen bg-transparent flex flex-col font-sans relative overflow-hidden">
                {/* Header */}
                <header className="relative z-10 w-full py-6 sm:py-6 md:py-8 flex justify-center">
                    <Link href="/" className="transition-transform hover:scale-105">
                        <img
                            src="/escribo-logo.svg"
                            alt="Escribo Logo"
                            className="h-12 sm:h-14 md:h-20 lg:h-25 w-auto"
                        />
                    </Link>
                </header>

                {/* Main Content */}
                <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto py-4 sm:py-6 md:py-8 md:-mt-8">

                    {/* Story Card */}
                    <div className="w-full max-w-[280px] sm:max-w-sm flex flex-col items-center">

                        <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border-[4px] sm:border-[6px] border-white ring-1 ring-black/5">
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 text-center transition-colors duration-500"
                                style={{ backgroundColor: story?.background_color || '#F3E8FF' }}
                            >
                                {story ? (
                                    <div className="flex flex-col items-center justify-center h-full max-h-full overflow-y-auto w-full no-scrollbar pb-14 sm:pb-16">
                                        {story.emoji && (
                                            <div className="text-7xl sm:text-8xl md:text-9xl mb-4 sm:mb-6 animate-in zoom-in duration-700 drop-shadow-sm transform hover:scale-110 transition-transform cursor-default">
                                                {story.emoji}
                                            </div>
                                        )}
                                        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-800 max-w-sm leading-snug font-display px-2">
                                            "{story.content}"
                                        </p>
                                        <p className="mt-6 sm:mt-8 text-xs font-semibold opacity-40 uppercase tracking-[0.2em] text-slate-900">
                                            Shared {new Date(story.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-slate-400 flex flex-col items-center animate-pulse">
                                        <span className="text-6xl mb-4 grayscale opacity-50">👕</span>
                                        <p className="text-lg font-medium">No story yet</p>
                                    </div>
                                )}

                                {/* Overlay Gradient "Mood today" */}
                                {story && (
                                    <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6">
                                        <div className="bg-black/20 backdrop-blur-md rounded-xl sm:rounded-2xl py-2.5 sm:py-3 px-4 sm:px-6 text-white text-center border border-white/10 shadow-lg">
                                            <span className="text-xs sm:text-sm font-medium tracking-wide">Mood today</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-6 sm:mt-8 md:mt-10 animate-in slide-in-from-bottom-4 duration-1000 delay-300 w-full flex justify-center">
                            <ClientActionButton storyId={story?.id || ''} />
                        </div>

                    </div>

                </main>

                {/* Footer / App Promo CTA */}
                <footer className="relative z-10 w-full bg-[#5B4DFF] text-white overflow-hidden mt-auto" style={{
                    backgroundImage: "url('/footer-doodle.png')",
                    backgroundRepeat: "repeat"
                }}>

                    <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between">

                        {/* Left Side: Content */}
                        <div className="text-center md:text-left max-w-xl z-10 flex-1 py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 flex flex-col justify-center items-center md:items-start">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight leading-tight">
                                Get your wearable to express something like this
                            </h2>
                            <p className="hidden md:block text-indigo-100 mb-6 text-sm sm:text-base leading-relaxed opacity-95 max-w-md">
                                Create a message, link it to a QR, and let it live beyond the screen.
                            </p>

                            <div className="flex flex-col w-full max-w-xs sm:max-w-none sm:w-auto sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:mt-0 mt-4">
                                <button className="bg-[#E5E5E5] text-black h-12 px-6 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#D5D5D5] transition-all whitespace-nowrap">
                                    <img src="/download-apple.svg" alt="" className="w-5 h-5" />
                                    <span className="text-sm sm:text-base">Download on App Store</span>
                                </button>
                                <button className="bg-[#E5E5E5] text-black h-12 px-6 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#D5D5D5] transition-all whitespace-nowrap">
                                    <img src="/download-android.svg" alt="" className="w-5 h-5" />
                                    <span className="text-sm sm:text-base">Get it on Google Play</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Random Image - Glued to bottom, smaller size */}
                        <div className={`hidden md:block relative z-10 w-80 self-end ${footerImage === '/footer-tv.png' ? 'mt-16' : 'mt-8'}`}>
                            <img
                                src={footerImage}
                                alt="Escribo App Preview"
                                className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </footer>
            </div>
        </>
    );
}
