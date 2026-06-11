import { Article } from "@/components/article/article";

export default function HelpPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Article>{children}</Article>;
}
