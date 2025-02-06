import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy",
};
const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center px-5 py-5">
      <div className="text-white  max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-7xl font-bold">Privacy Policy</h1>
        </header>

        <section className="mb-8">
          <p className="text-2xl">
            Welcome to FoxTraa! Your privacy is important to us, and we are
            committed to protecting the personal information you share with us.
            This Privacy Policy outlines how we collect, use, and safeguard your
            information when you interact with our website and services. By
            using FoxTraa, you agree to the practices described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="text-2xl mb-4">
            We collect the following types of information to provide and improve
            our services:
          </p>

          <h3 className="text-4xl font-medium mb-2">a. Personal Information</h3>
          <p className="text-2xl mb-4">
            This includes information that directly identifies you, such as:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl">
            <li>
              <strong>Name:</strong> To personalize your experience and address
              you appropriately.
            </li>
            <li>
              <strong>Email Address:</strong> For communication, account setup,
              and updates.
            </li>
            <li>
              <strong>Phone Number (if provided):</strong> To assist with
              account recovery or provide support.
            </li>
            <li>
              <strong>Payment Details:</strong> For securely processing
              transactions (if applicable).
            </li>
          </ul>

          <h3 className="text-4xl font-medium mb-2">
            b. Non-Personal Information
          </h3>
          <p className="text-2xl mb-4">
            This refers to data collected automatically when you use our
            website, including:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl">
            <li>
              <strong>IP Address:</strong> To identify geographic trends and
              enhance security.
            </li>
            <li>
              <strong>Browser Type and Device Information:</strong> To optimize
              compatibility and functionality.
            </li>
            <li>
              <strong>Pages Visited and Time Spent on Site:</strong> To analyze
              user behavior and improve content.
            </li>
            <li>
              <strong>Referral Source:</strong> To understand how users find our
              platform.
            </li>
          </ul>

          <h3 className="text-4xl font-medium mb-2">
            c. Cookies and Tracking Technologies
          </h3>
          <p className="text-2xl mb-4">We use cookies to:</p>
          <ul className="list-disc list-inside mb-4 text-2xl">
            <li>Remember your preferences and login details.</li>
            <li>Analyze site performance for a better user experience.</li>
            <li>Deliver personalized content and advertisements.</li>
          </ul>
          <p className="text-2xl">
            You can manage your cookie preferences through your browser
            settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-2xl mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl">
            <li>
              To provide and improve services: Enhance functionality and add new
              features based on user feedback.
            </li>
            <li>
              To respond to inquiries: Address your concerns promptly and
              effectively.
            </li>
            <li>
              To send updates and promotions: Inform you about new features,
              tools, or special offers (with your consent).
            </li>
            <li>
              To ensure security: Detect and prevent fraud or potential threats
              to our platform.
            </li>
            <li>
              To analyze usage: Use aggregated data to identify trends and
              improve our offerings.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">
            3. Sharing of Information
          </h2>
          <p className="text-2xl mb-4">
            We do not sell, rent, or trade your personal information. However,
            we may share your data in the following scenarios:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl ">
            <li>
              <strong>Service Providers:</strong> Trusted third parties who
              support our operations, such as hosting providers, payment
              processors, or analytics services. These providers are bound by
              confidentiality agreements.
            </li>
            <li>
              <strong>Legal Compliance:</strong> When required by law, court
              orders, or to protect our legal rights, property, or safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> If FoxTraa undergoes a
              merger, acquisition, or sale of assets, your information may be
              transferred to the successor organization.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-2xl mb-4">
            We take your data security seriously and employ the following
            measures:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl ">
            <li>
              <strong>SSL Encryption:</strong> Protects data during
              transmission.
            </li>
            <li>
              <strong>Regular Security Audits:</strong> Identifies and addresses
              vulnerabilities.
            </li>
            <li>
              <strong>Access Controls:</strong> Ensures only authorized
              personnel handle your information.
            </li>
          </ul>
          <p className="text-2xl ">
            While we strive to protect your data, no method of online
            transmission or storage is completely secure. We recommend
            safeguarding your account credentials to enhance security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">5. Your Rights</h2>
          <p className="text-2xl mb-4">
            You have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl ">
            <li>
              <strong>Access:</strong> Request a copy of the data we hold about
              you.
            </li>
            <li>
              <strong>Correction:</strong> Update inaccurate or incomplete
              information.
            </li>
            <li>
              <strong>Deletion:</strong> Request the removal of your personal
              data unless retention is required for legal or operational
              purposes.
            </li>
            <li>
              <strong>Opt-Out:</strong> Unsubscribe from marketing
              communications or withdraw consent for data collection.
            </li>
          </ul>
          <p className="text-2xl">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:support@foxtraa.com"
              className="text-blue-400 hover:underline"
            >
              support@foxtraa.com
            </a>
            . We will address your request promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">6. Third-Party Links</h2>
          <p className="text-2xl mb-4">
            Our website may contain links to third-party websites. Please note:
          </p>
          <ul className="list-disc list-inside mb-4 text-2xl ">
            <li>
              We are not responsible for the privacy practices of these external
              sites.
            </li>
            <li>
              Review their privacy policies before sharing any personal
              information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">7. Children&apos;s Privacy</h2>
          <p className="text-2xl mb-4">
            FoxTraa does not knowingly collect personal information from
            individuals under the age of 13. If you believe a child has provided
            us with personal information, please notify us at{" "}
            <a
              href="mailto:support@foxtraa.com"
              className="text-blue-400 hover:underline"
            >
              support@foxtraa.com
            </a>
            , and we will take steps to delete the data promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p className="text-2xl mb-4">
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal obligations. When updates occur 
            significant changes will be communicated via email or a notice on
            our website.
          </p>
          <p className="text-2xl">
            We encourage you to review this policy regularly to stay informed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-semibold mb-4">9. Contact Us</h2>
          <p className="text-2xl mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, feel free to reach out:
          </p>
          <p className="text-2xl">
            <strong>FoxTraa</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:support@foxtraa.com"
              className="text-blue-400 hover:underline"
            >
              support@foxtraa.com
            </a>
          </p>
        </section>

        <footer>
          <p className="text-2xl">
            Thank you for trusting FoxTraa with your information. Your privacy
            is our priority.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
