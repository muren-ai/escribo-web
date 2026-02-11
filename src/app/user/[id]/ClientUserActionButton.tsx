"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function ClientUserActionButton({ userId }: { userId: string }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Basic mobile detection
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
            setIsMobile(true);
        }
    }, []);

    const handleOpenApp = () => {
        // Try to open the app with deep link
        // Scheme: escribo://user/<userId>
        // Universal Link: https://escribo.ai/user/<userId>

        const deepLink = `escribo://user/${userId}`;
        const universalLink = `https://escribo.ai/user/${userId}`;

        // Attempt deep link first
        window.location.href = deepLink;

        // Fallback logic is tricky in web; usually relying on Universal Links is better
        // But for a button click, we can try to redirect
        setTimeout(() => {
            // If we are still here, maybe app isn't installed.
            // On iOS universal links from the same domain might not trigger app open if not clicked from external.
            console.log("App might not be opened.");
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <button
                onClick={handleOpenApp}
                className="w-full bg-[#5B4DFF] hover:bg-[#4839EB] text-white font-bold h-14 rounded-full shadow-lg shadow-indigo-200 transition-all transform active:scale-95 flex items-center justify-center gap-3"
            >
                <span>Open in App</span>
            </button>

            <div className="flex gap-3 justify-center">
                <a
                    href="https://apps.apple.com/app/idYOUR_APP_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-slate-800 h-12 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                    <img src="/download-apple.svg" alt="" className="w-5 h-5" />
                    <span className="text-sm font-semibold">App Store</span>
                </a>
                <a
                    href="https://play.google.com/store/apps/details?id=com.muren.escribo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-slate-800 h-12 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                    <img src="/download-android.svg" alt="" className="w-5 h-5" />
                    <span className="text-sm font-semibold">Play Store</span>
                </a>
            </div>
        </div>
    );
}
