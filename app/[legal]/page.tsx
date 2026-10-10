import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader, whatsappUrl } from "../site-chrome";

const pages = {
  "kullanim-kosullari": [
    "Kullanım Koşulları",
    "Web sitesi ve yazılım hizmetlerinin kullanımına ilişkin temel kurallar.",
  ],
  "on-bilgilendirme-formu": [
    "Ön Bilgilendirme Formu",
    "Paket satın alımından önce hizmet, fiyat ve ödeme koşulları.",
  ],
  "mesafeli-satis-sozlesmesi": [
    "Mesafeli Satış Sözleşmesi",
    "Dijital hizmet paketlerinin uzaktan satın alınmasına ilişkin koşullar.",
  ],
  "iptal-iade-politikasi": [
    "İptal ve İade Politikası",
    "İptal, yenileme, cayma ve iade taleplerine ilişkin açıklamalar.",
  ],
  "gizlilik-politikasi": [
    "Gizlilik Politikası",
    "Bilgilerin hangi amaçlarla işlendiği ve korunduğuna ilişkin açıklamalar.",
  ],
  kvkk: [
    "KVKK Aydınlatma Metni",
    "6698 sayılı Kanun kapsamındaki aydınlatma metni.",
  ],
  "cerez-politikasi": [
    "Çerez Politikası",
    "Kullanılan zorunlu ve tercih bazlı depolama mekanizmaları.",
  ],
} as const;

type LegalSlug = keyof typeof pages;
export const revalidate = 86400;
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((legal) => ({ legal }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}): Promise<Metadata> {
  const { legal } = await params;
  const page = pages[legal as LegalSlug];
  return page ? { title: `${page[0]} — ilkPos`, description: page[1] } : {};
}

async function getLegalContent(slug: LegalSlug) {
  try {
    const response = await fetch(`https://posis.app/${slug}`, {
      next: { revalidate: 86400 },
    });
    if (!response.ok) return null;
    const source = await response.text();
    const match = source.match(
      /<div class="narrow prose">([\s\S]*?)<\/div><\/section>/,
    );
    if (!match) return null;
    return match[1]
      .replaceAll("POSIS", "ilkPos")
      .replace(
        /<a class="text-link" href="\/cdn-cgi[^>]*>[\s\S]*?<\/a>/g,
        '<a class="text-link" href="mailto:destek@posis.app">destek@posis.app</a>',
      );
  } catch {
    return null;
  }
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const { legal } = await params;
  if (!(legal in pages)) notFound();
  const slug = legal as LegalSlug;
  const [title, description] = pages[slug];
  const content = await getLegalContent(slug);
  return (
    <main>
      <SiteHeader />
      <section className="legal-hero">
        <div className="shell">
          <div className="mini-title">
            <i /> Yasal bilgilendirme
          </div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <section className="legal-section">
        <div className="shell legal-layout">
          <article className="legal-prose">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p>
                Metin şu anda yüklenemiyor. Güncel bilgi için destek ekibimizle
                iletişime geçebilirsiniz.
              </p>
            )}
          </article>
          <aside className="legal-aside">
            <span>DESTEĞE Mİ İHTİYACINIZ VAR?</span>
            <h2>Ekibimize ulaşın.</h2>
            <p>
              Metinler veya hizmet kapsamı hakkındaki sorularınızı yanıtlayalım.
            </p>
            <a
              className="pill orange"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan yazın <b>↗</b>
            </a>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
