import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SupportPage() {
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

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Technical Support</h1>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Need help with Escribo? We're here for you. Whether you have questions, feedback, or need to report an issue, our team is ready to assist.
                    </p>

                    <div className="w-full bg-white/50 rounded-2xl p-6 border border-gray-100 text-left space-y-4 mb-8">
                        <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Us</h2>

                        <p className="text-gray-700 text-sm mb-4">
                            For support inquiries, please send us an email. We aim to respond to all requests within 24-48 hours.
                        </p>

                        <div className="flex items-center space-x-3 p-4 bg-gray-50/80 rounded-xl border border-gray-100">
                            <div className="text-primary flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <h3 className="text-gray-900 font-medium text-sm">Email Support</h3>
                                <a href="mailto:support@escribo.ai" className="text-primary text-sm hover:underline font-medium">
                                    support@escribo.ai
                                </a>
                            </div>
                        </div>

                        <div className="mt-4 text-xs text-gray-500">
                            <strong>Tip:</strong> Including your account email and a detailed description of your issue will help us resolve it faster.
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
