import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Bayilik ve Çözüm Ortaklığı — ilkPos",
  description:
    "ilkPos bayilik programına katılın, bölgenizde işletmelere modern POS çözümleri sunun.",
};

export default function DealershipPage() {
  return (
    <main className="partner-page">
      <SiteHeader />
      <section className="partner-hero">
        <div className="shell partner-hero-grid">
          <div className="partner-copy">
            <div className="mini-title">
              <i /> ilkPos iş ortaklığı
            </div>
            <h1>
              Teknolojiyi işletmelerle buluşturan
              <span> güçlü ortağımız olun.</span>
            </h1>
            <p>
              Bölgenizde restoran ve perakende işletmelerine ilkPos çözümleri
              sunun; satış, kurulum ve sürdürülebilir gelir fırsatlarıyla
              birlikte büyüyün.
            </p>
            <div className="partner-actions">
              <Link className="pill orange" href="/iletisim">
                Bayilik başvurusu <span>↗</span>
              </Link>
              <Link href="/kampanyalar">Kampanyaları incele →</Link>
            </div>
          </div>
          <div className="partner-visual">
            <Image
              className="theme-panel-light"
              src="/assets/panel/tek-akis-light.png?v=20261010-1128"
              alt="ilkPos çözüm ortaklığı açık tema"
              fill
              priority
              unoptimized
              sizes="45vw"
            />
            <Image
              className="theme-panel-dark"
              src="/assets/panel/tek-akis-dark.png?v=20261010-1128"
              alt="ilkPos çözüm ortaklığı koyu tema"
              fill
              priority
              unoptimized
              sizes="45vw"
            />
            <div>
              <i /> Satış · Kurulum · Destek
            </div>
          </div>
        </div>
      </section>
      <section className="partner-benefits">
        <div className="shell">
          <div className="campaign-section-head">
            <div>
              <div className="mini-title dark">
                <i /> Neden ilkPos?
              </div>
              <h2>Güçlü ürün, sürdürülebilir iş modeli.</h2>
            </div>
            <p>
              Satış öncesinden kurulum sonrasına kadar ihtiyaç duyacağınız ürün,
              eğitim ve operasyon desteği yanınızda.
            </p>
          </div>
          <div className="partner-benefit-grid">
            {[
              [
                "01",
                "Tekrarlayan gelir",
                "Aktif müşteri portföyünüzü büyütürken uzun vadeli iş hacmi oluşturun.",
              ],
              [
                "02",
                "Satış desteği",
                "Tanıtım materyalleri ve ürün demolarıyla sahada daha güçlü ilerleyin.",
              ],
              [
                "03",
                "Teknik eğitim",
                "Ürün, kurulum ve temel destek süreçleri için düzenli eğitim alın.",
              ],
              [
                "04",
                "Geniş çözüm alanı",
                "POS, stok, paket servis, entegrasyon ve raporlamayı birlikte sunun.",
              ],
            ].map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="partner-cta">
        <div className="shell">
          <div>
            <span>İlk adımı birlikte atalım.</span>
            <h2>Bölgenizde ilkPos çözüm ortağı olun.</h2>
          </div>
          <Link className="pill white" href="/iletisim">
            Başvuru yap <b>↗</b>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
