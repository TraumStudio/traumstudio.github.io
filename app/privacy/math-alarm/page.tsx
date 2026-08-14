import type { Metadata } from "next";
import { PrivacyPolicy } from "../policy";
import { studioApps } from "../../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "Math Alarm Privacy Policy", description: "Privacy and permission information for Math Alarm." };

export default function MathAlarmPrivacy() {
  return <PrivacyPolicy app={studioApps[1]} summary="Math Alarm uses time, sound, and notification capabilities to deliver alarms reliably while keeping its data needs easy to understand." permissions={["Exact alarm permission where required by the Android version.", "Notification permission to display alarm and status information.", "Vibration and audio controls for the wake-up experience.", "Wake lock or full-screen intent when required for reliable alarm delivery."]} data={["Alarm schedules and difficulty preferences are intended to be stored on the device.", "The app does not need contact, message, or precise location access for its core function.", "Purchase records, if premium features are offered, are handled through Google Play."]} />;
}
