'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Unhandled app error:', error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-slate-800 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-sm w-full text-center border border-red-100">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
                    <AlertTriangle size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-slate-900">Something went wrong!</h2>
                <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                    {error.message || 'An unexpected error occurred.'}
                </p>
                <button
                    onClick={() => reset()}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
