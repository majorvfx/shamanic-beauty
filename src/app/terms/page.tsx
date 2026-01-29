import React from "react";

export default function TermsPage() {
    return (
        <main className="py-32 px-6 bg-background min-h-screen">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Terms of Service</h1>
                <p className="text-foreground/60 mb-12">Last Updated: January 2026</p>

                <div className="space-y-8 text-foreground/80 font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Shamanic Beauty website (the "Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">2. Educational & Spiritual Content</h2>
                        <p>
                            The content provided by Shamanic Beauty, including Divine Feminine Alchemy, is for educational and spiritual purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">3. User Responsibilities</h2>
                        <p>
                            You agree to use the Service only for lawful purposes. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">4. Intellectual Property</h2>
                        <p>
                            All content on this site, including text, graphics, logos, and course materials, is the property of Shamanic Beauty and Phoenix Rising and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from this content without explicit permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">5. Purchases and Refunds</h2>
                        <p>
                            All purchases for digital courses, coaching, or mentorship programs are subject to our specific refund policy stated at checkout. Generally, due to the digital nature of our content, refunds are not provided once access has been granted, unless otherwise required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">6. Limitation of Liability</h2>
                        <p>
                            Shamanic Beauty shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">7. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Your continued use of the Service after any changes constitutes your acceptance of the new Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">8. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at <a href="mailto:phoenix@shamanicbeauty.com" className="hover:text-gold transition-colors underline">phoenix@shamanicbeauty.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
