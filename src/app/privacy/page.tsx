import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about how Intentionality handles your data. We prioritize your privacy and focus on keeping your data secure.",
};

export default function Privacy() {
  const today = new Date().toLocaleDateString();

  return (
    <main className="bg-[#18344a] min-h-screen flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-[#18344A] mb-4">
          Privacy Policy
        </h1>
        <p className="mb-4 text-gray-700">
          Last updated: <span>{today}</span>
        </p>
        <h2 className="text-xl font-semibold text-[#18344A] mb-2">
          What data do we collect?
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>
            Anonymous usage data (for syncing across your devices)
          </li>
          <li>The URLs you visit when prompted by the extension</li>
          <li>
            The reasons and ratings you provide for visiting those URLs
          </li>
          <li>Session duration and activity logs</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#18344A] mb-2">
          How do we use your data?
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>To help you track and reflect on your browsing habits</li>
          <li>To provide personalized insights and statistics</li>
          <li>
            To securely sync your data across devices
          </li>
        </ul>
        <h2 className="text-xl font-semibold text-[#18344A] mb-2">
          What we do
          <span className="font-bold text-red-600 ml-1">NOT</span> collect:
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>
            We do not collect your passwords, financial, health, or
            personal communication data.
          </li>
          <li>We do not sell or share your data with third parties.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#18344A] mb-2">
          How is your data stored?
        </h2>
        <p className="mb-4 text-gray-700">
          All data is stored securely using Google Firebase and is only
          accessible to you.
        </p>
        <h2 className="text-xl font-semibold text-[#18344A] mb-2">
          Your choices
        </h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>
            You can delete your data at any time by contacting us at
            <a
              href="mailto:support@intentionality.app"
              className="text-[#4A90A4] underline ml-1"
            >
              support@intentionality.app
            </a>
            .
          </li>
          <li>You can uninstall the extension at any time.</li>
        </ul>
        <h2 className="text-xl font-semibold text-[#18344A] mb-2">Contact</h2>
        <p className="mb-2 text-gray-700">
          If you have questions or concerns, contact us at
          <a
            href="mailto:support@intentionality.app"
            className="text-[#4A90A4] underline ml-1"
          >
            support@intentionality.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
