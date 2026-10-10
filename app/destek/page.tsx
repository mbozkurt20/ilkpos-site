import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader, whatsappUrl } from "../site-chrome";
export const metadata: Metadata = {
  title: "Destek — ilkPos",
  description: "ilkPos ürün, kurulum, entegrasyon ve teknik destek kanalları.",
};
export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="support-hero">
        <div className="shell">
          <div className="mini-title">
            <i /> Destek merkezi
          </div>
          <h1>
            Yanınızdayız.
            <br />
            <span>Nasıl yardımcı olabiliriz?</span>
          </h1>
          <p>
            Ürün kullanımı, kurulum, entegrasyonlar ve teknik konular için doğru
            destek kanalına hızlıca ulaşın.
          </p>
        </div>
      </section>
      <section className="section support-grid">
        <div className="shell">
          <article>
            <span>01</span>
            <h2>Ürün ve kurulum</h2>
            <p>
              İşletmenize uygun modüller, başlangıç adımları ve kurulum kapsamı
              hakkında bilgi alın.
            </p>
            <a href={whatsappUrl}>WhatsApp’tan yazın ↗</a>
          </article>
          <article>
            <span>02</span>
            <h2>Teknik destek</h2>
            <p>
              Kullanım sırasında yaşadığınız teknik konuları destek ekibimize
              iletin.
            </p>
            <a href="mailto:destek@posis.app">destek@posis.app ↗</a>
          </article>
          <article>
            <span>03</span>
            <h2>Entegrasyonlar</h2>
            <p>
              Sipariş kanalları, yazarkasa ve SMS bağlantılarının güncel
              kapsamını öğrenin.
            </p>
            <Link href="/entegrasyonlar">Entegrasyonları inceleyin ↗</Link>
          </article>
        </div>
      </section>
      <section className="support-bottom">
        <div className="shell">
          <b>Hızlı iletişim</b>
          <span>0850 840 73 12</span>
          <a className="pill orange" href={whatsappUrl}>
            Destek ekibine ulaşın <i>↗</i>
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
