import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { FaqContent } from "./faq-content";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular — ilkPos",
  description:
    "ilkPos kullanım alanları, entegrasyonları, fiyatları ve demo süreci hakkında sık sorulan sorular.",
};

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <FaqContent />
      <SiteFooter />
    </main>
  );
}
