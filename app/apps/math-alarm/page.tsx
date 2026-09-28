export { default, dynamic } from "../solvewake/page";
import { metadata as solvewakeMetadata } from "../solvewake/page";

// Preserve existing bookmarks while identifying the renamed product page.
export const metadata = {
  ...solvewakeMetadata,
  alternates: { canonical: "/apps/solvewake" },
};
