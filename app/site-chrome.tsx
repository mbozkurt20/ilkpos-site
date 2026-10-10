"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const registerUrl = "https://pos.ilkpos.com/register";
export const loginUrl = "https://pos.ilkpos.com/";
export const whatsappUrl =
  "https://wa.me/908508407312?text=Merhaba%2C%20ilkPos%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export function ThemeLogo({ alt = "ilkPos" }: { alt?: string }) {
  return (
    <span className="theme-logo">
      <Image
        className="theme-logo-light"
        src="/assets/logo-light.png"
        alt={alt}
        width={818}
        height={305}
        priority
      />
      <Image
        className="theme-logo-dark"
        src="/assets/logo-dark.png"
        alt=""
        width={868}
        height={287}
        priority
      />
    </span>
  );
}

const simpleLinks = [
  ["/urun", "Ürün"],
  ["/fiyatlar", "Fiyatlar"],
];
const endLinks = [
  ["/hakkimizda", "Hakkımızda"],
  ["/destek", "Destek"],
];

function FeatureMenuIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    pos: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 14h3M15 14h1" /></>,
    tables: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
    delivery: <><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M5 17H3v-6h10l3 3h3v3M8 7h5v4" /></>,
    caller: <path d="M6.6 3h3l1.5 4-2 1.7a15 15 0 0 0 6.2 6.2l1.7-2 4 1.5v3c0 2-1.6 3.6-3.6 3.6C9.5 21 3 14.5 3 6.6 3 4.6 4.6 3 6.6 3Z" />,
    stock: <><path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" /><path d="M4 7.5V16l8 5 8-5V7.5M12 12v9" /></>,
    reports: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    branches: <><path d="M4 21v-9l8-5 8 5v9M8 21v-5h8v5M12 7V3" /><circle cx="12" cy="3" r="1" /></>,
    qr: <><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" /><rect x="8" y="8" width="8" height="8" rx="1" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name] ?? paths.pos}
    </svg>
  );
}
const megaMenus = [
  {
    key: "features",
    label: "Özellikler",
    href: "/ozellikler",
    eyebrow: "Platform",
    title: "Operasyonun tamamı, tek güçlü sistemde.",
    copy: "Satıştan stok yönetimine kadar işinizi hızlandıran modülleri keşfedin.",
    items: [
      [
        "POS ve Satış Yönetimi",
        "Hızlı satış, ürün, kategori ve ödeme akışı.",
        "/ozellikler#item-01",
        "pos",
      ],
      [
        "Masa Yönetimi",
        "Salon düzeni ve açık adisyonları izleyin.",
        "/ozellikler#item-02",
        "tables",
      ],
      [
        "Paket Servis Yönetimi",
        "Müşteri, adres, sipariş ve kuryeyi birleştirin.",
        "/ozellikler#item-03",
        "delivery",
      ],
      [
        "Caller ID",
        "Gelen çağrıyı müşteri ve adresle eşleştirin.",
        "/ozellikler#item-04",
        "caller",
      ],
      [
        "Stok ve Reçete Yönetimi",
        "Ürün içeriklerini satışla birlikte takip edin.",
        "/ozellikler#item-05",
        "stock",
      ],
      [
        "Raporlama",
        "Satış ve operasyon verilerini değerlendirin.",
        "/ozellikler#item-06",
        "reports",
      ],
      [
        "Çoklu Şube Yönetimi",
        "Şubelerde merkezi görünürlük kazanın.",
        "/ozellikler#item-07",
        "branches",
      ],
      [
        "QR Menü ve Masa QR",
        "Menünüzü dijital ve erişilebilir sunun.",
        "/ozellikler#item-08",
        "qr",
      ],
    ],
  },
  {
    key: "sectors",
    label: "Sektörler",
    href: "/sektorler",
    eyebrow: "Sektörel çözümler",
    title: "İşletmenizin ritmine uyum sağlayan POS.",
    copy: "Her operasyon tipine özel, sade ve ölçeklenebilir çalışma akışları.",
    items: [
      [
        "Restoran",
        "Masa, mutfak, stok, reçete ve raporlama.",
        "/sektorler#item-01",
        "♨",
      ],
      [
        "Cafe",
        "Masa, gel-al, ürün yönetimi ve QR Menü.",
        "/sektorler#item-02",
        "◉",
      ],
      [
        "Fast Food",
        "Hızlı sipariş, mutfak, Caller ID ve kurye.",
        "/sektorler#item-03",
        "≡",
      ],
      [
        "Market",
        "POS, stok, müşteri, rapor ve yazarkasa.",
        "/sektorler#item-04",
        "▤",
      ],
      [
        "Şarküteri",
        "Ürün, müşteri ve satış süreçleri.",
        "/sektorler#item-05",
        "□",
      ],
      [
        "Paket Servis",
        "Çağrı, online sipariş ve teslimat akışı.",
        "/sektorler#item-06",
        "→",
      ],
    ],
  },
  {
    key: "integrations",
    label: "Entegrasyonlar",
    href: "/entegrasyonlar",
    eyebrow: "Bağlantılar",
    title: "Tüm sipariş kanalları aynı operasyonda.",
    copy: "Kasa ve sipariş platformlarını ilkPos çalışma alanınıza bağlayın.",
    items: [
      [
        "Yazarkasa Entegrasyonu",
        "Kasa sürecini POS satış akışıyla yönetin.",
        "/entegrasyonlar#item-04",
        "₺",
      ],
      [
        "Uber Eats / Trendyol Go",
        "Platform siparişlerini ana akışa alın.",
        "/entegrasyonlar#item-01",
        "U",
      ],
      [
        "Migros Yemek",
        "Sipariş kaynağını tek ekranda izleyin.",
        "/entegrasyonlar#item-03",
        "M",
      ],
      [
        "Yemeksepeti",
        "Manuel aktarımı azaltıp mutfağı düzenleyin.",
        "/entegrasyonlar#item-02",
        "Y",
      ],
      [
        "Netgsm SMS",
        "Sipariş durumu bildirimleri gönderin.",
        "/entegrasyonlar#item-05",
        "✉",
      ],
    ],
  },
  {
    key: "partnerships",
    label: "İş Ortaklığı",
    href: "/bayilik",
    eyebrow: "Birlikte büyüyelim",
    title: "ilkPos gücüyle yeni işletmelere ulaşın.",
    copy: "Bayilik fırsatlarını ve işletmelere özel güncel kampanyaları inceleyin.",
    items: [
      [
        "Bayilik",
        "Bölgenizde ilkPos satış ve çözüm ortağı olun.",
        "/bayilik",
        "◇",
      ],
      [
        "Kampanyalar",
        "Yeni üyelik ve geçiş fırsatlarını keşfedin.",
        "/kampanyalar",
        "%",
      ],
    ],
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "dark" ? "dark" : "light",
    );
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem("ilkpos-theme", nextTheme);
    } catch {
      // Tema, depolama kapalı olsa da mevcut oturumda çalışmaya devam eder.
    }
  };
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="shell top-strip-inner">
          <div className="top-strip-promo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11M16 3v18M16 3c3 1 4 4 4 7v2h-4" />
            </svg>
            <strong>
              <b>15 gün ücretsiz deneyin,</b>
              <span> POS sisteminizi dakikalar içinde açın!</span>
            </strong>
            <span className="top-strip-arrow">→</span>
            <a className="top-strip-phone" href="tel:+908508407312">
              0850 840 73 12
            </a>
            <small>ya da</small>
            <Link className="top-strip-callback" href="/iletisim">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.6 3h3l1.5 4-2 1.7a15 15 0 0 0 6.2 6.2l1.7-2 4 1.5v3c0 2-1.6 3.6-3.6 3.6C9.5 21 3 14.5 3 6.6 3 4.6 4.6 3 6.6 3Z" />
              </svg>
              Biz Sizi Arayalım
            </Link>
          </div>
        </div>
      </div>
      <div className="shell nav">
        <Link className="logo" href="/" aria-label="ilkPos ana sayfa">
          <ThemeLogo />
        </Link>
        <nav className={mobileOpen ? "nav-menu open" : "nav-menu"}>
          {simpleLinks.map(([href, label]) => (
            <Link
              className={pathname === href ? "active" : ""}
              href={href}
              key={href}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          {megaMenus.map((menu) => (
            <div
              className={`nav-group ${activeMega === menu.key ? "mega-open" : ""}`}
              key={menu.key}
              onMouseEnter={() => setActiveMega(menu.key)}
              onMouseLeave={() => setActiveMega(null)}
              onFocus={() => setActiveMega(menu.key)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setActiveMega(null);
                }
              }}
            >
              <button
                type="button"
                className={pathname === menu.href ? "active" : ""}
                onClick={() => {
                  if (window.matchMedia("(max-width: 1080px)").matches) {
                    setActiveMega(activeMega === menu.key ? null : menu.key);
                  }
                }}
                aria-expanded={activeMega === menu.key}
              >
                {menu.label}
                <i />
              </button>
              <div className="mega-menu">
                <div className="shell mega-inner">
                  <div className="mega-intro">
                    <span>{menu.eyebrow}</span>
                    <h2>{menu.title}</h2>
                    <p>{menu.copy}</p>
                    <Link
                      href={menu.href}
                      onClick={() => {
                        setActiveMega(null);
                        setMobileOpen(false);
                      }}
                    >
                      Tümünü incele <b>→</b>
                    </Link>
                  </div>
                  <div className="mega-grid">
                    {menu.items.map(([title, copy, href, icon]) => (
                      <Link
                        href={href}
                        key={title}
                        onClick={() => {
                          setActiveMega(null);
                          setMobileOpen(false);
                        }}
                      >
                        <i>
                          {menu.key === "features" ? (
                            <FeatureMenuIcon name={icon} />
                          ) : (
                            icon
                          )}
                        </i>
                        <span>
                          <strong>{title}</strong>
                          <small>{copy}</small>
                        </span>
                        <b>→</b>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {endLinks.map(([href, label]) => (
            <Link
              className={pathname === href ? "active" : ""}
              href={href}
              key={href}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="mobile-nav-actions">
            <a className="nav-login" href={loginUrl}>
              Giriş yap
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M10 5H5v14h5M13 8l4 4-4 4M17 12H9" />
              </svg>
            </a>
            <a href={registerUrl}>Hemen başla →</a>
          </div>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label="Gece ve gündüz modu arasında geçiş yap"
          aria-pressed={theme === "dark"}
          title="Temayı değiştir"
        >
          <svg className="theme-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
          </svg>
          <svg className="theme-moon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
          </svg>
        </button>
        <div className="nav-cta">
          <a className="nav-login" href={loginUrl}>
            Giriş yap
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 5H5v14h5M13 8l4 4-4 4M17 12H9" />
            </svg>
          </a>
          <a className="pill" href={registerUrl}>
            Hemen başla <span>↗</span>
          </a>
        </div>
        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menüyü aç"
          aria-expanded={mobileOpen}
        >
          <i />
          <i />
        </button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div>
          <Link className="logo footer-logo" href="/">
            <ThemeLogo />
          </Link>
          <p>
            İşletmenizin tüm ritmini tek merkezden yöneten modern POS platformu.
          </p>
        </div>
        <nav>
          <b>Ürün</b>
          <Link href="/urun">Ürün</Link>
          <Link href="/ozellikler">Özellikler</Link>
          <Link href="/entegrasyonlar">Entegrasyonlar</Link>
          <Link href="/fiyatlar">Fiyatlar</Link>
        </nav>
        <nav>
          <b>Şirket</b>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/sektorler">Sektörler</Link>
          <Link href="/iletisim">İletişim</Link>
          <Link href="/destek">Destek</Link>
          <Link href="/sss">SSS</Link>
        </nav>
        <div className="footer-contact">
          <b>Bize ulaşın</b>
          <a href="mailto:destek@posis.app">destek@posis.app</a>
          <a href={whatsappUrl}>0850 840 73 12</a>
        </div>
      </div>
      <div className="shell footer-apps">
        <div className="footer-store-badges">
          <div className="footer-store-badge" aria-label="App Store">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.7 12.5c0-2 1.7-3 1.8-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.7 1.1 8.9.7 1.1 1.6 2.3 2.8 2.2 1.1 0 1.6-.7 3.1-.7 1.4 0 1.9.7 3.1.7 1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.2-2.6 1.2-2.7-.1 0-2.4-.9-2.4-3.7ZM13.6 6.4c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z" />
            </svg>
            <span><small>Şuradan indirin</small><b>App Store</b></span>
          </div>
          <div className="footer-store-badge" aria-label="Google Play">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m4 3 11.7 9L4 21V3Z" />
              <path d="m15.7 12 3.2-2.4c.7-.5 1.1-.2 1.1.5v3.8c0 .7-.4 1-1.1.5L15.7 12Z" />
            </svg>
            <span><small>Şuradan edinin</small><b>Google Play</b></span>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 ilkPos. Tüm hakları saklıdır.</span>
        <div className="footer-legal">
          <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
          <Link href="/on-bilgilendirme-formu">Ön Bilgilendirme</Link>
          <Link href="/mesafeli-satis-sozlesmesi">Mesafeli Satış</Link>
          <Link href="/iptal-iade-politikasi">İptal ve İade</Link>
          <Link href="/gizlilik-politikasi">Gizlilik</Link>
          <Link href="/kvkk">KVKK</Link>
          <Link href="/cerez-politikasi">Çerezler</Link>
        </div>
      </div>
      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="0850 840 73 12 numarasıyla WhatsApp üzerinden iletişime geçin"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3a12.5 12.5 0 0 0-10.8 18.8L3.5 28.5l6.9-1.6A12.5 12.5 0 1 0 16 3Z" />
          <path d="M11.2 9.7c.3-.7.7-.7 1-.7h.8c.2 0 .5 0 .7.6l1 2.4c.1.3.1.6-.1.8l-.8 1c-.2.2-.3.5-.1.8.7 1.4 1.8 2.6 3.2 3.4.3.2.6.1.8-.1l1.1-1.3c.2-.3.5-.3.8-.2l2.3 1.1c.3.2.6.3.6.5.1.2.1 1.4-.5 2.7-.6 1.3-2 2-3.3 2.1-1.1.1-2.5-.2-4.3-1-1-.5-4.4-1.6-7.5-5.8-2.5-3.4-2.5-6-2.2-7.1.3-1.1 1-2.4 2-3 .6-.4 1.2-.6 1.6-.6.4 0 .7.1.9.4Z" />
        </svg>
        <span>
          <small><i /> WhatsApp desteği</small>
          <b>0850 840 73 12</b>
        </span>
        <i className="floating-whatsapp-arrow" aria-hidden="true">↗</i>
      </a>
    </footer>
  );
}
