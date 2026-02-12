import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DeleteAccountPage() {
    return (
        <div className="min-h-screen bg-[#FDFDFD] relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8">
            {/* Background Doodles */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                <Image
                    src="/doodle-bg.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover hidden sm:block"
                    quality={100}
                />
                <Image
                    src="/mobile-doodle-bg.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover sm:hidden"
                    quality={100}
                />
            </div>

            <div className="relative z-10 w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl border border-white/50 flex flex-col items-center text-center">

                    <Link href="/" className="mb-8 hover:opacity-80 transition-opacity">
                        <img src="/escribo-logo.svg" alt="Escribo" className="h-10 w-auto" />
                    </Link>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Delete Account</h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We value your privacy. If you wish to permanently remove your account and all associated data, please follow the steps below.
                    </p>

                    <div className="w-full bg-white/50 rounded-2xl p-6 border border-gray-100 text-left space-y-4 mb-8">
                        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Instructions</h2>

                        <ol className="list-decimal list-inside text-gray-700 space-y-3 text-sm">
                            <li>
                                Send an email to <a href="mailto:support@escribo.ai" className="text-blue-600 font-medium hover:underline">support@escribo.ai</a>
                            </li>
                            <li>
                                Use the subject line: <span className="font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-800 text-xs border border-gray-200">Delete Account Request</span>
                            </li>
                            <li>
                                We will verify your identity and process your request within <strong>7 days</strong>.
                            </li>
                        </ol>
                    </div>

                    <div className="w-full p-4 rounded-xl bg-red-50 border border-red-100 flex items-start space-x-3 mb-8">
                        <div className="text-red-500 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <h3 className="text-red-800 font-medium text-sm">Warning</h3>
                            <p className="text-red-600/90 text-xs mt-1 leading-relaxed">
                                This action allows us to permanently remove your profile, stories, and uploaded media from our servers. This cannot be undone.
                            </p>
                        </div>
                    </div>

                    <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Return to Home
                    </Link>
                </div>

                <p className="mt-8 text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} Escribo. All rights reserved.
                </p>
            </div>
        </div>
    );
}
