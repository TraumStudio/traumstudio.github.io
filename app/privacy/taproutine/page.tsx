import type { Metadata } from "next";
import { TapRoutinePolicy } from "../taproutine-policy";

export const dynamic = "force-static";

export const metadata: Metadata = { title: "TapRoutine Privacy Policy", description: "Privacy and Accessibility Service information for TapRoutine." };

export default function TapRoutinePrivacy() {
  return <TapRoutinePolicy />;
}
