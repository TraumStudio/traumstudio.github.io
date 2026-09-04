import type { ReactNode } from "react";
import { supportEmail } from "../lib/site-data";

type PolicySection = { id: string; title: string; content: ReactNode };
const googlePrivacy = "https://policies.google.com/privacy";
const githubPrivacy = "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement";

export function TapRoutinePolicy({ paid = false }: { paid?: boolean }) {
  const name = paid ? "TapRoutine Pro: Auto Clicker" : "TapRoutine: Auto Clicker";
  const shortName = paid ? "TapRoutine Pro" : "TapRoutine";
  const packageName = paid ? "com.traum.taproutine.paid" : "com.traum.taproutine";
  const sections: PolicySection[] = [
    { id: "scope", title: "Who we are and what this policy covers", content: <>
      <p>Traum Studio is the developer and data controller for the information it processes as described here. Contact us at <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
      <p>This policy applies to {name} (“{shortName}”), Android package <code>{packageName}</code>, and this associated privacy-policy page. The app creates and runs user-configured tap, hold, swipe, multi-touch, recording, and loop routines.</p>
      <p>{paid ? <>This policy covers the separately purchased Pro app. It does not cover the <a href="/privacy/taproutine">free edition or its in-app Premium upgrade</a>.</> : <>This policy covers the free app, including its optional in-app Premium upgrade. It does not cover the separate <a href="/privacy/taproutine-pro">TapRoutine Pro paid app</a>. TapRoutine was previously called “Auto Tap” during development.</>}</p>
    </> },
    { id: "local-data", title: "Information stored on your device", content: <>
      <p>{shortName} stores the following in private Android application storage:</p>
      <ul>
        <li>Scripts, script names, action order, and tap, hold, swipe, multi-touch, and recorded-gesture positions and timing.</li>
        <li>Orientation layouts, loop rules, run/skip schedules, and user-selected randomization settings.</li>
        <li>Preferences, floating-panel positions and appearance, display settings, and language.</li>
        {!paid && <li>Credits, temporary-feature expiry times, daily-reward state, advertisement-frequency counters, and timestamps used to manage these features.</li>}
        {!paid && <li>A cached Premium entitlement and the time of the last Google Play ownership check.</li>}
        {!paid && <li>If you enable optional local analytics, allow-listed event totals and their most recent timestamps.</li>}
      </ul>
      <p>{shortName} does not upload scripts, gesture coordinates, recorded gestures, or screen content to the developer. It has no cloud account, developer-operated synchronization service, or script-export feature.</p>
    </> },
    { id: "accessibility", title: "Accessibility Service and your control", content: <>
      <p>{shortName} uses Android’s Accessibility Service API to display floating controls and perform the taps, holds, swipes, and simultaneous gestures in scripts that you create and start.</p>
      <p>The service follows your configured actions, positions, timing, loops, schedules, and optional randomization rules. It does not independently choose tasks or make decisions about what content to interact with. You can stop playback using the floating controls.</p>
      <p>Window-content retrieval is disabled. The service does not read passwords, typed text, messages, or other apps’ screen content. It is configured to receive window-state events, but its event handler does not process their content or use them to identify the app underneath the controls.</p>
      <p>Accessibility access is optional. A separate in-app disclosure is shown before Android Accessibility settings. You must choose to continue and enable the service yourself, and can disable it at any time in Android settings. Without it, the app cannot perform gestures.</p>
      <p>Review scripts and use automation only where you have permission. Do not use it to click advertisements, bypass security, or perform actions without authorization.</p>
    </> },
    { id: "advertising", title: paid ? "No advertising or in-app upgrades" : "Advertising and Google Mobile Ads", content: paid ? <>
      <p>TapRoutine Pro contains no advertising, rewarded advertisements, credits, daily rewards, temporary feature unlocks, or in-app Premium upgrade.</p>
      <p>The app does not include Google Mobile Ads, the User Messaging Platform consent SDK, the Google Play Billing Library, or an analytics SDK.</p>
    </> : <>
      <p>The free version may display banner, interstitial, and voluntary rewarded advertisements through Google AdMob and the Google Mobile Ads SDK. When Premium is active, TapRoutine does not request advertisements. This does not delete information previously processed by Google.</p>
      <p>Google’s SDK automatically collects and shares information for advertising, analytics, and fraud prevention, subject to its configuration, consent choices, and device controls. This can include:</p>
      <ul><li>IP address, which can be used to estimate approximate location.</li><li>App and advertisement interactions, such as launches, taps, and video views.</li><li>Diagnostic and performance information, such as launch time, hangs, and energy usage.</li><li>Device or account identifiers, including advertising ID, app set ID, and other applicable identifiers.</li></ul>
      <p>Google describes TLS encryption in transit and its data handling in its <a href="https://developers.google.com/admob/android/privacy/play-data-disclosure">Mobile Ads SDK disclosure</a> and <a href={googlePrivacy}>Privacy Policy</a>.</p>
      <p>Before showing a full-screen advertisement, TapRoutine stops playback and recording and removes the floating controls. Playback does not automatically resume when the ad closes. Rewarded credits are granted only after the advertising SDK reports that the reward was earned.</p>
    </> },
    ...(!paid ? [{ id: "consent", title: "Advertising consent and privacy choices", content: <>
      <p>TapRoutine uses Google’s User Messaging Platform (UMP) to request current consent information at launch, display consent or privacy messages when required, and determine whether advertisements may be requested.</p>
      <p>When UMP requires a privacy-options entry point, Settings provides privacy choices so you can review or change available choices. You can also reset or delete the advertising ID in Android’s privacy settings. Google processes these consent signals; Traum Studio does not maintain a remote consent database.</p>
    </> }] : []),
    { id: "purchases", title: paid ? "Purchasing TapRoutine Pro" : "Google Play Billing and Premium", content: paid ? <>
      <p>The separate Pro app is purchased through its Google Play listing before installation. Google Play handles payment and its transaction records under Google’s policies.</p>
      <p>The installed Pro app does not include the Google Play Billing Library and does not receive, process, or store payment-card details, bank-account details, purchase tokens, or purchase-history data.</p>
    </> : <>
      <p>Premium is a one-time in-app product purchased through Google Play Billing. Google handles your transaction and payment method. TapRoutine does not receive or store your full payment-card or bank-account details.</p>
      <p>The app receives purchase information such as product identifier, purchase state, token, signature, and acknowledgement state to verify, acknowledge, grant, restore, or revoke Premium. It does not send this information to a developer-operated server. It stores a local entitlement cache and the last-check time.</p>
      <p>Google Play retains transaction records under its own policies and applicable law. Uninstalling the app does not erase Google Play’s purchase records.</p>
    </> },
    { id: "analytics", title: "Analytics", content: paid ? <p>TapRoutine Pro has no local product-analytics feature or remote analytics SDK and does not send analytics to Traum Studio.</p> : <>
      <p>TapRoutine has no Firebase Analytics or developer-operated remote analytics service.</p>
      <p>“Anonymous local product analytics” is optional and off by default. When enabled, it stores only allow-listed event names as aggregate counts and last-event times on your device. Events include claiming credits, completing scripts, earning rewards, purchasing or restoring Premium, and temporarily unlocking features.</p>
      <p>These counters do not include script contents, gesture positions, screen content, target-app names, or contact information, and are not transmitted to the developer. Turning the switch off stops new event recording; clearing the app’s storage removes existing counters. Google Mobile Ads has separate advertising measurement, as described above.</p>
    </> },
    { id: "sharing", title: "Network access and sharing", content: <>
      <p>{paid ? "TapRoutine Pro does not request Android’s Internet or network-state permissions." : "TapRoutine uses Internet and network-state access for the Google services described in this policy."} Neither edition operates a developer-hosted script-storage service.</p>
      <p>Traum Studio does not sell personal information. Scripts and gesture data are not sent to the developer, advertisers, or analytics providers by the app.</p>
      {!paid && <p>Advertising, consent, and purchase information is processed by Google when those services are used. Google’s purposes, retention, and privacy controls are described in its linked policies.</p>}
      <p>If you use Feedback or Share, Android opens a chooser for an external app. The prepared message includes the app name/version or its public store link, not scripts or gesture coordinates. Additional information you choose to send is processed by the recipient and the service you select.</p>
      <p>Opening this policy or a store link uses your external browser or Google Play. Those services have their own data practices. Information held by Traum Studio may be disclosed when required by applicable law; local-only scripts are not held by us.</p>
    </> },
    { id: "retention", title: "Retention, deletion, and Android backup", content: <>
      <p>Local scripts and settings{!paid && ", credits, analytics counters, and cached entitlement information"} remain on your device until removed. Delete individual scripts in the app, or clear all app storage or uninstall through Android settings. Deleting a script does not delete unrelated settings{!paid && " or analytics counters"}.</p>
      <p>The app sets Android’s backup permission to disabled to opt out of cloud backup. On some Android 12 and later devices, manufacturers may still allow direct device-to-device transfers. Copies transferred by your device must be managed on that device; Traum Studio does not receive them.</p>
      <p>Traum Studio cannot remotely inspect or delete private app data that exists only on your device. The app has no account to close.</p>
      {!paid && <p>Advertising, consent, and purchase data held by Google is subject to Google’s retention rules and controls. Transaction records may be retained for refunds, tax, fraud prevention, and legal requirements after you uninstall TapRoutine.</p>}
    </> },
    { id: "support", title: "Support messages and this website", content: <>
      <p>If you email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>, we receive your email address and the name, message, and attachments you choose to send. We use this information to respond to your request, resolve follow-up questions, and handle legal obligations—not for advertising. Please do not send passwords, full payment details, or sensitive scripts.</p>
      <p>Correspondence is handled through Gmail and retained only as long as needed for those purposes or applicable legal obligations. You can request deletion at the same address. Google processes email under its privacy terms.</p>
      <p>This page is hosted on GitHub Pages. GitHub may process technical request information such as IP address, browser/device information, and request times to operate and secure its service. See <a href={githubPrivacy}>GitHub’s Privacy Statement</a>. Traum Studio has not added website advertising, analytics trackers, or marketing cookies.</p>
    </> },
    { id: "rights", title: "Legal bases and your privacy rights", content: <>
      <p>Where EEA or UK data-protection law applies, our bases for processing are providing requested app features{!paid && " and Premium entitlements"} under a contract, consent where required for optional processing, legitimate interests in responding to support requests and maintaining a secure service, and compliance with applicable legal obligations. We balance legitimate interests against your rights.</p>
      <p>Depending on applicable law, you may request access, correction, deletion, restriction, or portability of personal data we hold, object to processing based on legitimate interests, and withdraw consent without affecting earlier lawful processing. You may complain to your local data-protection authority. Contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a> to make a request. We may need proportionate information to verify it.</p>
      <p>Google and GitHub may process information outside your country, including the United States. Their linked policies describe international transfers and applicable safeguards. Contact them for data they independently control; contact us for information we hold.</p>
    </> },
    { id: "children", title: "Children", content: <>
      <p>{shortName} is a general utility intended for people aged 13 and older and is not designed for or directed to children under 13.</p>
      <p>We do not knowingly request a child’s name, email address, or other direct contact details. If you believe a child has sent personal information to us through support, contact us so we can review and delete it where appropriate.</p>
    </> },
    { id: "security", title: "Security", content: <>
      <p>{shortName} keeps scripts and settings in Android private application storage, disables Accessibility window-content retrieval, and does not run a developer-operated script server. Its backup configuration is described above.</p>
      {!paid && <p>Google documents encryption in transit for Mobile Ads data. TapRoutine uses purchase-signature and Google Play ownership checks for in-app Premium entitlements.</p>}
      <p>No storage or transmission method is completely secure. Keep your device protected, review routines before running them, install apps from trusted sources, and keep Android and Google Play services up to date.</p>
    </> },
    { id: "providers", title: "Third-party policies", content: <ul>
      <li><a href={googlePrivacy}>Google Privacy Policy</a></li>
      <li><a href="https://play.google.com/about/play-terms/">Google Play Terms of Service</a></li>
      {!paid && <li><a href="https://policies.google.com/technologies/partner-sites">How Google uses information from partner sites and apps</a></li>}
      <li><a href={githubPrivacy}>GitHub Privacy Statement</a></li>
    </ul> },
    { id: "changes", title: "Changes and contact", content: <>
      <p>We update this policy when features, SDKs, data practices, or legal requirements change. The “Last updated” date changes with published revisions. Material changes will be communicated through the app, store listing, or this page where appropriate.</p>
      <p>For privacy questions or requests: <strong>Traum Studio</strong>, <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
    </> },
  ];

  return <article className="policy-page shell">
    <header>
      <span className="eyebrow">{paid ? "Paid edition" : "Free edition & in-app Premium"}</span>
      <h1>{name}<br />Privacy Policy</h1>
      <p>{paid ? "No ads. No analytics SDK. Your scripts stay in private device storage." : "Your routines stay in private device storage. Advertising, consent, and purchases use the Google services explained below."}</p>
      <div className="policy-meta"><span>Effective {paid ? "11" : "10"} August 2026</span><span>Last updated 4 September 2026</span></div>
    </header>
    <div className="policy-layout">
      <aside aria-label="Policy contents"><strong>On this page</strong>{sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</aside>
      <div className="policy-copy">{sections.map((section, index) => <section id={section.id} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2>{section.content}</section>)}</div>
    </div>
  </article>;
}
