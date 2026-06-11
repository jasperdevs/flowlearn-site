import { Caveat, Dancing_Script } from "next/font/google";
import { ColorScheme } from "./types/shared";

/**
 * "system" - follows the user's system appearance
 * "light" - forces your website to always use light theme
 * "dark" - forces your website to always use dark theme
 */
export const THEME: "system" | "light" | "dark" = "system";

/**
 * Your App Store App ID without the 'id' prefix.
 * You can find it in your App Store Connect.
 * Go to your app -> App Information -> Apple ID.
 *
 * Example: "6502667826"
 */
export const APP_ID = "1234567890";

/**
 * Custom fonts for 'whimsical' and 'cursive' font styles.
 * Default system font is used for all other font styles.
 * See https://nextjs.org/docs/app/getting-started/fonts#google-fonts
 */
export const WHIMSICAL_FONT = Caveat({ subsets: ["latin"] });
export const CURSIVE_FONT = Dancing_Script({ subsets: ["latin"] });

export const MATERIAL_SYMBOLS = [
  "send",
  "check_circle",
  "star",
  "mail",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "lock",
  "target",
  "auto_awesome",
  "menu_book",
  "local_fire_department",
  "psychology",
  "emoji_events",
  "hub",
  "bolt",
  "ios_share",
] as const;

// FlowLearn palette — mirrors FlowLearn/Design/FlowLearnColor.swift.
// The app is a dark-first, mostly-monochrome surface system with one sanctioned
// brand hue (Opal-style green) used for affirmative accents. The site follows
// the same restraint: near-black/near-white grounds, green as the single accent.
const BRAND_GREEN = "#35D07F";
export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#0B0B0C",
    "text-secondary": "#6B6B70",
    "fill-0": "#FFFFFF",
    "fill-1": "#F6F6F7",
    "fill-2": "#EFEFF1",
    "fill-3": "#E5E5E8",
    "accent-brand": BRAND_GREEN,
    "accent-orange": "#FF8A3D",
    "accent-green": BRAND_GREEN,
    "accent-red": "#FF3B30",
    "accent-blue": BRAND_GREEN,
    "accent-indigo": "#5856D6",
    "accent-mint": BRAND_GREEN,
    "accent-purple": "#B44AB4",
    "accent-pink": "#FF2D55",
  },
  DARK: {
    "text-primary": "#FFFFFF",
    "text-secondary": "#9A9AA0",
    "fill-0": "#0E0E0F",
    "fill-1": "#000000",
    "fill-2": "#141416",
    "fill-3": "#1F1F22",
    "accent-brand": BRAND_GREEN,
    "accent-orange": "#FF9230",
    "accent-green": BRAND_GREEN,
    "accent-red": "#FF453A",
    "accent-blue": BRAND_GREEN,
    "accent-indigo": "#5E5CE6",
    "accent-mint": BRAND_GREEN,
    "accent-purple": "#BF5AF2",
    "accent-pink": "#FF375F",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
