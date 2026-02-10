import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Pointr",
  description:
    "Terms and conditions governing the use of the Pointr Cloud IDE and AI services.",
};

export default function TermsOfServicePage() {
  const LAST_UPDATE_DATE = "2026/02/09";

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-6 text-center text-4xl font-bold tracking-tight text-gray-900">
        Terms of Service
      </h1>

      <p className="mb-12 text-center text-sm text-gray-500">
        Last updated: {LAST_UPDATE_DATE}
      </p>

      <hr className="border-gray-200" />

      <section className="mt-12 space-y-12 leading-relaxed text-gray-700">
        <div className="space-y-4">
          <p>
            Welcome to <strong>Pointr</strong>. These Terms of Service (
            &quot;Terms&quot;) constitute a legally binding agreement between
            you (&quot;User&quot;, &quot;you&quot;, or &quot;Developer&quot;)
            and Pointr (&quot;we&quot;, &quot;our&quot;, or &quot;Company&quot;)
            governing your access to and use of the Pointr Cloud IDE, CLI tools,
            and AI-powered development services (collectively, the
            &quot;Service&quot;).
          </p>
          <p>
            By creating an account, pushing code, or launching a container on
            Pointr, you confirm that you have read, understood, and agreed to be
            bound by these Terms.
          </p>
        </div>

        {/* 1. Definitions and Scope */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            1. The Service
          </h2>
          <p className="mb-4">
            Pointr provides a browser-based Integrated Development Environment
            (IDE) backed by cloud containers and artificial intelligence.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Cloud Containers:</strong> We provision ephemeral Linux
              environments for you to execute code. These are subject to
              resource limits (CPU/RAM) based on your plan.
            </li>
            <li>
              <strong>AI Assistants:</strong> Our Service includes generative AI
              tools for code completion, refactoring, and chat.
            </li>
            <li>
              <strong>Availability:</strong> While we aim for 99.9% uptime, the
              Service is provided &quot;as is&quot; and may experience downtime
              for maintenance or emergencies.
            </li>
          </ul>
        </section>

        {/* 2. Account Registration */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            2. User Accounts & Security
          </h2>
          <p className="mb-4">
            You are responsible for maintaining the security of your account and
            environment variables.
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <strong>Authentication:</strong> You must protect your login
              credentials (including GitHub/GitLab tokens used for OAuth).
            </li>
            <li>
              <strong>Team Accounts:</strong> If you are an Admin of a Team, you
              are responsible for the actions and seat management of your team
              members.
            </li>
            <li>
              <strong>Unauthorized Access:</strong> You must notify us
              immediately of any breach of security or unauthorized use of your
              account.
            </li>
          </ul>
        </section>

        {/* 3. Acceptable Use Policy */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            3. Acceptable Use Policy (AUP)
          </h2>
          <p className="mb-4">
            Because Pointr provides compute resources, we strictly prohibit
            abuse. You agree <strong>not</strong> to use the Service to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Crypto Mining:</strong> Mining cryptocurrency or using
              excessive compute resources for non-development purposes.
            </li>
            <li>
              <strong>Malicious Activities:</strong> Hosting phishing sites,
              command-and-control servers, or launching DDoS attacks.
            </li>
            <li>
              <strong>Illegal Content:</strong> Storing or processing child
              sexual abuse material (CSAM), non-consensual sexual content, or
              content that violates intellectual property laws.
            </li>
            <li>
              <strong>Platform Circumvention:</strong> Attempting to
              reverse-engineer our proprietary IDE code, bypass subscription
              paywalls, or access other users&apos; containers.
            </li>
          </ul>
          <p className="mt-4">
            <strong>
              Violation of this AUP will result in immediate account termination
              without refund.
            </strong>
          </p>
        </section>

        {/* 4. Intellectual Property & Code Ownership */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            4. Your Code and Intellectual Property
          </h2>
          <p className="mb-4">
            <strong>You own your code.</strong> Pointr claims no ownership
            rights over the source code, assets, or applications you create,
            upload, or compile using the Service.
          </p>
          <p className="mb-2">
            However, to provide the Service, you grant us a limited, worldwide,
            royalty-free license to:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Host, reproduce, and execute your code within our cloud
              containers.
            </li>
            <li>Create backup snapshots of your workspace state.</li>
            <li>
              Parse your code to provide syntax highlighting, intellisense, and
              AI context.
            </li>
          </ul>
        </section>

        {/* 5. AI Services and Generated Code */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            5. AI Features and Generated Content
          </h2>
          <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-900">
            5.1 Ownership of Output
          </h3>
          <p className="mb-2">
            Subject to applicable law, <strong>you own the output</strong> (code
            snippets, refactors, docs) generated by Pointr AI features when you
            are the prompter. Pointr assigns all rights, title, and interest in
            such output to you.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-900">
            5.2 Accuracy Disclaimer
          </h3>
          <p className="mb-2">
            Artificial Intelligence is probabilistic. You acknowledge that:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Pointr AI may generate incorrect, insecure, or buggy code
              (&quot;hallucinations&quot;).
            </li>
            <li>
              You are solely responsible for reviewing, testing, and securing
              any AI-generated code before deploying it to production.
            </li>
            <li>
              Pointr is not liable for damages caused by the use of AI-generated
              code.
            </li>
          </ul>
        </section>

        {/* 6. Payment and Subscription */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            6. Payment and Billing
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Subscriptions:</strong> Paid plans (Pro, Enterprise) are
              billed in advance on a recurring basis.
            </li>
            <li>
              <strong>Cancellation:</strong> You may cancel at any time. Your
              access to paid features will continue until the end of the current
              billing cycle.
            </li>
            <li>
              <strong>Refunds:</strong> Refunds are handled on a case-by-case
              basis. We generally do not provide refunds for partial months
              unless required by law.
            </li>
            <li>
              <strong>Overage Charges:</strong> Enterprise plans may incur
              overage charges if compute or storage limits are exceeded, as
              defined in your specific order form.
            </li>
          </ul>
        </section>

        {/* 7. Disclaimers and Warranties */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            7. Disclaimers
          </h2>
          <p className="mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Please read this section carefully.
          </p>
          <p>
            THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE&quot;. POINTR EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
            WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR
            ERROR-FREE, OR THAT YOUR CODE WILL BE PRESERVED WITHOUT DATA LOSS.
          </p>
        </section>

        {/* 8. Limitation of Liability */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            8. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, POINTR SHALL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
            DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
            INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR
            INABILITY TO ACCESS OR USE THE SERVICE; (B) ANY CONDUCT OR CONTENT
            OF ANY THIRD PARTY ON THE SERVICE; OR (C) UNAUTHORIZED ACCESS, USE,
            OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
          </p>
        </section>

        {/* 9. Termination */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            9. Termination
          </h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your account at our
            sole discretion, without notice, for conduct that we believe
            violates these Terms or is harmful to other users, us, or third
            parties, or for any other reason.
          </p>
          <p>
            Upon termination, your right to use the Service will cease
            immediately, and we may delete your data as described in our{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* 10. Contact */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            10. Contact Information
          </h2>
          <p className="mb-4">
            For questions about these Terms, please contact us at:
          </p>
          <address className="not-italic">
            <strong>Pointr Legal Team</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:legal@pointr.sayandas.co.in"
              className="text-blue-600 hover:underline"
            >
              legal@pointr.sayandas.co.in
            </a>
          </address>
        </section>
      </section>
    </div>
  );
}
