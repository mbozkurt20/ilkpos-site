import type { Metadata } from "next";
import {
  SiteFooter,
  SiteHeader,
  registerUrl,
  whatsappUrl,
} from "../site-chrome";

export const metadata: Metadata = {
  title: "İletişim — ilkPos",
  description: "ilkPos ekibiyle iletişime geçin ve işletmeniz için bilgi alın.",
};
export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-page">
        <div className="shell contact-grid">
          <div className="contact-copy">
            <div className="mini-title">
              <i /> İletişim
            </div>
            <h1>
              İşletmenizi
              <br />
              <span>birlikte sadeleştirelim.</span>
            </h1>
            <p>
              İşletmenizin yapısını, kullandığınız sipariş kanallarını ve
              ihtiyaç duyduğunuz modülleri konuşalım.
            </p>
            <div className="contact-actions">
              <a
                className="pill orange"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan yazın <span>↗</span>
              </a>
              <a className="pill white" href={registerUrl}>
                Ücretsiz başlayın
              </a>
            </div>
          </div>
          <div className="contact-panel">
            <span>DOĞRUDAN İLETİŞİM</span>
            <a href={whatsappUrl}>
              <small>Telefon / WhatsApp</small>
              <strong>0850 840 73 12</strong>
              <b>↗</b>
            </a>
            <a href="mailto:destek@posis.app">
              <small>E-posta</small>
              <strong>destek@posis.app</strong>
              <b>↗</b>
            </a>
            <div>
              <small>Size nasıl yardımcı olabiliriz?</small>
              <p>Ürün tanıtımı · Kurulum · Entegrasyonlar · Teknik destek</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-note">
        <div className="shell">
          <strong>Doğru çözüm, işletmenizi dinlemekle başlar.</strong>
          <p>
            Ekibimiz taleplerinizi değerlendirerek ürün ve entegrasyon kapsamını
            işletme yapınıza göre netleştirir.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
