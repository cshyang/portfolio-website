import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta App Privacy Policy | Shyang",
  description:
    "Privacy policy for Meta platform integrations and advertising/reporting tools operated by Shyang.",
  robots: {
    index: false,
    follow: true,
  },
};

const updatedDate = "21 June 2026";

export default function MetaAppPrivacyPolicyPage() {
  return (
    <main className="mx-auto mb-24 flex w-[min(100%,52rem)] flex-col px-6 text-left leading-8 text-gray-700 dark:text-white/80 sm:px-8">
      <section className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-lg shadow-black/[0.03] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
          Meta app privacy policy
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
          Privacy Policy for Meta Platform Integrations
        </h1>
        <p className="mb-8 text-sm text-gray-500 dark:text-white/50">
          Last updated: {updatedDate}
        </p>

        <div className="space-y-7">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              1. Scope
            </h2>
            <p>
              This privacy policy applies to Meta platform integrations,
              advertising tools, analytics workflows, and reporting automations
              operated by Shyang Chia for campaign management, diagnostics, and
              performance reporting. It explains what information may be
              accessed through Meta products, why it is used, and how deletion
              requests can be made.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              2. Information collected or accessed
            </h2>
            <p>
              Depending on the permissions granted to the Meta app, the app may
              access limited business and advertising information such as Meta ad
              account identifiers, Page or Instagram business account identifiers,
              campaign, ad set, ad, and creative metadata, advertising
              performance metrics, reporting dates, and related analytics data.
              If a user submits a message through this website, their email
              address and message content may also be processed for reply
              purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              3. How the information is used
            </h2>
            <p>
              The information is used only for legitimate operational purposes,
              including preparing advertising reports, monitoring campaign
              performance, diagnosing tracking or delivery issues, supporting ad
              account management, and improving internal marketing workflows.
              The information is not sold.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              4. Sharing and service providers
            </h2>
            <p>
              Information may be processed using trusted tools and service
              providers that support analytics, automation, hosting, email, and
              reporting workflows. Access is limited to what is reasonably needed
              to operate or support the requested service. Information is not
              shared with unrelated third parties for their own marketing use.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              5. Retention
            </h2>
            <p>
              Information is retained only for as long as needed for reporting,
              operational, legal, security, or legitimate business purposes.
              Aggregated or historical reporting outputs may be retained where
              they no longer identify an individual user.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              6. Data deletion requests
            </h2>
            <p>
              To request deletion of data associated with this Meta app or these
              integrations, email{" "}
              <a
                className="font-medium text-gray-950 underline underline-offset-4 dark:text-white"
                href="mailto:cshyang92@gmail.com?subject=Data%20Deletion%20Request"
              >
                cshyang92@gmail.com
              </a>{" "}
              with the subject line “Data Deletion Request”. Please include
              enough information to identify the relevant Meta account,
              business, Page, Instagram account, or report involved. Requests
              will be reviewed and actioned where required by applicable law and
              platform policy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-gray-950 dark:text-white">
              7. Contact
            </h2>
            <p>
              For privacy questions or requests related to this policy, contact{" "}
              <a
                className="font-medium text-gray-950 underline underline-offset-4 dark:text-white"
                href="mailto:cshyang92@gmail.com"
              >
                cshyang92@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
