import type { Metadata } from "next";
import { TapRoutinePolicy } from "../taproutine-policy";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "TapRoutine Pro Privacy Policy",
  description: "Privacy policy for TapRoutine Pro: Auto Clicker, the separate paid edition from Traum Studio.",
};

export default function TapRoutineProPrivacy() { return <TapRoutinePolicy paid />; }
