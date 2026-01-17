"use client";

import { useEffect, useState } from "react";

export default function ClientActionButton({ storyId }: { storyId: string }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Basic mobile detection
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
            setIsMobile(true);
        }
    }, []);

    const handleAction = () => {
        if (isMobile && storyId) {
            // Deep link format: escribo://story/<id>?action=comment
            // We use standard schema. Fallback to download page if not installed.
            window.location.href = `escribo://story/${storyId}?action=comment`;

            // Optional: Set a timeout to redirect to store if app doesn't open
            setTimeout(() => {
                window.location.href = "https://escribo.ai/download";
            }, 2000);
        } else {
            // Desktop or no story: Go to download/landing
            window.location.href = "https://escribo.ai/download";
        }
    };

    return (
        <button
            onClick={handleAction}
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary-hover hover:scale-105 hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
            <span>{isMobile ? "Open in App to Comment" : "Add a comment"}</span>
        </button>
    );
}
