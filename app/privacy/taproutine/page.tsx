import type { Metadata } from "next";
import { PrivacyPolicy } from "../policy";
import { studioApps } from "../../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "TapRoutine Privacy Policy", description: "Privacy and Accessibility Service information for TapRoutine." };

export default function TapRoutinePrivacy() {
  return <PrivacyPolicy app={studioApps[0]} summary="TapRoutine needs unusually powerful Android access to perform user-configured taps and swipes, so transparency is part of the product." permissions={["Accessibility Service to perform only the actions configured by the user.", "Notification access if the released app uses a persistent status notification while routines run.", "Storage or media access only if importing and exporting routines requires it."]} data={["Routine configurations are intended to stay on the device unless a future sync feature is explicitly introduced.", "The Accessibility Service is not intended to read passwords, bypass security controls, or start routines without user direction.", "Any diagnostics in the production app will be limited, disclosed, and separated from routine content where possible."]} />;
}
