import { themeProfiles } from "../themeProfiles";
import {
  navbar,
  hero,
  howItWorks,
  programsOverview,
  whyChooseUs,
  testimonials,
  faq,
  finalCta,
  footer,
} from "./schoolContent";
import { schoolInfo } from "./schoolInfo";

export const siteConfig = {
  theme: themeProfiles.navy, // adjust to the team/theme profile you want to use
  defaultFormSource: "inquiry-form",
  schoolInfo,
  navbar,
  hero,
  howItWorks,
  programsOverview,
  whyChooseUs,
  finalCta,
  faq,
  testimonials,
  footer,
};
