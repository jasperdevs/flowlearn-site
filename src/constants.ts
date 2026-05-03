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
] as const;

// Bloo palette — mirrors Bloo/Design/BlooTheme.swift
export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#1A1916",
    "text-secondary": "#6B6A65",
    "fill-0": "#FFFFFF",
    "fill-1": "#F7F6F2",
    "fill-2": "#EFEEE9",
    "fill-3": "#E6E5E0",
    "accent-brand": "#1E5BFF",
    "accent-orange": "#D6793F",
    "accent-green": "#83BF3E",
    "accent-red": "#FF3B30",
    "accent-blue": "#1E5BFF",
    "accent-indigo": "#5856D6",
    "accent-mint": "#6699A0",
    "accent-purple": "#B44AB4",
    "accent-pink": "#FF2D55",
  },
  DARK: {
    "text-primary": "#F2F2EE",
    "text-secondary": "#8E8E88",
    "fill-0": "#1C1C1C",
    "fill-1": "#0E0E0E",
    "fill-2": "#161616",
    "fill-3": "#252525",
    "accent-brand": "#1E5BFF",
    "accent-orange": "#FF9230",
    "accent-green": "#30D158",
    "accent-red": "#FF453A",
    "accent-blue": "#1E5BFF",
    "accent-indigo": "#5E5CE6",
    "accent-mint": "#63E6E2",
    "accent-purple": "#BF5AF2",
    "accent-pink": "#FF375F",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
