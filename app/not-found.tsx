import "@/global.css";
import { THEME } from "@/constants";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DeepLinkLanding } from "@/components/deep_link_landing/deep_link_landing";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import { ThemeProvider } from "@/providers/theme_provider";
import { asset } from "@/lib/asset";

// The root layout lives inside the (main) route group, so this root-level
// not-found owns the global 404 — which static export writes to out/404.html.
// GitHub Pages serves that file for any unmatched path, so it must be a complete
// document. DeepLinkLanding then reads the real URL in the browser to resolve the
// app's deep links (/join/<code>, /profile-share/<handle>).
export default function NotFound() {
  const links = [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Help", href: "/help" },
  ];

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
          <Navbar
            icon={<AppIcon src={asset("/app_icon.png")} />}
            appName="FlowLearn"
            links={links}
            action={null}
          />

          <DeepLinkLanding />

          <CompactFooter
            appIcon={<AppIcon src={asset("/app_icon.png")} filter="grayscale" />}
            links={links}
            footnoteLeading={`© ${new Date().getFullYear()} FlowLearn. All rights reserved.`}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
