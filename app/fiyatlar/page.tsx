import type { Metadata } from "next";
import { SiteFooter, SiteHeader, whatsappUrl } from "../site-chrome";
import { PricingCalculator } from "./pricing-calculator";

export const metadata: Metadata = {
  title: "Fiyatlar ve Paket Simülatörü — ilkPos",
  description:
    "ilkPos kullanım süresini, modülleri ve entegrasyonları seçin; paket fiyatınızı anında hesaplayın.",
};

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <section className="pricing-hero pricing-hero-v2">
        <span className="pricing-orbit pricing-orbit-one" />
        <span className="pricing-orbit pricing-orbit-two" />
        <div className="shell pricing-hero-grid">
          <div className="pricing-hero-copy">
            <div className="mini-title">
              <i /> Esnek paket · Şeffaf fiyat
            </div>
            <h1>
              Ne eksik, ne fazla.
              <span>Tam ihtiyacınız kadar.</span>
            </h1>
            <p>
              İşletmenizin çalışma şekline uygun süreyi, modülleri ve
              entegrasyonları seçin. ilkPos paketinizin net fiyatını saniyeler
              içinde görün.
            </p>
            <div className="pricing-hero-actions">
              <a className="pill orange" href="#paket-olustur">
                Paketini oluştur <span>↓</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Bir uzmana danış <span>↗</span>
              </a>
            </div>
            <div className="pricing-proof">
              <span>
                <b>15 gün</b> ücretsiz deneme
              </span>
              <span>
                <b>17+</b> standart özellik
              </span>
              <span>
                <b>11</b> isteğe bağlı seçenek
              </span>
            </div>
          </div>
          <div className="pricing-hero-visual" aria-hidden="true">
            <div className="pricing-free-badge">
              <strong>15</strong>
              <span>GÜN ÜCRETSİZ</span>
            </div>
            <div className="pricing-window">
              <header>
                <span>PAKET ÖZETİ</span>
                <i>CANLI</i>
              </header>
              <div className="pricing-window-title">
                <span>Yıllık ilkPos</span>
                <b>En avantajlı</b>
              </div>
              <strong>5.999 ₺</strong>
              <small>360 günlük kullanım · KDV hariç</small>
              <div className="pricing-window-line" />
              <p>
                <i>✓</i> POS ve hızlı satış ekranı
              </p>
              <p>
                <i>✓</i> Masa, paket ve kurye yönetimi
              </p>
              <p>
                <i>✓</i> Stok, reçete ve raporlar
              </p>
              <div className="pricing-window-result">
                <span>Aylık kullanıma göre avantaj</span>
                <b>2.389 ₺</b>
              </div>
            </div>
            <span className="pricing-visual-caption">
              <i>✓</i> Seçtikçe anında hesaplanır
            </span>
          </div>
        </div>
      </section>
      <PricingCalculator />
      <SiteFooter />
    </main>
  );
}
