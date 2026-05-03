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

const SITE_URL = "https://bloo.app";

export const metadata: Metadata = {
  title: "Bloo",
  description: "Bloo — coming soon.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Bloo",
    description: "Bloo — coming soon.",
    url: SITE_URL,
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "Bloo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloo",
    description: "Bloo — coming soon.",
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
                appName="Bloo"
                links={[
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ]}
                action={null}
              />

              {children}

              <CompactFooter
                appIcon={<AppIcon src={asset("/app_icon.png")} filter="grayscale" />}
                links={[
                  { label: "Privacy", href: "/privacy" },
                  { label: "Terms", href: "/terms" },
                ]}
                footnoteLeading={`© ${new Date().getFullYear()} Bloo. All rights reserved.`}
              />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
