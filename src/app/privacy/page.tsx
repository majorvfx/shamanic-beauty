import React from "react";

export default function PrivacyPage() {
    return (
        <main className="py-32 px-6 bg-background min-h-screen">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-8">Privacy Policy</h1>
                <p className="text-foreground/60 mb-12">Last Updated: January 2026</p>

                <div className="space-y-8 text-foreground/80 font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">1. Introduction</h2>
                        <p>
                            Shamanic Beauty ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">2. Data We Collect</h2>
                        <p>
                            We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                            <li><strong>Technical Data:</strong> includes IP address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">5. Your Legal Rights</h2>
                        <p>
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data, and (where the lawful ground of processing is consent) to withdraw consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">6. Third-Party Links</h2>
                        <p>
                            This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif text-foreground mb-4">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:phoenix@shamanicbeauty.com" className="hover:text-gold transition-colors underline">phoenix@shamanicbeauty.com</a>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
