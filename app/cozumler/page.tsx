import type { Metadata } from "next";
import { MarketingPage } from "../inner-page";

export const metadata: Metadata = {
  title: "Çözümler — ilkPos",
  description:
    "Restoran, cafe, fast food, market ve paket servis için ilkPos çözümleri.",
};
export default function Page() {
  return (
    <MarketingPage
      eyebrow="Sektörel çözümler"
      title="Çalışma biçiminize"
      accent="uyum sağlayan POS."
      intro="Her işletmenin temposu ve önceliği farklıdır. ilkPos modülleri operasyonunuza göre şekillenir, ihtiyaçlarınız büyüdükçe sizinle birlikte gelişir."
      visual="courier"
      proof={[
        ["Restoran", "Masa & mutfak"],
        ["Cafe", "Hızlı servis"],
        ["Market", "Satış & stok"],
        ["Paket", "Çağrı & kurye"],
      ]}
      sectionEyebrow="İşletme tipleri"
      sectionTitle="Aynı güçlü altyapı, farklı operasyon akışları."
      sectionCopy="Masa servisinin detayından hızlı satışın temposuna, perakende stok takibinden paket servis koordinasyonuna kadar her işletme kendi ihtiyacı olan görünümü kullanır."
      items={[
        {
          number: "01",
          title: "Restoran",
          copy: "Masa siparişinden mutfak çıktısına, reçeteden raporlamaya uçtan uca yönetim.",
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
          copy: "Yoğun saatlerde sipariş kabulünü, mutfak yönlendirmesini ve kurye akışını düzenleyin.",
        },
        {
          number: "04",
          title: "Market",
          copy: "Hızlı satış, ürün, stok, müşteri ve yazarkasa operasyonlarını yönetin.",
        },
        {
          number: "05",
          title: "Şarküteri",
          copy: "Ürün hareketleri, müşteri kayıtları ve raporlarla günlük satışı sadeleştirin.",
        },
        {
          number: "06",
          title: "Paket Servis",
          copy: "Caller ID, kayıtlı adresler, online siparişler ve kurye atamalarını birleştirin.",
        },
      ]}
      darkTitle="İşletmenizin ritmine uygun bir sistem kurun."
      darkCopy="Sektörünüzü ve günlük operasyonunuzu konuşalım; doğru çözümü birlikte şekillendirelim."
    />
  );
}
