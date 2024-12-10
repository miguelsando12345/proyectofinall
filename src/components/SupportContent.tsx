import React from "react";

const SupportContent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Support & Maintenance</h1>
      <p className="text-lg mb-6 text-center">
        Our support system is currently under maintenance. We are working hard
        to bring it back online. Please check back later!
      </p>
      <img
        src="https://via.placeholder.com/600x400"
        alt="Maintenance Illustration"
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-gray-400 text-center">
        Thank you for your patience and understanding. If you have urgent
        queries, feel free to contact us at{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-400 hover:underline"
        >
          support@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default SupportContent;
