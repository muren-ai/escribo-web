import Link from 'next/link';
import { Ghost } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-800 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full text-center border border-slate-100">
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-indigo-500">
                    <Ghost size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-slate-900">Page Not Found</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                    The page or user profile you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="w-full bg-[#5B4DFF] hover:bg-[#4839EB] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
