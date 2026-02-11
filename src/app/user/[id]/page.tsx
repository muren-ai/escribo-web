import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ClientUserActionButton from './ClientUserActionButton';

interface UserProfile {
    id: string;
    username: string;
    name: string;
    bio: string;
    avatar_url: string;
    created_at: string;
}

// Fetch data from FastAPI
async function getUser(id: string): Promise<UserProfile | null> {
    try {
        const apiUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
        const res = await fetch(`${apiUrl}/api/v1/profiles/${id}`, {
            next: { revalidate: 60 }, // Cache for 60 seconds
        });

        if (res.status === 404) return null;
        if (!res.ok) throw new Error('Failed to fetch user');

        return res.json();
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const user = await getUser(id);

    if (!user) {
        return {
            title: 'User Not Found | Escribo',
            description: 'The user profile you are looking for does not exist.',
        };
    }

    return {
        title: `${user.name || user.username || 'User'} | Escribo Profile`,
        description: user.bio || `Check out ${user.username}'s profile on Escribo.`,
    };
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUser(id);

    if (!user) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans relative overflow-hidden overscroll-none">
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
            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 w-full max-w-7xl mx-auto py-8">

                <div className="w-full max-w-md bg-white rounded-3xl shadow-xl ring-1 ring-black/5 overflow-hidden p-8 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">

                    {/* Avatar */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-indigo-50 mb-6 overflow-hidden ring-4 ring-indigo-50 shadow-inner">
                        {user.avatar_url ? (
                            <img src={user.avatar_url} alt={user.username} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-300 bg-indigo-50">
                                <span className="text-4xl sm:text-5xl">👤</span>
                            </div>
                        )}
                    </div>

                    {/* Name & Handle */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{user.name || 'Anonymous'}</h1>
                    <p className="text-slate-500 font-medium text-lg mb-6">@{user.username}</p>

                    {/* Bio */}
                    {user.bio && (
                        <div className="bg-slate-50 rounded-xl p-4 w-full mb-8 border border-slate-100">
                            <p className="text-slate-700 leading-relaxed italic">"{user.bio}"</p>
                        </div>
                    )}

                    {/* Actions */}
                    <ClientUserActionButton userId={user.id} />

                </div>

            </main>

            {/* Footer */}
            <footer className="relative z-10 w-full bg-[#5B4DFF] text-white overflow-hidden mt-auto" style={{
                backgroundImage: "url('/footer-doodle.png')",
                backgroundRepeat: "repeat"
            }}>
                <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center py-8 px-6 text-center">
                    <p className="text-indigo-200 text-sm opacity-80">© {new Date().getFullYear()} Escribo. Connect through clothing.</p>
                </div>
            </footer>
        </div>
    );
}
