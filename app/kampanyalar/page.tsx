import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { registerUrl, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Kampanyalar ve Özel Teklifler — ilkPos",
  description:
    "ilkPos yeni üyelik, kurulum ve çoklu şube kampanyalarını keşfedin.",
};

const campaigns = [
  {
    tag: "Açılışa özel",
    value: "%20",
    title: "İlk satın alımda indirim",
    copy: "ilkPos’a ilk kez katılan işletmelere, seçili yıllık POS paketlerinin ilk satın alımında %20 indirim fırsatı.",
    featured: true,
  },
  {
    tag: "Kolay geçiş",
    value: "0₺",
    title: "Kurulum ve başlangıç desteği",
    copy: "İşletmenizin ihtiyaç analizi, başlangıç kurulumu ve ekibinizin ilk kullanım desteği ilkPos’tan.",
    featured: false,
  },
  {
    tag: "Çoklu şube",
    value: "+2",
    title: "Şubelere özel teklif",
    copy: "İki veya daha fazla şubesi bulunan işletmelere merkezi yönetim ihtiyaçlarına göre özel fiyatlandırma.",
    featured: false,
  },
];

export default function CampaignsPage() {
  return (
    <main className="campaign-page">
      <SiteHeader />
      <section className="campaign-hero">
        <div className="shell campaign-hero-grid">
          <div className="campaign-copy">
            <div className="mini-title">
              <i /> ilkPos fırsatları
            </div>
            <span className="campaign-kicker">İlk açılışa özel</span>
            <h1>
              İşletmenize güçlü bir başlangıç.
              <em>%20 indirimle.</em>
            </h1>
            <p>
              İlk kez ilkPos kullanacak işletmelere özel avantajlarla
              operasyonunuzu tek panele taşıyın.
            </p>
            <div className="campaign-actions">
              <a className="pill orange" href={registerUrl}>
                15 gün ücretsiz dene <span>↗</span>
              </a>
              <Link href="/iletisim">Kampanya için aranmak istiyorum →</Link>
            </div>
          </div>
          <div className="campaign-visual">
            <Image
              className="theme-panel-light"
              src="/assets/panel/light-home.png?v=20261010-1124"
              alt="ilkPos kampanya paneli açık tema"
              fill
              priority
              unoptimized
              sizes="45vw"
            />
            <Image
              className="theme-panel-dark"
              src="/assets/panel/dark-home.png?v=20261010-1124"
              alt="ilkPos kampanya paneli koyu tema"
              fill
              priority
              unoptimized
              sizes="45vw"
            />
            <div className="campaign-badge">
              <strong>%20</strong>
              <span>İlk satın alıma özel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="campaign-list-section">
        <div className="shell">
          <div className="campaign-section-head">
            <div>
              <div className="mini-title dark">
                <i /> Güncel kampanyalar
              </div>
              <h2>İşletmenize uygun avantajı seçin.</h2>
            </div>
            <p>
              Yeni üyelikten çoklu şube geçişine kadar ilkPos’a başlamanızı
              kolaylaştıran teklifleri inceleyin.
            </p>
          </div>
          <div className="campaign-grid">
            {campaigns.map((campaign) => (
              <article
                className={campaign.featured ? "featured" : ""}
                key={campaign.title}
              >
                <div>
                  <span>{campaign.tag}</span>
                  <strong>{campaign.value}</strong>
                </div>
                <h3>{campaign.title}</h3>
                <p>{campaign.copy}</p>
                <Link href="/iletisim">
                  Detaylı bilgi <b>→</b>
                </Link>
              </article>
            ))}
          </div>
          <p className="campaign-note">
            Kampanyalar yeni üyeliklerde, seçili paketlerde ve belirtilen
            koşullarda geçerlidir. Ayrıntılı kapsam başvuru sonrasında ilkPos
            ekibi tarafından paylaşılır.
          </p>
        </div>
      </section>

      <section className="campaign-process">
        <div className="shell">
          <div className="center-title">
            <div className="mini-title dark">
              <i /> Üç kolay adım
            </div>
            <h2>Başvurun. Görüşelim. Birlikte başlayalım.</h2>
          </div>
          <div className="campaign-process-grid">
            {[
              [
                "01",
                "Talebinizi bırakın",
                "İletişim bilgilerinizi ve ilgilendiğiniz teklifi paylaşın.",
              ],
              [
                "02",
                "Ekibimiz sizi arasın",
                "İşletmenizin yapısını ve ihtiyaçlarını birlikte değerlendirelim.",
              ],
              [
                "03",
                "ilkPos’a geçin",
                "Kurulumunuzu tamamlayıp avantajlı kullanıma başlayın.",
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
      <SiteFooter />
    </main>
  );
}
