import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MessageCircle, Download } from 'lucide-react';

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
        const apiUrl = process.env.API_URL || 'http://localhost:8000';
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

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/doodle-bg.png')] bg-repeat opacity-100 pointer-events-none z-0"></div>

            {/* Header */}
            <header className="relative z-10 w-full py-6 flex justify-center">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/escribo-logo.svg"
                        alt="Escribo Logo"
                        className="h-8 md:h-10 w-auto"
                    />
                </Link>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 w-full max-w-7xl mx-auto">

                {/* Story Card */}
                <div className="w-full max-w-md md:max-w-4xl flex flex-col items-center mb-12">

                    <div className="relative w-full aspect-[4/5] md:aspect-video max-h-[600px] bg-gray-100 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                        {/* 
                If we had a user image/video, it would go here. 
                For now, we use a placeholder styling based on the user's mood color 
             */}
                        <div
                            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                            style={{ backgroundColor: story?.background_color || '#F5F3FF' }}
                        >
                            {story ? (
                                <>
                                    {story.emoji && (
                                        <div className="text-8xl md:text-9xl mb-6 animate-in zoom-in duration-500">
                                            {story.emoji}
                                        </div>
                                    )}
                                    <p className="text-2xl md:text-3xl font-medium text-foreground max-w-2xl leading-relaxed">
                                        "{story.content}"
                                    </p>
                                    <p className="mt-8 text-sm opacity-60 uppercase tracking-widest text-xs">
                                        Shared {new Date(story.created_at).toLocaleDateString()}
                                    </p>
                                </>
                            ) : (
                                <div className="text-gray-400 flex flex-col items-center">
                                    <span className="text-6xl mb-4">👕</span>
                                    <p className="text-xl">This garment has no story yet.</p>
                                </div>
                            )}

                            {/* Overlay Gradient (similar to design "Mood today" bar) */}
                            {story && (
                                <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-md rounded-2xl py-3 px-6 text-white text-center">
                                    <span className="text-sm font-medium">Mood today</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Button - Just a placeholder visually matching the design */}
                    <div className="mt-8">
                        <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-purple-200 transform hover:scale-105 active:scale-95 flex items-center gap-2">
                            Download App to Interact
                        </button>
                    </div>

                </div>

            </main>

            {/* Footer / App Promo CTA */}
            <footer className="relative z-10 w-full bg-primary text-white py-16 px-6 overflow-hidden mt-auto">
                {/* Abstract shapes in background of footer */}
                <div className="absolute inset-0 opacity-10 bg-[url('/doodle-bg.png')] bg-repeat mix-blend-overlay"></div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                        Get your wearable to express<br />something like this
                    </h2>
                    <p className="text-primary-100 mb-8 max-w-lg mx-auto opacity-90">
                        Create a message, link it to a QR, and let it live beyond the screen.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
                            <Download size={20} />
                            Download on App Store
                        </button>
                        <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
                            <Download size={20} />
                            Get it on Google Play
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}
