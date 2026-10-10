import type { Metadata } from "next";
import { MarketingPage } from "../inner-page";
export const metadata: Metadata = {
  title: "Sektörler — ilkPos",
  description:
    "Restoran, cafe, fast food, market, şarküteri ve paket servis çözümleri.",
};
export default function Page() {
  return (
    <MarketingPage
      eyebrow="Sektörel çözümler"
      title="İşletmenizin ritmine"
      accent="uyum sağlayan POS."
      intro="Masa servisinden hızlı satışa, stok takibinden teslimata kadar farklı işletme tiplerinin ihtiyaçlarına uyarlanabilen çalışma akışları."
      visual="courier"
      proof={[
        ["Restoran", "Masa & mutfak"],
        ["Cafe", "Hızlı servis"],
        ["Market", "Satış & stok"],
        ["Paket", "Çağrı & kurye"],
      ]}
      sectionEyebrow="İşletme tipleri"
      sectionTitle="Her işletme kendi çalışma biçimiyle ilerler."
      sectionCopy="Aynı güçlü altyapı, sektörünüzün önceliklerine göre farklı modülleri ve görünümleri öne çıkarır."
      items={[
        {
          number: "01",
          title: "Restoran",
          copy: "Masa siparişinden mutfak çıktısına, stok ve reçeteden raporlamaya kadar yönetim.",
          tag: "Masa servisi",
        },
        {
          number: "02",
          title: "Cafe",
          copy: "Masa, gel-al, ürün yönetimi ve QR Menü ihtiyaçlarını hızlı satışla birleştirin.",
        },
        {
          number: "03",
          title: "Fast Food",
          copy: "Sipariş kabulünü, mutfak yönlendirmesini, Caller ID ve kurye akışını düzenleyin.",
        },
        {
          number: "04",
          title: "Market",
          copy: "Perakende satışını POS, stok, müşteri, rapor ve yazarkasa bağlantısıyla yönetin.",
        },
        {
          number: "05",
          title: "Şarküteri",
          copy: "Ürün yönetimi, müşteri kayıtları ve raporlarla günlük satış sürecini sadeleştirin.",
        },
        {
          number: "06",
          title: "Paket Servis",
          copy: "Çağrı, adres, online sipariş ve kurye bilgilerini tek akışta yönetin.",
        },
      ]}
      darkTitle="Sektörünüze uygun operasyon yapısını birlikte kuralım."
      darkCopy="Günlük iş akışınızı anlatın; doğru ilkPos modüllerini birlikte seçelim."
    />
  );
}
