import { IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";
import { asset } from "@/lib/asset";

const SITE_URL = "https://flowlearn.app";
const TAGLINE = "Learn anything, one flow at a time.";

export const metadata: Metadata = {
  title: "FlowLearn",
  description: `FlowLearn — ${TAGLINE}`,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "FlowLearn",
    description: `FlowLearn — ${TAGLINE}`,
    url: SITE_URL,
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "FlowLearn",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowLearn",
    description: `FlowLearn — ${TAGLINE}`,
    images: ["/og-preview.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <head>
        <link rel="icon" href={asset("/favicon.png")} type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href={asset("/app_icon.png")} />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          {!IS_WAITLIST_ENABLED && (
            <>
              <Navbar
                icon={<AppIcon src={asset("/app_icon.png")} />}
                appName="FlowLearn"
                links={[
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Help", href: "/help" },
                ]}
                action={null}
              />

              {children}

              <CompactFooter
                appIcon={<AppIcon src={asset("/app_icon.png")} filter="grayscale" />}
                links={[
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                  { label: "Help", href: "/help" },
                ]}
                footnoteLeading={`© ${new Date().getFullYear()} FlowLearn. All rights reserved.`}
              />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
