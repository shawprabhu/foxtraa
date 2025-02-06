import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
}

const TermsAndConditions = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="  max-w-3xl w-full mb-4">
        <h1 className="text-7xl  font-bold mb-4">Terms & Conditions</h1>
        <p className="mb-4 text-2xl">
          Welcome to FoxTraa! These Terms & Conditions govern your use of our
          website and services. By accessing or using FoxTraa, you agree to
          comply with these terms. Please read them carefully.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4 text-2xl">
          By using FoxTraa, you confirm that you have read, understood, and
          agreed to these Terms & Conditions. If you do not agree, please
          discontinue use of our services immediately.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">
          2. User Eligibility
        </h2>
        <ul className=" text-2xl list-disc ml-6 mb-4">
          <li>
            Be at least 18 years old or have parental/guardian consent if under
            18.
          </li>
          <li>
            Provide accurate and complete registration information (if
            applicable).
          </li>
          <li>
            Use the website in compliance with applicable laws and regulations.
          </li>
        </ul>

        <h2 className="text-4xl font-semibold mt-4 mb-4">3. Use of Services</h2>
        <p className="mb-4 text-2xl">You agree not to:</p>
        <ul className=" text-2xl list-disc ml-6 mb-4">
          <li>Engage in illegal, fraudulent, or unauthorized activities.</li>
          <li>Interfere with the proper functioning of the website.</li>
          <li>Distribute or post harmful, abusive, or offensive content.</li>
          <li>
            Attempt to gain unauthorized access to our systems or user data.
          </li>
        </ul>

        <h2 className="text-4xl font-semibold mt-4 mb-4">
          4. Intellectual Property Rights
        </h2>
        <p className="mb-4 text-2xl">
          All content on FoxTraa, including text, graphics, logos, and software,
          is owned by or licensed to FoxTraa and is protected by intellectual
          property laws. You may not use, reproduce, or distribute any content
          without our prior written permission.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">
          5. User-Generated Content
        </h2>
        <p className="mb-4 text-2xl">
          If you post or submit content to FoxTraa, you grant us a
          non-exclusive, royalty-free, worldwide license to use, modify, and
          distribute it. You are responsible for ensuring that your content does
          not violate any laws or third-party rights.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">6. Privacy</h2>
        <p className="mb-4 text-2xl">
          Your privacy is important to us. Our collection and use of personal
          data are governed by our Privacy Policy. By using FoxTraa, you consent
          to our data practices as outlined in the Privacy Policy.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">7. Termination</h2>
        <p className="mb-4 text-2xl">
          We reserve the right to suspend or terminate your access to FoxTraa at
          our discretion if you violate these Terms & Conditions or engage in
          activities that could harm our platform or users.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">
          8. Limitation of Liability
        </h2>
        <p className="mb-4 text-2xl">
          FoxTraa is provided on an &quot;as-is&quot; basis. We are not liable for any
          indirect, incidental, or consequential damages arising from your use
          of our services. Your use of FoxTraa is at your own risk.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">
          9. Changes to Terms
        </h2>
        <p className="mb-4 text-2xl">
          We may update these Terms & Conditions from time to time. Changes will
          be effective upon posting. It is your responsibility to review them
          periodically.
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">10. Governing Law</h2>
        <p className="mb-4 text-2xl">
          These Terms & Conditions are governed by the laws of [Insert
          Jurisdiction]. Any disputes arising under these terms shall be subject
          to the exclusive jurisdiction of the courts in [Insert Location].
        </p>

        <h2 className="text-4xl font-semibold mt-4 mb-4">11. Contact Us</h2>
        <p className="mb-4 text-2xl">
          For any questions regarding these Terms & Conditions, please contact
          us at:
        </p>
        <p className="mb-4 font-medium text-2xl">FoxTraa</p>
        <p className="mb-4 font-medium text-2xl">
          Email:{" "}
          <a
            href="mailto:support@foxtraa.com"
            className="text-blue-400 hover:underline"
          >
            support@foxtraa.com
          </a>
        </p>

        <p className=" text-1xl mt-6  text-gray-500">
          By using FoxTraa, you acknowledge that you have read, understood, and
          agreed to these Terms & Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
