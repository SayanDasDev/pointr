import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pointr",
  description:
    "Privacy Policy describing how Pointr collects, processes, and protects developer data and source code.",
};

export default function PrivacyPolicyPage() {
  const LAST_UPDATE_DATE = "2026/02/09";

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-center text-4xl font-bold tracking-tight text-gray-900">
        Privacy Policy
      </h1>

      <p className="mb-12 text-center text-sm text-gray-500">
        Last updated: {LAST_UPDATE_DATE}
      </p>

      <hr className="border-gray-200" />

      <section className="mt-12 space-y-12 leading-relaxed text-gray-700">
        <div className="space-y-4">
          <p>
            Pointr (“we”, “our”, or “us”) is committed to protecting the privacy
            and intellectual property of the developers, teams, and enterprises
            that use our platform. This Privacy Policy explains how we collect,
            use, store, and protect your information when you use the Pointr Web
            IDE, Cloud Containers, AI Services, and CLI tools (collectively, the
            “Service”).
          </p>
          <p>
            We understand that your source code is your most valuable asset. Our
            architecture is designed with a &quot;Privacy by Design&quot;
            approach to ensure your intellectual property remains secure,
            especially when interacting with our AI features.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information to provide a seamless development
            environment. This data is categorized as follows:
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            1.1 Account and Profile Information
          </h3>
          <p className="mb-2">When you register for Pointr, we collect:</p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              <strong>Identity Data:</strong> Name, email address, username, and
              avatar.
            </li>
            <li>
              <strong>Authentication Data:</strong> OAuth tokens from providers
              (e.g., GitHub, GitLab, Google) to facilitate login and repository
              access.
            </li>
            <li>
              <strong>Billing Information:</strong> If you subscribe to a paid
              plan, our payment processor (e.g., Stripe) collects your payment
              details. Pointr does not store full credit card numbers.
            </li>
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            1.2 User Content (Your Codebase)
          </h3>
          <p className="mb-2">
            To provide the IDE functionality, we must process your development
            assets. This includes:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              <strong>Source Code:</strong> Files, folders, and assets you
              upload, clone, or create within the Pointr environment.
            </li>
            <li>
              <strong>Environment Variables:</strong> Secrets and configuration
              variables (.env files) stored in your secure container.
            </li>
            <li>
              <strong>Terminal Data:</strong> Command history and outputs
              generated during your sessions.
            </li>
            <li>
              <strong>Repository Metadata:</strong> Branch names, commit
              messages, and PR descriptions fetched via Git integrations.
            </li>
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            1.3 AI Interactions and Context
          </h3>
          <p className="mb-2">
            When you use Pointr AI features (Chat, Autocomplete, Refactor):
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              <strong>Prompts:</strong> The natural language queries you send to
              the AI.
            </li>
            <li>
              <strong>Code Snippets:</strong> Relevant sections of your code
              selected as &quot;context&quot; to answer your query.
            </li>
            <li>
              <strong>Telemetry:</strong> Acceptance/rejection rates of AI
              suggestions (used to improve user experience, not to train models
              on your code).
            </li>
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            1.4 Usage and Telemetry Data
          </h3>
          <p className="mb-2">
            We collect technical data to maintain platform stability:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Device Info:</strong> Browser type, OS, and screen
              resolution.
            </li>
            <li>
              <strong>Performance Metrics:</strong> Container boot times,
              latency, and error logs.
            </li>
            <li>
              <strong>Feature Usage:</strong> Which IDE extensions or tools are
              most frequently used.
            </li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your data strictly to deliver and improve the Pointr service.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            2.1 Core Service Provision
          </h3>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              Provisioning ephemeral cloud containers for your development
              sessions.
            </li>
            <li>
              Persisting your workspace state so you can resume work across
              devices.
            </li>
            <li>Syncing code changes to your connected Git providers.</li>
            <li>
              Enabling real-time collaboration (multiplayer editing) with other
              users.
            </li>
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            2.2 AI Services & Code Privacy
          </h3>
          <p className="mb-2">
            We operate under a strict policy regarding the use of user code for
            artificial intelligence training:
          </p>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              <strong>No Training on Private Code:</strong> Pointr{" "}
              <strong>does not</strong> use your private source code, non-public
              repository data, or environment variables to train our
              foundational models. Your code remains your intellectual property.
            </li>
            <li>
              <strong>Inference Only:</strong> Data sent to AI models is used
              solely for the purpose of generating the immediate response
              (inference).
            </li>
          </ul>
        </section>

        {/* 3. AI Subprocessors & Data Flow */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            3. AI Subprocessors & Data Flow
          </h2>
          <p className="mb-4">
            Pointr utilizes state-of-the-art Large Language Models (LLMs) to
            power our AI features.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Data Transmission:</strong> When you trigger an AI action,
              relevant code snippets and your prompt are transmitted securely
              (TLS 1.3) to our inference partners (e.g., OpenAI, Anthropic, or
              our self-hosted inference clusters).
            </li>
            <li>
              <strong>Zero Retention:</strong> We have negotiated Zero Data
              Retention agreements with our enterprise model providers. This
              means they do not store, log, or train on the code snippets sent
              via Pointr.
            </li>
            <li>
              <strong>Context Indexing:</strong> To provide &quot;Codebase
              Awareness,&quot; Pointr creates a local embedding index of your
              project. This index is stored in your secure cloud container and
              is deleted when the container is destroyed or the project is
              deleted.
            </li>
          </ul>
        </section>

        {/* 4. Data Storage and Security */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            4. Data Storage and Security
          </h2>
          <p className="mb-4">
            We employ enterprise-grade security measures to protect your
            development environment.
          </p>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            4.1 Encryption
          </h3>
          <ul className="mb-4 list-disc space-y-1 pl-6">
            <li>
              <strong>In Transit:</strong> All data moving between your browser,
              our servers, and third-party services is encrypted using TLS 1.2+.
            </li>
            <li>
              <strong>At Rest:</strong> Source code and databases stored on our
              disks are encrypted using AES-256.
            </li>
            <li>
              <strong>Secrets Management:</strong> Environment variables and API
              keys are stored in a dedicated vault service and are injected into
              containers only at runtime.
            </li>
          </ul>

          <h3 className="mt-6 mb-2 text-lg font-semibold text-gray-900">
            4.2 Container Isolation
          </h3>
          <p>
            Every user session runs in an isolated sandbox (container or
            microVM). This ensures that your runtime environment, memory, and
            processes are completely inaccessible to other users.
          </p>
        </section>

        {/* 5. Data Retention */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            5. Data Retention
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Active Accounts:</strong> We retain your code and settings
              as long as your account is active to provide the Service.
            </li>
            <li>
              <strong>Ephemeral Containers:</strong> Runtime data (RAM, temp
              files) in development containers is destroyed immediately when the
              container is stopped.
            </li>
            <li>
              <strong>Deletion:</strong> Upon request or account termination,
              all personal data and associated codebases are permanently deleted
              from our primary systems within 30 days. Backup archives may
              retain data for up to 90 days before being overwritten.
            </li>
          </ul>
        </section>

        {/* 6. Data Sharing */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            6. Data Sharing and Disclosure
          </h2>
          <p className="mb-4">
            We <strong>do not</strong> sell your data. We share data only in the
            following specific circumstances:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Service Providers:</strong> With trusted infrastructure
              partners (e.g., AWS, Vercel) necessary to host the platform.
            </li>
            <li>
              <strong>Legal Compliance:</strong> If required by a valid court
              order or legal process.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, user data may be transferred to
              the acquiring entity.
            </li>
          </ul>
        </section>

        {/* 7. Cookies and Local Storage */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            7. Cookies and Local Storage
          </h2>
          <p className="mb-4">
            Pointr uses local storage and cookies strictly for functional
            purposes:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Authentication:</strong> Keeping you logged in securely.
            </li>
            <li>
              <strong>IDE State:</strong> Remembering your open tabs, theme
              preferences, and panel layout.
            </li>
            <li>
              <strong>Analytics:</strong> Anonymous usage statistics to improve
              performance (can be opted out of in settings).
            </li>
          </ul>
        </section>

        {/* 8. Your Rights */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            8. Your Rights
          </h2>
          <p className="mb-4">
            Regardless of your location, Pointr extends the following rights to
            all users:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Right to Access:</strong> Request a copy of all data we
              hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> Correct inaccurate
              profile data.
            </li>
            <li>
              <strong>Right to Erasure:</strong> Request full deletion of your
              account and codebases (&quot;Right to be Forgotten&quot;).
            </li>
            <li>
              <strong>Right to Portability:</strong> Export your projects and
              settings in a standard format.
            </li>
          </ul>
        </section>

        {/* 9. Contact Us */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            9. Contact Us
          </h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or the security of
            your code, please contact our Data Protection Officer:
          </p>
          <address className="not-italic">
            <strong>Pointr Legal Team</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:privacy@pointr.sayandas.co.in"
              className="text-blue-600 hover:underline"
            >
              privacy@pointr.sayandas.co.in
            </a>
            <br />
            123 Innovation Drive, Suite 400
            <br />
            San Francisco, CA 94103
          </address>
        </section>
      </section>
    </div>
  );
}
