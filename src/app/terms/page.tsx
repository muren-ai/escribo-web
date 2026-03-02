import React from "react";

export const metadata = {
    title: "Terms of Service - Escribo",
    description: "Terms of Service and Community Guidelines for Escribo.",
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8 relative overflow-y-auto">
            <div className="max-w-3xl mx-auto relative z-10 bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-xl border border-white my-8">
                <div className="flex flex-col items-center mb-8">
                    <img src="/escribo-logo.svg" alt="Escribo" className="h-10 w-auto mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Terms of Service</h1>
                    <p className="text-gray-500 font-medium text-center">Effective: March 02, 2026</p>
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-gray-700">
                    <p>
                        Welcome to Escribo. By using our mobile application and services, you agree to follow these Terms of Service. Please read them carefully.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By creating an account or using Escribo, you agree to be bound by these Terms. If you do not agree, you may not use our services.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. User-Generated Content (UGC) Policy</h2>
                    <p>
                        Escribo allows you to post content, including photos and text stories. You are solely responsible for the content you post.
                    </p>
                    <p className="font-bold text-red-600">
                        Apple App Store Requirement: There is a zero-tolerance policy for objectionable content.
                    </p>
                    <p>
                        You strictly agree NOT to post any content that is:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Illegal or Offensive:</strong> Including nudity, graphic violence, or sexually explicit material.</li>
                        <li><strong>Abusive or Discriminatory:</strong> Content that promotes hate speech or discriminates based on race, religion, gender, or sexual orientation.</li>
                        <li><strong>Harassment:</strong> Content that bullies, stalks, or threatens other users.</li>
                        <li><strong>IP Infringement:</strong> Content that you do not have the rights to share.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Content Moderation & Reporting</h2>
                    <p>
                        To ensure a safe community, Escribo implements the following safeguards:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Reporting:</strong> Users can report any content or user that violates these terms using the "Report" button on any post or comment.</li>
                        <li><strong>Blocking:</strong> Users can block any other user to immediately hide their content and prevent interaction.</li>
                        <li><strong>24-Hour Review:</strong> Our moderation team reviews all reports within 24 hours. Objectionable content will be removed, and the offending user may be permanently banned.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Termination of Access</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to Escribo at our sole discretion, without notice, for conduct that violates these Terms or is harmful to other users or the Escribo brand.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
                    <p>
                        Escribo is provided "as is." We are not liable for any damages resulting from your use of the app or the behavior of other users.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have questions about these Terms, contact us at:
                    </p>
                    <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-secondary text-center">
                        <p className="font-medium text-gray-900">Email: <a href="mailto:studio@muren.ai" className="text-primary hover:underline">studio@muren.ai</a></p>
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
