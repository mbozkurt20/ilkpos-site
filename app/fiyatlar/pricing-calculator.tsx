"use client";

import { useMemo, useState } from "react";

const plans = [
  { key: "monthly", name: "Aylık", price: 699, days: 30, factor: 1 / 12 },
  { key: "quarterly", name: "3 Aylık", price: 1799, days: 90, factor: 1 / 4 },
  { key: "annual", name: "Yıllık", price: 5999, days: 360, factor: 1 },
] as const;

const addons = [
  {
    key: "posis-yemek",
    name: "PosisYemek",
    annual: 1999,
    copy: "ilkPos’un kendi online sipariş kanalı · Sipariş ve menü akışının merkezi takibi",
  },
  {
    key: "ai-assistant",
    name: "AI Asistanı",
    annual: 1499,
    copy: "Ekrana göre kullanım desteği · Soru ve yanıt kayıtlarının yönetimi",
  },
  {
    key: "scale",
    name: "Terazi",
    annual: 999,
    copy: "Gramaj bazlı satış akışı · Terazi ürünleri için fiyat hesaplama",
  },
  {
    key: "personnel",
    name: "Personel Tüketim",
    annual: 749,
    copy: "Personel tüketim kaydı · Ürün ve tutar bazlı tüketim raporu",
  },
  {
    key: "kiosk",
    name: "Kiosk",
    annual: 0,
    quote: true,
    copy: "Self servis sipariş deneyimi · Yoğun saatlerde daha hızlı sipariş akışı",
  },
  {
    key: "frequency",
    name: "Frequency",
    annual: 0,
    quote: true,
    copy: "Müşteri sıklığı ve tekrar ziyaret takibi · Sadakat odaklı operasyon görünümü",
  },
  {
    key: "board",
    name: "Board",
    annual: 0,
    quote: true,
    copy: "Sipariş ve durum ekranı · Operasyon bilgisini ekip ve müşterilerle paylaşma",
  },
  {
    key: "yemeksepeti",
    name: "Yemeksepeti Entegrasyonu",
    annual: 500,
    monthly: 100,
    quarterly: 300,
    copy: "Yemeksepeti siparişlerini ilkPos’a aktarma · Sipariş kaynağını tek ekranda izleme",
  },
  {
    key: "trendyol-go",
    name: "Trendyol Go Entegrasyonu",
    annual: 500,
    monthly: 100,
    quarterly: 300,
    copy: "Trendyol Go siparişlerini ilkPos’a aktarma · Sipariş durumunu merkezi yönetme",
  },
  {
    key: "migros-yemek",
    name: "Migros Yemek Entegrasyonu",
    annual: 500,
    monthly: 100,
    quarterly: 300,
    copy: "Migros Yemek siparişlerini ilkPos’a aktarma · Sipariş kaynağını tek ekranda izleme",
  },
  {
    key: "netgsm-sms",
    name: "Netgsm SMS Entegrasyonu",
    annual: 999,
    monthly: 100,
    quarterly: 300,
    copy: "Sipariş durumuna göre otomatik SMS · Mesaj şablonu ve toplam tutar desteği",
  },
] as const;

const standardFeatures = [
  "POS ve hızlı satış ekranı",
  "Masa ve adisyon yönetimi",
  "Gel-al sipariş yönetimi",
  "Paket servis yönetimi",
  "Caller ID ile arayan müşteri tanıma",
  "Müşteri ve çoklu adres kayıtları",
  "Kurye yönetimi ve sipariş atama",
  "Online siparişlerin tek ekranda takibi",
  "Ürün, kategori ve özellik yönetimi",
  "Dijital ve QR menü",
  "Stok ve reçete yönetimi",
  "Cari hesap yönetimi",
  "Satış, ürün ve kurye raporları",
  "Mutfak yazıcısı yönlendirmeleri",
  "Kullanıcı, rol ve yetki yönetimi",
  "Menü verilerini içe ve dışa aktarma",
  "Garson ve Patron uygulamaları",
];
const format = (value: number) =>
  `${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value)} ₺`;

export function PricingCalculator() {
  const [planKey, setPlanKey] =
    useState<(typeof plans)[number]["key"]>("annual");
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const plan = plans.find((item) => item.key === planKey)!;
  const priceFor = (addon: (typeof addons)[number], key = plan.key) => {
    const chosen = plans.find((item) => item.key === key)!;
    const explicit =
      key === "monthly"
        ? "monthly" in addon
          ? addon.monthly
          : undefined
        : key === "quarterly"
          ? "quarterly" in addon
            ? addon.quarterly
            : undefined
          : addon.annual;
    return explicit ?? Math.round(addon.annual * chosen.factor);
  };
  const chosenAddons = addons.filter((addon) => selected.includes(addon.key));
  const total =
    plan.price + chosenAddons.reduce((sum, addon) => sum + priceFor(addon), 0);
  const featureCount = 17 + chosenAddons.length * 2;
  const saving = useMemo(() => {
    if (plan.key === "monthly") return 0;
    const months = plan.key === "quarterly" ? 3 : 12;
    const monthlyEquivalent =
      699 * months +
      chosenAddons.reduce(
        (sum, addon) => sum + priceFor(addon, "monthly") * months,
        0,
      );
    return Math.max(0, monthlyEquivalent - total);
  }, [plan.key, selected, total]);
  const toggle = (key: string) =>
    setSelected((current) =>
      current.includes(key)
        ? current.filter((item) => item !== key)
        : [...current, key],
    );
  const reset = () => {
    setPlanKey("annual");
    setSelected([]);
    setStatus("");
  };
  const whatsappMessage = `Merhaba, ${plan.name} ilkPos Paketi hakkında bilgi almak istiyorum. Seçimlerim: ${chosenAddons.map((item) => item.name).join(", ") || "Ek modül yok"}. Simülasyon toplamı: ${format(total)} + KDV.`;

  return (
    <section className="simulator-section" id="paket-olustur">
      <div className="shell">
        <div className="simulator-intro">
          <div>
            <span>Paketinizi oluşturun</span>
            <h2>Şeffaf fiyat, ihtiyacınız kadar özellik.</h2>
          </div>
          <p>
            Standart ilkPos paketi Caller ID dahil günlük operasyon için gereken
            ana özellikleri içerir. Süreyi ve isteğe bağlı modülleri seçtikçe
            toplam fiyatı canlı görün.
          </p>
        </div>
        <div className="pricing-simulator">
          <div className="pricing-builder">
            <section className="pricing-step">
              <header>
                <span>01</span>
                <div>
                  <h3>Kullanım süresini seçin</h3>
                  <p>Uzun dönem seçimlerinde aylık kullanım maliyeti düşer.</p>
                </div>
              </header>
              <div className="plan-options">
                {plans.map((item) => (
                  <button
                    type="button"
                    className={plan.key === item.key ? "selected" : ""}
                    aria-pressed={plan.key === item.key}
                    onClick={() => setPlanKey(item.key)}
                    key={item.key}
                  >
                    <span>{item.name}</span>
                    <strong>{format(item.price)}</strong>
                    <small>{item.days} gün kullanım</small>
                    {item.key === "annual" && <em>En avantajlı</em>}
                  </button>
                ))}
              </div>
            </section>
            <section className="pricing-step">
              <header>
                <span>02</span>
                <div>
                  <h3>İsteğe bağlı modül ve entegrasyonlar</h3>
                  <p>
                    Seçtiğiniz döneme göre eklenti bedeli otomatik hesaplanır.
                  </p>
                </div>
              </header>
              <div className="addon-options">
                {addons.map((addon) => (
                  <label
                    className={selected.includes(addon.key) ? "selected" : ""}
                    key={addon.key}
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(addon.key)}
                      onChange={() => toggle(addon.key)}
                    />
                    <i>{selected.includes(addon.key) ? "✓" : ""}</i>
                    <span>
                      <strong>{addon.name}</strong>
                      <small>{addon.copy}</small>
                    </span>
                    <b>
                      {"quote" in addon && addon.quote
                        ? "Teklif alın"
                        : format(priceFor(addon))}
                      <small>
                        {"quote" in addon && addon.quote
                          ? "İhtiyaca özel"
                          : `${plan.name} fiyatı`}
                      </small>
                    </b>
                  </label>
                ))}
              </div>
            </section>
            <section className="standard-set">
              <header>
                <div>
                  <span>STANDART PAKETE DAHİL</span>
                  <h3>İşletmeniz için tam operasyon seti</h3>
                </div>
                <b>
                  {featureCount} <small>özellik</small>
                </b>
              </header>
              <div>
                {standardFeatures.map((feature, index) => (
                  <p className={index === 4 ? "highlighted" : ""} key={feature}>
                    <i>✓</i>
                    <span>{feature}</span>
                    {index === 4 && <em>Standart</em>}
                  </p>
                ))}
              </div>
            </section>
          </div>
          <aside className="simulator-summary">
            <span>SEÇİMİNİZ</span>
            <h3>{plan.name} Paket</h3>
            <p>{plan.days} günlük kullanım</p>
            <div className="sim-total">
              <strong>{format(total)}</strong>
              <small>KDV dahil değildir</small>
            </div>
            <div className="sim-saving">
              {plan.key === "monthly"
                ? "15 günlük ücretsiz deneme ile risksiz başlayın."
                : saving > 0
                  ? `Aylık kullanıma göre ${format(saving)} avantaj`
                  : "Seçtiğiniz dönem için şeffaf toplam fiyat."}
            </div>
            <hr />
            <div className="summary-line">
              <span>Standart ilkPos</span>
              <b>{format(plan.price)}</b>
            </div>
            <div className="summary-addons">
              {chosenAddons.length === 0 ? (
                <span>Ek modül veya entegrasyon seçilmedi</span>
              ) : (
                chosenAddons.map((addon) => (
                  <span key={addon.key}>
                    <span>{addon.name}</span>
                    <b>
                      {"quote" in addon && addon.quote
                        ? "Teklif alın"
                        : `+ ${format(priceFor(addon))}`}
                    </b>
                  </span>
                ))
              )}
            </div>
            <div className="summary-count">
              <i>✓</i>
              <span>
                Toplam <b>{featureCount}</b> özellik seçildi
              </span>
            </div>
            <button
              className="checkout"
              onClick={() => {
                setStatus("Güvenli ödeme POSIS sayfasında tamamlanır.");
                window.open(
                  "https://posis.app/fiyatlar",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              Kredi Kartı ile Öde <span>→</span>
            </button>
            <a
              className="summary-wa"
              href={`https://wa.me/908508407312?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Yaz <span>→</span>
            </a>
            <p className="summary-status" aria-live="polite">
              {status}
            </p>
            <button className="summary-reset" onClick={reset}>
              Seçimleri sıfırla
            </button>
            <small className="summary-note">
              Güvenli ödeme Lemon Squeezy üzerinden tamamlanır. Donanım, kurulum
              ve üçüncü taraf servis ücretleri ayrıca değerlendirilir.
            </small>
          </aside>
        </div>
        <div className="pricing-notes">
          <article>
            <b>15 gün</b>
            <span>
              <strong>Ücretsiz deneme</strong>
              <small>Standart ilkPos modüllerini işletmenizde deneyin.</small>
            </span>
          </article>
          <article>
            <b>8</b>
            <span>
              <strong>Standart modül</strong>
              <small>
                Masalar, Gel-Al, Paketler, Online Siparişler, Stoklar, Ürünler,
                Cariler ve Raporlar.
              </small>
            </span>
          </article>
          <article>
            <b>11</b>
            <span>
              <strong>İsteğe bağlı seçenek</strong>
              <small>
                Yedi ek modül ile dört entegrasyonu ihtiyacınıza göre ekleyin.
              </small>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
