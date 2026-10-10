import type { Metadata } from "next";
import { MarketingPage } from "../inner-page";

export const metadata: Metadata = {
  title: "Entegrasyonlar — ilkPos",
  description:
    "Yemek siparişi, yazarkasa ve SMS entegrasyonlarını tek operasyonda birleştirin.",
};
export default function Page() {
  return (
    <MarketingPage
      eyebrow="Bağlantılar"
      title="Dağınık kanalları"
      accent="tek operasyonda toplayın."
      intro="Online sipariş platformlarını, yazarkasayı ve müşteri bildirimlerini ana çalışma alanınıza bağlayın; tekrar eden adımları azaltın."
      visual="food"
      proof={[
        ["4+", "Sipariş kanalı"],
        ["Tek", "Operasyon akışı"],
        ["Canlı", "Kaynak bilgisi"],
        ["Daha az", "Manuel işlem"],
      ]}
      sectionEyebrow="Desteklenen bağlantılar"
      sectionTitle="Sipariş kaynağı değişse de operasyonunuz değişmesin."
      sectionCopy="Siparişlerin hangi kanaldan geldiğini görün, hazırlık ve teslimat adımlarını ana sistemde yönetin. Güncel entegrasyon kapsamı aktivasyon öncesinde işletmeniz için teyit edilir."
      items={[
        {
          number: "01",
          title: "Uber Eats / Trendyol Go",
          copy: "Platform siparişlerini kaynak bilgisiyle ilkPos akışına alın.",
          tag: "Sipariş",
        },
        {
          number: "02",
          title: "Yemeksepeti",
          copy: "Manuel sipariş aktarımını azaltın ve mutfak operasyonunu düzenleyin.",
        },
        {
          number: "03",
          title: "Migros Yemek",
          copy: "Farklı tabletler arasında kaybolmadan siparişleri merkezi görünümde takip edin.",
        },
        {
          number: "04",
          title: "Yazarkasa",
          copy: "Ingenico ve desteklenen çözümlerle kasa sürecini satış akışına bağlayın.",
        },
        {
          number: "05",
          title: "Netgsm SMS",
          copy: "Sipariş durumuna göre düzenlenebilir müşteri bildirimleri gönderin.",
        },
        {
          number: "06",
          title: "Caller ID",
          copy: "Telefon çağrılarını müşteri ve adres kayıtlarıyla eşleştirin.",
        },
      ]}
      darkTitle="Tüm sipariş kanalları aynı ritimde çalışsın."
      darkCopy="Mevcut sistemlerinizi ve ihtiyaç duyduğunuz bağlantıları birlikte değerlendirelim."
    />
  );
}
