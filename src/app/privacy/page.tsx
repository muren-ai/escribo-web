import React from "react";

export const metadata = {
    title: "Privacy Policy - Escribo",
    description: "Privacy Policy for Escribo mobile application.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8 relative overflow-y-auto">
            <div className="max-w-3xl mx-auto relative z-10 bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-xl border border-white my-8">
                <div className="flex flex-col items-center mb-8">
                    <img src="/escribo-logo.svg" alt="Escribo" className="h-10 w-auto mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                    <p className="text-gray-500 font-medium">Last Updated: 21 Jan 2026</p>
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-gray-700">
                    <p>
                        Escribo (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how information is collected, used, stored, and protected when you use the Escribo mobile application and our wearable QR services.
                    </p>
                    <p className="font-medium">
                        By using Escribo, you acknowledge and agree to the practices described in this Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">a. User-Provided Information</h3>
                    <p>We collect information you provide directly to us when you create an account, update your profile, or scan a garment. This includes:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Registration Data:</strong> Name, email address, and profile display name.</li>
                        <li><strong>User Content:</strong> Text stories, photos, and notes you attach to QR-linked garments.</li>
                        <li><strong>Social Interaction:</strong> Comments and reports you submit through the app.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">b. Device Permissions</h3>
                    <p>Escribo requests specific permissions to enable core functionality:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Camera Access:</strong> Primarily used to scan QR codes on garments and capture photos for instant sharing.</li>
                        <li><strong>Photo Library:</strong> Used to upload existing photos from your gallery to your stories. We only access photos you explicitly select.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">c. Usage and Technical Data</h3>
                    <p>To improve app performance and security, we automatically collect:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Analytic Data:</strong> Feature usage, navigation paths within the app, and performance metrics.</li>
                        <li><strong>Technical Logs:</strong> Device type, OS version, and crash reports.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Informantion</h2>
                    <p>We use your information to provide and refine our services:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Service Delivery:</strong> Managing accounts, syncing stories to QR codes, and enabling person-to-person social interaction.</li>
                        <li><strong>Community Safety:</strong> Monitoring and reviewing reports of objectionable content to maintain a safe environment.</li>
                        <li><strong>App Enhancement:</strong> Analyzing usage patterns to fix bugs and design new features.</li>
                    </ul>
                    <p className="font-medium">We do NOT sell, rent, or trade your personal data to third parties for marketing or advertising.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Retention & Deletion</h2>
                    <p>We store your data as long as your account is active. You have full control over your data:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>In-App Controls:</strong> You can edit or remove your stories and profile information directly within the app.</li>
                        <li><strong>Account Deletion:</strong> You can request full account and data deletion at any time via our dedicated <a href="/delete-account" className="text-primary hover:underline">Account Deletion</a> page.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
                    <p>We implement industry-standard security measures, including encryption and secure server environments, to protect your data. However, please be aware that no storage or transmission method is 100% secure.</p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Children’s Privacy</h2>
                    <p>
                        Escribo is not intended for children under 13. We do not knowingly collect personal data from children. If we become aware of such collection, we will take immediate steps to delete the data.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
                    <p>For any privacy-related inquiries, please contact our team:</p>
                    <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-secondary text-center">
                        <p className="font-medium text-gray-900">Email: <a href="mailto:studio@muren.ai" className="text-primary hover:underline">studio@muren.ai</a></p>
                        <p className="font-medium text-gray-900">Website: <a href="https://www.escribo.ai" className="text-primary hover:underline">www.escribo.ai</a></p>
                    </div>
                </div>

                <div className="mt-12 text-center pt-8 border-t border-gray-100">
                    <a href="/" className="inline-flex items-center text-primary font-medium hover:text-primary-hover transition-colors">
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}
