"use client";

import { APP_ID } from "@/constants";
import { AppIcon } from "@/components/app_icon/app_icon";
import { Section } from "@/components/section/section";
import { asset } from "@/lib/asset";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./deep_link_landing.module.css";

const APP_STORE_URL = `https://apps.apple.com/app/id${APP_ID}`;

type Landing =
  | { kind: "invite"; code: string }
  | { kind: "profile"; handle: string }
  | { kind: "notFound" };

function classify(pathname: string): Landing {
  // Normalize: strip leading/trailing slashes, decode segments.
  const segments = pathname
    .split("/")
    .map((s) => decodeURIComponent(s.trim()))
    .filter(Boolean);

  if (segments[0] === "join" && segments[1]) {
    return { kind: "invite", code: segments[1] };
  }
  if (segments[0] === "profile-share" && segments[1]) {
    return { kind: "profile", handle: segments[1].replace(/^@/, "") };
  }
  return { kind: "notFound" };
}

export function DeepLinkLanding() {
  // During static export the path is unknown, so we resolve it in the browser.
  const routerPath = usePathname();
  const [resolved, setResolved] = useState<string | null>(null);

  useEffect(() => {
    setResolved(window.location.pathname);
  }, []);

  const pathname = resolved ?? routerPath ?? "";
  const landing = classify(pathname);

  if (landing.kind === "notFound") {
    return (
      <Section paddingTop={120} paddingBottom={160}>
        <div className={styles.landing}>
          <div className={styles.icon}>
            <AppIcon src={asset("/app_icon.png")} />
          </div>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.subtitle}>
            That link didn’t lead anywhere. Head back to the FlowLearn home page.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={asset("/")}>
              Go home
            </a>
          </div>
        </div>
      </Section>
    );
  }

  const heading =
    landing.kind === "invite"
      ? "You’re invited to FlowLearn"
      : `@${landing.handle} is on FlowLearn`;

  const blurb =
    landing.kind === "invite"
      ? "A friend wants you to learn with them. Download FlowLearn, enter the code below, and you’ll both get a head start."
      : "Follow them, learn together, and climb the leaderboard. Download FlowLearn to add them as a friend.";

  const chipLabel = landing.kind === "invite" ? "Invite code" : "Profile";
  const chipValue = landing.kind === "invite" ? landing.code : `@${landing.handle}`;

  return (
    <Section paddingTop={104} paddingBottom={140}>
      <div className={styles.landing}>
        <div className={styles.icon}>
          <AppIcon src={asset("/app_icon.png")} />
        </div>

        <h1 className={styles.title}>{heading}</h1>
        <p className={styles.subtitle}>{blurb}</p>

        <div className={styles.chip}>
          <span className={styles.chipLabel}>{chipLabel}</span>
          <span className={styles.chipValue}>{chipValue}</span>
        </div>

        <div className={styles.actions}>
          <a className={styles.primary} href={APP_STORE_URL} target="_blank" rel="noreferrer">
            Get FlowLearn
          </a>
          <a className={styles.secondary} href={asset("/")}>
            Learn more
          </a>
        </div>

        <p className={styles.fineprint}>
          Already have the app? Open the link on your iPhone to jump straight in.
        </p>
      </div>
    </Section>
  );
}
