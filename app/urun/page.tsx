import type { Metadata } from "next";
import { MarketingPage } from "../inner-page";
export const metadata: Metadata = {
  title: "Ürün — ilkPos",
  description: "ilkPos modern POS ve işletme yönetim platformunu keşfedin.",
};
export default function Page() {
  return (
    <MarketingPage
      eyebrow="Modern POS ve işletme yönetimi"
      title="Operasyonun tamamı"
      accent="tek güçlü sistemde."
      intro="Satış, masa, stok, müşteri, paket servis ve şube operasyonlarını birbirine bağlı tek bir çalışma alanında yönetin."
      visual="system"
      proof={[
        ["Tek panel", "Tüm operasyon"],
        ["Canlı", "Anlık görünürlük"],
        ["Modüler", "İhtiyaca göre"],
        ["Web", "Her yerden erişim"],
      ]}
      sectionEyebrow="Ürün yapısı"
      sectionTitle="Günlük operasyonunuzu baştan sona birleştirin."
      sectionCopy="ilkPos yalnızca ödeme alan bir kasa ekranı değildir. Siparişin oluştuğu andan stok ve raporlara yansıdığı ana kadar işletme içindeki veri akışını düzenler."
      items={[
        {
          number: "01",
          title: "Satış merkezi",
          copy: "Masa, gel-al ve paket servis satışlarını hızlı bir POS ekranında yönetin.",
          tag: "POS",
        },
        {
          number: "02",
          title: "Operasyon görünümü",
          copy: "Açık siparişleri, masaları, kuryeleri ve hazırlık durumlarını takip edin.",
        },
        {
          number: "03",
          title: "Ürün ve stok",
          copy: "Kategori, ürün, reçete ve stok hareketlerini satış verisiyle birlikte yönetin.",
        },
        {
          number: "04",
          title: "Müşteri yönetimi",
          copy: "Müşteri ve çoklu adres kayıtlarını paket servis akışıyla birleştirin.",
        },
        {
          number: "05",
          title: "Ekip ve yetki",
          copy: "Kullanıcıları, rolleri ve izinleri işletme yapınıza göre düzenleyin.",
        },
        {
          number: "06",
          title: "Yönetim raporları",
          copy: "Satış ve operasyon verilerini şube, ürün ve dönem bazında değerlendirin.",
        },
      ]}
      darkTitle="Operasyonunuz büyürken sisteminiz de sizinle büyüsün."
      darkCopy="ilkPos ürün yapısını işletmenizin çalışma biçimine göre birlikte planlayalım."
    />
  );
}
