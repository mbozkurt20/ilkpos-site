"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteFooter, SiteHeader, whatsappUrl } from "./site-chrome";

const register = "https://pos.posis.app/register";
const whatsapp = whatsappUrl;
const integrations = [
  ["/assets/uber-tgo-logo.svg", "Uber Eats / Trendyol Go"],
  ["/assets/yemeksepeti-logo.svg", "Yemeksepeti"],
  ["/assets/migros-yemek-logo.svg", "Migros Yemek"],
  ["/assets/netgsm-logo.svg", "Netgsm"],
  ["/assets/ingenico-logo.svg", "Ingenico"],
  ["/assets/odeal.webp", "Ödeal"],
  ["/assets/inpos-logo.png", "inPOS"],
];
const features = [
  [
    "01",
    "POS & Satış",
    "Siparişten ödemeye hızlı, sade ve hatasız satış akışı.",
    "↗",
  ],
  [
    "02",
    "Masa Yönetimi",
    "Masaları, açık adisyonları ve servis durumunu tek görünümde izleyin.",
    "⌁",
  ],
  [
    "03",
    "Paket Servis",
    "Telefon ve online siparişleri doğru kurye ile buluşturun.",
    "→",
  ],
  [
    "04",
    "Stok & Reçete",
    "Satışa bağlı stok hareketlerini ve ürün reçetelerini takip edin.",
    "⌗",
  ],
  [
    "05",
    "Raporlama",
    "Satış, ürün, kurye ve şube performansını anlık görün.",
    "↗",
  ],
  [
    "06",
    "Çoklu Şube",
    "Tüm şubelerde ortak düzen, yetkiye göre merkezi kontrol.",
    "⌂",
  ],
];
const flow = [
  ["01", "Siparişi al", "Masa, gel-al, telefon veya online kanal."],
  ["02", "Mutfağa aktar", "Siparişi doğru hazırlık noktasına yönlendir."],
  ["03", "Ödemeyi tamamla", "Kasa ve ödeme adımlarını tek akışta yönet."],
  ["04", "Veriyi izle", "Stok ve raporları gerçek zamanlı güncelle."],
];
const homeModules = ["Kiosk", "Frequency", "Board"];

export default function Home() {
  const [faq, setFaq] = useState(0);
  const [activeModules, setActiveModules] = useState<string[]>(["Kiosk"]);
  const toggleHomeModule = (module: string) => {
    setActiveModules((current) =>
      current.includes(module)
        ? current.filter((item) => item !== module)
        : [...current, module],
    );
  };
  return (
    <main>
      <SiteHeader />

      <section className="hero home-hero" id="top">
        <span className="home-hero-ring" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="mini-title">
              <i /> Restoran yönetiminin yeni standardı
            </div>
            <h1>
              Tüm operasyon.
              <span>Tek akış.</span>
              Tam kontrol.
            </h1>
            <p>
              Masadan pakete, mutfaktan kuryeye, stoktan rapora kadar
              işletmenizin tüm akışını ilkPos ile tek merkezden yönetin.
            </p>
            <div className="hero-buttons">
              <a className="pill orange" href={register}>
                15 gün ücretsiz dene <span>↗</span>
              </a>
              <a className="watch" href="/urun">
                Ürünü incele <b>→</b>
              </a>
            </div>
            <div className="home-hero-meta">
              <span>
                <i>✓</i> Kredi kartı gerekmez
              </span>
              <span>
                <i>✓</i> Hızlı kurulum
              </span>
              <span>
                <i>✓</i> Türkçe destek
              </span>
            </div>
          </div>
          <div className="home-hero-showcase">
            <div className="home-dashboard-glow" />
            <div className="home-dashboard-frame">
              <div className="home-dashboard-bar">
                <span>
                  <i />
                  <i />
                  <i />
                </span>
                <b>İlkPos Yönetim Paneli</b>
                <em>Canlı</em>
              </div>
              <Image
                className="home-dashboard-light"
                src="/assets/panel/light-home.png?v=20261010-1124"
                alt="ilkPos açık tema yönetim paneli"
                fill
                priority
                unoptimized
                sizes="45vw"
              />
              <Image
                className="home-dashboard-dark"
                src="/assets/panel/dark-home.png?v=20261010-1124"
                alt="ilkPos koyu tema yönetim paneli"
                fill
                priority
                unoptimized
                sizes="45vw"
              />
            </div>
            <div className="home-dashboard-badge home-dashboard-badge-left">
              <i>●</i>
              <span>
                <small>Canlı yönetim</small>
                <b>Tüm şubeler tek ekranda</b>
              </span>
            </div>
            <div className="home-dashboard-badge home-dashboard-badge-right">
              <strong>7/24</strong>
              <span>
                <small>Bulut erişimi</small>
                <b>Her yerden kontrol</b>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="brands">
        <div className="shell brand-row">
          <div className="brand-copy">
            <span>Entegrasyonlar</span>
            <p>
              <strong>Güçlü bağlantılar,</strong> tek operasyon.
            </p>
          </div>
          <div className="brand-grid">
            {integrations.map(([src, name]) => (
              <span className="brand-slot" key={name} title={name}>
                <Image
                  className={name === "Ödeal" ? "brand-logo-solid-bg" : ""}
                  src={src}
                  alt={name}
                  width={165}
                  height={52}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" id="hakkinda">
        <div className="shell">
          <div className="intro-grid">
            <div>
              <div className="mini-title dark">
                <i /> ilkPos nedir?
              </div>
              <h2>
                İşletmenizin
                <br />
                <span>akıllı merkezi.</span>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                ilkPos, günlük operasyonunuzu yavaşlatan dağınık ekranları ve
                tekrar eden işleri tek bir sade akışta birleştirir.
              </p>
              <a href="/urun">
                Daha fazlasını keşfet <b>↗</b>
              </a>
            </div>
          </div>
          <div className="stats-grid">
            <div className="mobile-panel-card">
              <Image
                className="theme-panel-light"
                src="/assets/panel/mobile-panel-light.png?v=20261010-1"
                alt="ilkPos mobil yönetim paneli açık tema"
                fill
                unoptimized
                sizes="(max-width: 560px) 100vw, 24vw"
              />
              <Image
                className="theme-panel-dark"
                src="/assets/panel/mobile-panel-dark.png?v=20261010-1"
                alt="ilkPos mobil yönetim paneli koyu tema"
                fill
                unoptimized
                sizes="(max-width: 560px) 100vw, 24vw"
              />
            </div>
            <div className="stat-photo">
              <Image
                className="theme-panel-light"
                src="/assets/panel/light-home.png?v=20261010-1124"
                alt="ilkPos yönetim paneli açık tema"
                fill
                unoptimized
                sizes="40vw"
              />
              <Image
                className="theme-panel-dark"
                src="/assets/panel/dark-home.png?v=20261010-1124"
                alt="ilkPos yönetim paneli koyu tema"
                fill
                unoptimized
                sizes="40vw"
              />
            </div>
            <div className="small-stats">
              <article>
                <div className="stat-card-head">
                  <small>BULUT ERİŞİMİ</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 19h12a4 4 0 0 0 .7-7.9A7 7 0 0 0 5.2 9.5 4.8 4.8 0 0 0 6 19Z" />
                  </svg>
                </div>
                <strong>7/24</strong>
                <p>İşletmenize her yerden erişim</p>
              </article>
              <article className="module-selector-card">
                <div className="stat-card-head">
                  <small>MODÜLER ALTYAPI</small>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 3H3v5h5V3ZM21 3h-5v5h5V3ZM8 16H3v5h5v-5ZM21 16h-5v5h5v-5ZM8 5.5h8M5.5 8v8M18.5 8v8M8 18.5h8" />
                  </svg>
                </div>
                <div className="module-selector-list">
                  {homeModules.map((module) => {
                    const selected = activeModules.includes(module);
                    return (
                      <button
                        className={selected ? "selected" : ""}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleHomeModule(module)}
                        key={module}
                      >
                        <span>
                          <b>{module}</b>
                          <small>İhtiyaca özel</small>
                        </span>
                        <i aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
                <a className="home-module-link" href="/fiyatlar#paket-olustur">
                  Fiyatlarda yapılandırın <span>→</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section ecosystem" id="sistem">
        <div className="shell">
          <div className="center-title">
            <div className="mini-title dark">
              <i /> Akıllı işletme ekosistemi
            </div>
            <h2>
              Siparişten rapora.
              <br />
              <span>Tek ve kesintisiz akış.</span>
            </h2>
            <p>
              İşletmenizin her adımı birbiriyle konuşur. Siz sadece büyümeye
              odaklanırsınız.
            </p>
          </div>
          <div className="flow-product-visual">
            <Image
              className="flow-product-light"
              src="/assets/panel/tek-akis-light.png?v=20261010-1128"
              alt="ilkPos masa ve sipariş yönetimi açık tema ekranı"
              fill
              unoptimized
              sizes="(max-width: 700px) 100vw, 1190px"
            />
            <Image
              className="flow-product-dark"
              src="/assets/panel/tek-akis-dark.png?v=20261010-1128"
              alt="ilkPos masa ve sipariş yönetimi koyu tema ekranı"
              fill
              unoptimized
              sizes="(max-width: 700px) 100vw, 1190px"
            />
            <div className="flow-product-label">
              <i /> Canlı POS ekranı
            </div>
          </div>
          <div className="flow-steps">
            {flow.map(([n, title, copy], i) => (
              <article key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <b>{i < flow.length - 1 ? "→" : "✓"}</b>
              </article>
            ))}
          </div>
          <div className="ecosystem-cta">
            <a className="pill orange" href={register}>
              Sistemi keşfet <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="features-section" id="ozellikler">
        <div className="shell">
          <div className="intro-grid light-title">
            <div>
              <div className="mini-title">
                <i /> Neden ilkPos?
              </div>
              <h2>
                Daha hızlı servis.
                <br />
                <span>Daha net kontrol.</span>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                Yoğun saatlerde bile ekibinizin kolayca kullanacağı, işletme
                sahibinin her an görebileceği yalın bir yapı.
              </p>
            </div>
          </div>
          <div className="why-showcase">
            <div className="why-panel-stack">
              <figure className="why-visual">
                <Image
                  className="theme-panel-light"
                  src="/assets/panel/tek-akis-light.png?v=20261010-1128"
                  alt="ilkPos masa yönetimi açık tema"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
                <Image
                  className="theme-panel-dark"
                  src="/assets/panel/tek-akis-dark.png?v=20261010-1128"
                  alt="ilkPos masa yönetimi koyu tema"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
              </figure>
              <figure className="why-visual why-visual-dashboard">
                <Image
                  className="theme-panel-light"
                  src="/assets/panel/light-home.png?v=20261010-1124"
                  alt="ilkPos yönetim paneli açık tema"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 46vw"
                />
                <Image
                  className="theme-panel-dark"
                  src="/assets/panel/dark-home.png?v=20261010-1124"
                  alt="ilkPos yönetim paneli koyu tema"
                  fill
                  unoptimized
                  sizes="(max-width: 900px) 92vw, 46vw"
                />
              </figure>
            </div>
            <div className="why-benefit-grid">
              {features.map(([n, title, copy, icon]) => (
                <a className="why-card" href="/ozellikler" key={n}>
                  <div className="why-card-head">
                    <span>{n}</span>
                    <i>{icon}</i>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <b>
                    İncele <span>→</span>
                  </b>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="servis-akisi">
        <div className="shell">
          <div className="center-title">
            <div className="mini-title dark">
              <i /> Operasyonun her noktasında
            </div>
            <h2>
              Ekip için daha kolay.
              <br />
              <span>Yönetim için daha net.</span>
            </h2>
            <p>
              Günlük operasyonun farklı noktalarını aynı bilgi akışında
              birleştiren çalışma deneyimi.
            </p>
          </div>
          <div className="testimonial-grid">
            <article>
              <div className="stars">SERVİS AKIŞI</div>
              <p>
                Masa ve paket servis siparişlerini aynı ekranda görün; yoğun
                saatlerde ekibin tekrar eden adımlarını azaltın.
              </p>
              <div>
                <b>Salon ve mutfak</b>
                <span>Masa & servis operasyonu</span>
              </div>
            </article>
            <article className="testimonial-photo">
              <Image
                className="theme-panel-light"
                src="/assets/panel/tek-akis-light.png?v=20261010-2"
                alt="ilkPos servis akışı paneli açık tema"
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 84vw"
              />
              <Image
                className="theme-panel-dark"
                src="/assets/panel/tek-akis-dark.png?v=20261010-2"
                alt="ilkPos servis akışı paneli koyu tema"
                fill
                priority
                unoptimized
                sizes="(max-width: 900px) 100vw, 84vw"
              />
            </article>
            <article>
              <div className="stars">YÖNETİM GÖRÜNÜMÜ</div>
              <p>
                Şubeleri ve günün satışlarını uzaktan takip ederek karar için
                gereken veriye daha hızlı ulaşın.
              </p>
              <div>
                <b>Merkezi kontrol</b>
                <span>Çoklu şube yönetimi</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section integrations" id="entegrasyonlar">
        <div className="shell integration-layout">
          <div className="integration-copy">
            <div className="mini-title dark">
              <i /> Pazaryeri, GSM ve yazarkasa entegrasyonları
            </div>
            <h2>
              Tüm bağlantılarınız.
              <br />
              <span>Tek merkezde.</span>
            </h2>
            <p>
              Pazaryeri siparişlerinden SMS bildirimlerine, yazarkasadan ödeme
              altyapılarına kadar tüm entegrasyonları ilkPos ile tek akışta
              yönetin.
            </p>
            <a className="pill black" href="/entegrasyonlar">
              Entegrasyonları gör <span>↗</span>
            </a>
          </div>
          <div className="integration-wheel">
            <div className="wheel-ring r1" />
            <div className="wheel-ring r2" />
            <div className="wheel-center">
              <Image
                className="wheel-brand-logo"
                src="/assets/logo-light.png"
                alt="ilkPos"
                width={818}
                height={305}
              />
            </div>
            {integrations.map(([src, name], i) => (
              <div
                key={name}
                className={`wheel-item wi-${i + 1} ${name === "inPOS" ? "inpos" : ""} ${name === "Ödeal" ? "odeal" : ""}`}
              >
                <Image src={src} alt={name} width={140} height={46} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="app-section" id="cozumler">
        <div className="shell app-card">
          <div className="app-copy">
            <div className="mini-title">
              <i /> Her yerden yönetin
            </div>
            <h2>
              İşletmeniz
              <br />
              <span>cebinizde.</span>
            </h2>
            <p>
              Satışları, siparişleri ve şubeleri nerede olursanız olun anlık
              takip edin.
            </p>
            <div className="store-row">
              <a href={register}>
                <b>▶</b>
                <span>
                  <small>WEB&apos;DEN</small>Hemen Başla
                </span>
              </a>
              <a href={whatsapp}>
                <b>●</b>
                <span>
                  <small>DESTEK</small>Bilgi Al
                </span>
              </a>
            </div>
          </div>
          <div className="phones">
            <div className="phone phone-real back-phone">
              <div className="phone-notch" />
              <Image
                className="theme-panel-light"
                src="/assets/panel/mobile-panel-light.png?v=20261010-2"
                alt="ilkPos mobil panel açık tema"
                fill
                unoptimized
                sizes="210px"
              />
              <Image
                className="theme-panel-dark"
                src="/assets/panel/mobile-panel-dark.png?v=20261010-2"
                alt="ilkPos mobil panel koyu tema"
                fill
                unoptimized
                sizes="210px"
              />
            </div>
            <div className="phone phone-real front-phone">
              <div className="phone-notch" />
              <Image
                className="theme-panel-light"
                src="/assets/panel/mobile-panel-light.png?v=20261010-2"
                alt="ilkPos mobil yönetim ekranı açık tema"
                fill
                unoptimized
                sizes="210px"
              />
              <Image
                className="theme-panel-dark"
                src="/assets/panel/mobile-panel-dark.png?v=20261010-2"
                alt="ilkPos mobil yönetim ekranı koyu tema"
                fill
                unoptimized
                sizes="210px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="shell faq-layout">
          <div>
            <div className="mini-title dark">
              <i /> Merak edilenler
            </div>
            <h2>
              Kısa sorular.
              <br />
              <span>Net cevaplar.</span>
            </h2>
            <p>Başka bir sorunuz varsa ekibimize ulaşın.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              WhatsApp’tan sorun ↗
            </a>
            <a className="faq-all-link" href="/sss">
              Tüm soruları görün →
            </a>
          </div>
          <div className="faq-list">
            {[
              [
                "ilkPos hangi işletmeler için uygundur?",
                "ilkPos; restoran, cafe, fast food, market, şarküteri, paket servis, pastane, büfe ve benzer satış noktalarının POS, stok, müşteri ve operasyon ihtiyaçları için kullanılabilir.",
              ],
              [
                "ilkPos yalnızca restoran programı mı?",
                "Hayır. Masa ve mutfak operasyonlarının yanında ürün, kategori, satış, stok, müşteri, kullanıcı ve raporlama özellikleriyle farklı yeme-içme ve perakende işletmelerine uyarlanabilir.",
              ],
              [
                "Caller ID nasıl çalışır?",
                "Gelen çağrıdaki numara algılanır. Kayıtlı numaralarda müşteri ve adres bilgileri açılır; yeni numaralarda müşteri oluşturma akışı başlatılabilir.",
              ],
              [
                "Yemek platformlarından gelen siparişler görülebilir mi?",
                "Desteklenen Uber Eats / Trendyol Go, Migros Yemek ve Yemeksepeti entegrasyonlarından gelen siparişler kaynak bilgisiyle tek panelden takip edilebilir.",
              ],
            ].map(([q, a], i) => (
              <article className={faq === i ? "open" : ""} key={q}>
                <button onClick={() => setFaq(faq === i ? -1 : i)}>
                  <span>0{i + 1}</span>
                  <b>{q}</b>
                  <i>+</i>
                </button>
                <div>
                  <p>{a}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <span>İşletmenizi geleceğe taşıyın.</span>
          <h2>Hazırsanız başlayalım.</h2>
          <p>ilkPos ile operasyonunuzu bugün sadeleştirin.</p>
          <div>
            <a className="pill black" href={register}>
              Ücretsiz başla <b>↗</b>
            </a>
            <a
              className="pill white"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Bizimle konuşun
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
