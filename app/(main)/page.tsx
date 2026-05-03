import { Hero } from "@/components/hero/hero";
import { Section } from "@/components/section/section";
import { asset } from "@/lib/asset";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Section paddingTop={100} paddingBottom={160}>
        <Hero
          title="Bloo"
          subtitle="An iOS app that's still in the oven. Site coming soon."
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
                alt="Bloo"
                width={320}
                height={320}
                priority
                style={{
                  width: "min(320px, 60vw)",
                  height: "auto",
                }}
              />
            </div>
          }
        />
      </Section>
    </>
  );
}
