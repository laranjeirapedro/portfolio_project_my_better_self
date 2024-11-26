import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-5xl m-auto">
      <h1>Privacy Policy</h1>
      <p>
        <b>Last Updated: 2024-11-16</b>
      </p>

      <p>
        At <b>Arcane Hut</b>, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy outlines how
        we collect, use, and safeguard the information you provide through our
        website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        The only information we collect is submitted voluntarily through our
        contact page, including:
      </p>

      <ul className="un-list">
        <li>Name</li>
        <li>Company Name</li>
        <li>Phone Number</li>
        <li>Email Address</li>
        <li>Message Content</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        The information you provide is used solely for the purpose of contacting
        you in response to your inquiry or request. We do not use your
        information for marketing purposes, share it with third parties, or
        store it for any other reason beyond facilitating communication.
      </p>

      <h2>3. Data Security</h2>
      <p>
        We take appropriate measures to protect your information from
        unauthorized access, alteration, disclosure, or destruction. Your data
        is handled securely and stored only for as long as necessary to fulfill
        your request.
      </p>

      <h2>4. Your Rights</h2>
      <p>You have the right to:</p>

      <ul className="un-list">
        <li>Request access to the information you have provided.</li>
        <li>Request correction or deletion of your information.</li>
        <li>Withdraw your consent for us to contact you at any time.</li>
      </ul>
      <p>
        To exercise these rights, please contact us at [insert contact email].
      </p>

      <h2>5. Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the updated date.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or how your data is
        handled, please reach out to us:
      </p>

      <ul className="un-list">
        <li>Email: contact@arcanehut.com</li>
      </ul>

      <h3>
        Your trust is important to us, and we are committed to ensuring your
        privacy and satisfaction.
      </h3>
    </div>
  );
}
