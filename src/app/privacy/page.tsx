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
                        Escribo (“we,” “our,” or “us”) values your privacy and is committed to protecting your information.
                        This Privacy Policy explains how information is collected, used, stored, and protected when you use
                        the Escribo mobile application.
                    </p>
                    <p className="font-medium">
                        By using Escribo, you agree to this Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">a. Camera Access</h3>
                    <p>Escribo uses your device’s camera to:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Scan QR codes on wearables</li>
                        <li>Allow users to capture photos to share or attach within the app</li>
                    </ul>
                    <p className="text-sm bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
                        Camera access is only used when you choose to take a photo or scan a QR code.
                        We do not access the camera in the background.
                    </p>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">b. Gallery / Photo Library Access</h3>
                    <p>Escribo allows you to upload images from your device gallery to:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Share photos within the app</li>
                        <li>Attach images to QR-linked wearables or user-generated content</li>
                    </ul>
                    <p className="text-sm bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
                        We only access photos you explicitly select. We do not scan or access your entire photo library.
                    </p>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">c. QR Code & Wearable Data</h3>
                    <p>When you scan a wearable’s QR code:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>The QR code links the wearable to your Escribo account</li>
                        <li>Content you add (text, images, notes) is associated with that QR code</li>
                    </ul>
                    <p>Any updates made in the app are reflected through the QR-linked experience.</p>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">d. User-Generated Content</h3>
                    <p>Users may voluntarily provide:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Text</li>
                        <li>Images</li>
                        <li>Notes</li>
                        <li>Identifiers linked to wearables or QR codes</li>
                    </ul>
                    <p>This content is stored securely and displayed only according to app functionality and user intent.</p>

                    <h3 className="text-xl font-medium text-gray-900 mt-6 mb-2">e. Device & Usage Information</h3>
                    <p>We may collect limited technical information such as:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Device type and OS version</li>
                        <li>App usage data</li>
                        <li>Crash and performance logs</li>
                    </ul>
                    <p>This data is used solely to improve app performance and reliability.</p>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use collected data to:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Enable QR code scanning and wearable syncing</li>
                        <li>Allow photo sharing via camera or gallery</li>
                        <li>Store and display user-added content linked to QR codes</li>
                        <li>Improve app functionality and user experience</li>
                        <li>Ensure app security and stability</li>
                    </ul>
                    <p className="font-medium">We do not sell, rent, or share personal data for advertising purposes.</p>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Storage & Security</h2>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Data is stored using industry-standard security practices</li>
                        <li>Access is restricted to authorized systems</li>
                        <li>Reasonable measures are taken to prevent unauthorized access, loss, or misuse</li>
                    </ul>
                    <p>No system is completely secure, and absolute security cannot be guaranteed.</p>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
                    <p>Escribo does not share your personal data with third parties, except:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>When required by law</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect the rights, safety, or security of Escribo and its users</li>
                    </ul>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. User Control & Rights</h2>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Choose what content you upload or share</li>
                        <li>Manage camera and gallery permissions via device settings</li>
                        <li>Request deletion of your data by contacting us</li>
                    </ul>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Children’s Privacy</h2>
                    <p>
                        Escribo is not intended for children under 13 years of age.
                        We do not knowingly collect personal data from children.
                    </p>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Third-Party Services</h2>
                    <p>We may use trusted third-party services for:</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Analytics</li>
                        <li>Crash reporting</li>
                    </ul>
                    <p className="mt-2">
                        These services receive only minimal, non-personal information and operate under their own privacy policies.
                    </p>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
                    <p>
                        This Privacy Policy may be updated periodically. Any changes will be reflected with an updated “Last Updated” date.
                    </p>


                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
                    <p>For privacy-related questions or data requests, contact us at:</p>
                    <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-secondary text-center">
                        <p className="font-medium text-gray-900">Email: <a href="mailto:info@escribo.ai" className="text-primary hover:underline">info@escribo.ai</a></p>
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
