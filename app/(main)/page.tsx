import { CardGrid } from "@/components/card_grid/card_grid";
import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { asset } from "@/lib/asset";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Section paddingTop={96} paddingBottom={40}>
        <Hero
          title="FlowLearn"
          subtitle="Learn anything, one flow at a time. Bite-sized, AI-built lessons that adapt to how your memory actually works — wrapped in a calm, focused app for iPhone."
          media={
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={asset("/app_icon.png")}
                alt="FlowLearn app icon"
                width={300}
                height={300}
                priority
                style={{
                  width: "min(300px, 58vw)",
                  height: "auto",
                  borderRadius: "23%",
                }}
              />
            </div>
          }
          action={
            <p style={{ opacity: 0.7, fontSize: "0.95rem", margin: 0 }}>
              Coming soon to the App Store.
            </p>
          }
        />
      </Section>

      <Section title="Built for how you actually learn" paddingTop={24} paddingBottom={64}>
        <CardGrid rowHeight={232}>
          <CardGrid.IconCard
            maxWidth="third"
            iconName="auto_awesome"
            title="AI-built lessons"
            description="Describe any topic and FlowLearn writes a real, structured lesson in seconds — or pick from a growing library of courses."
          />
          <CardGrid.IconCard
            maxWidth="third"
            iconName="menu_book"
            title="Bite-sized & focused"
            description="Short lessons and quick checks you can finish in a few minutes. No clutter, no noise — just the next thing to learn."
          />
          <CardGrid.IconCard
            maxWidth="third"
            iconName="psychology"
            title="Remembers for you"
            description="Spaced recall predicts what's fading and brings it back at the right moment, so what you learn actually sticks."
          />
          <CardGrid.IconCard
            maxWidth="third"
            iconName="local_fire_department"
            title="Daily streaks"
            description="Build a learning habit with streaks, daily goals, and gentle reminders that keep you coming back."
          />
          <CardGrid.IconCard
            maxWidth="third"
            iconName="emoji_events"
            title="XP & leagues"
            description="Earn XP, level up, and climb the leaderboard with friends — progress you can see and feel."
          />
          <CardGrid.IconCard
            maxWidth="third"
            iconName="hub"
            title="Your knowledge map"
            description="Watch everything you learn connect into a living mind map of your own growing knowledge."
          />
        </CardGrid>
      </Section>

      <Section title="See it in action" paddingTop={24} paddingBottom={88}>
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {[
            { src: "create", alt: "FlowLearn — describe any topic and get a lesson" },
            { src: "mind-map", alt: "FlowLearn — your knowledge mind map" },
            { src: "profile", alt: "FlowLearn — streaks, XP and stats" },
          ].map((shot) => (
            <Image
              key={shot.src}
              src={asset(`/screens/${shot.src}.png`)}
              alt={shot.alt}
              width={1206}
              height={2622}
              style={{
                width: "min(248px, 64vw)",
                height: "auto",
                borderRadius: 30,
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 12px 44px rgba(0,0,0,0.16)",
              }}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
