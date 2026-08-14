import type { Metadata } from "next";
import { PrivacyPolicy } from "../policy";
import { studioApps } from "../../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Hide & Seek Privacy Policy", description: "Privacy information for the Hide & Seek mobile game." };

export default function HideAndSeekPrivacy() {
  return <PrivacyPolicy app={studioApps[2]} summary="Hide & Seek is designed as a lightweight mobile game. Its final policy will clearly distinguish gameplay data from any optional analytics or advertising." permissions={["Network access if the final game uses advertising, purchases, updates, or cloud features.", "Notification permission only if optional reminders or events are included.", "No sensitive device permission is expected for core offline gameplay."]} data={["Progress and settings are intended to stay on the device unless cloud saves are added.", "If analytics or crash reporting are used, the final policy will identify the provider and collected events.", "If advertising is included, the production policy and consent flow will describe ad personalization choices."]} />;
}
