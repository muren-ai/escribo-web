import React from "react";

export const metadata = {
    title: "Safety Standards - Escribo",
    description: "Escribo's safety standards and policies against child sexual abuse and exploitation (CSAE).",
};

export default function SafetyStandards() {
    return (
        <div className="min-h-screen bg-transparent p-4 md:p-8 relative overflow-y-auto">
            <div className="max-w-3xl mx-auto relative z-10 bg-white/90 backdrop-blur-sm p-6 md:p-12 rounded-3xl shadow-xl border border-white my-8">
                <div className="flex flex-col items-center mb-8">
                    <img src="/escribo-logo.svg" alt="Escribo" className="h-10 w-auto mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Safety Standards</h1>
                    <p className="text-gray-500 font-medium text-center">Effective: February 15, 2026</p>
                </div>

                <div className="prose prose-lg prose-indigo max-w-none text-gray-700">
                    <p>
                        At Escribo, the safety of our community is our highest priority. We maintain a zero-tolerance policy against any form of Child Sexual Abuse Material (CSAM) or Child Sexual Abuse and Exploitation (CSAE).
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Zero-Tolerance Policy</h2>
                    <p>
                        Escribo strictly prohibits the creation, sharing, or storage of content that exploits or endangers children. This includes, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Any visual representation of child sexual abuse.</li>
                        <li>Content that promotes or facilitates child grooming or exploitation.</li>
                        <li>The use of QR-linked content to distribute or store illegal material involving minors.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Reporting Mechanisms</h2>
                    <p>
                        We empower our users to help keep Escribo safe. If you encounter any content that violates our child safety standards:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>In-App Reporting:</strong> Use the "Report" feature available on every story and comment. Our moderation team reviews reports 24/7.</li>
                        <li><strong>Email Reporting:</strong> Report urgent concerns directly to <a href="mailto:studio@muren.ai" className="text-primary hover:underline">studio@muren.ai</a>.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Content Review & Moderation</h2>
                    <p>
                        All reported content is manually reviewed by our moderation and safety team. We take the following actions upon discovering a violation:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li>Immediate and permanent removal of the offending content.</li>
                        <li>Permanent suspension of the user account.</li>
                        <li>Reporting the violation to relevant legal authorities, including the National Center for Missing & Exploited Children (NCMEC) where applicable.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Legal Compliance</h2>
                    <p>
                        Escribo complies with all regional and national laws regarding child safety. We cooperate fully with law enforcement agencies in their investigations of illegal activity involving minors on our platform.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Age Suitability & Community Standards</h2>
                    <p>
                        Escribo is designed for an audience aged 13 and older. We maintain our age suitability through:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-4">
                        <li><strong>Safe Interaction:</strong> Direct messaging is limited to comments and stories where users can be reported or blocked instantly.</li>
                        <li><strong>Standard Guidelines:</strong> Our Community Guidelines prohibit mature themes, ensuring the feed remains appropriate for teenagers and adults alike.</li>
                        <li><strong>Guardian Resources:</strong> We encourage parents to use device-level parental controls (iOS/Android) to monitor app usage.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
                    <p>
                        For inquiries regarding our safety practices or to report compliance concerns, please contact our designated point of contact:
                    </p>
                    <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-secondary text-center">
                        <p className="font-medium text-gray-900">Designated Safety Contact</p>
                        <p className="font-medium text-gray-900">
                            Email: <a href="mailto:studio@muren.ai" className="text-primary hover:underline">studio@muren.ai</a>
                        </p>
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
