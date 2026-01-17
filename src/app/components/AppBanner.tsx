"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function AppBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isIOS = /iPad|iPhone|iPod/.test(userAgent);
        const isAndroid = /android/i.test(userAgent);
        const isSafari = isIOS && /Safari/i.test(userAgent) && !/Chrome|CriOS|FxiOS|EdgiOS|OPiOS|mercury/i.test(userAgent);
        
        // Hide if not mobile OR if it's iOS Safari (which uses the native banner)
        if (!(isIOS || isAndroid) || isSafari) {
            return;
        }

        // Check if user dismissed it before
        const isDismissed = localStorage.getItem("app-banner-dismissed");
        if (!isDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem("app-banner-dismissed", "true");
    };

    const handleOpen = () => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        const isAndroid = /android/i.test(userAgent);
        
        if (isAndroid) {
            // Android Intent fallback to Play Store
            window.location.href = "intent://escribo.ai#Intent;scheme=https;package=ai.escribo.app;end";
        } else {
            // iOS non-Safari fallback to App Store
            window.location.href = "https://apps.apple.com/app/idYOUR_APP_ID";
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[#4F39F6] text-white p-3 flex items-center justify-between shadow-lg animate-in slide-in-from-top duration-300">
            <div className="flex items-center gap-3">
                <button 
                    onClick={handleDismiss}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                    <X size={20} />
                </button>
                <div className="flex items-center gap-2">
                    <img src="/icon-192.png" alt="Escribo Icon" className="w-10 h-10 rounded-lg shadow-md border border-white/20" />
                    <div>
                        <p className="text-sm font-bold leading-tight">Escribo</p>
                        <p className="text-[10px] opacity-90 leading-tight">Interactive Storytelling</p>
                    </div>
                </div>
            </div>
            <button 
                onClick={handleOpen}
                className="bg-white text-[#4F39F6] px-4 py-1.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all active:scale-95 shadow-sm"
            >
                GET
            </button>
        </div>
    );
}
