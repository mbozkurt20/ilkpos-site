import type { Metadata } from "next";
import { MarketingPage } from "../inner-page";

export const metadata: Metadata = {
  title: "Hakkımızda — ilkPos",
  description:
    "ilkPos'un işletme operasyonlarını sadeleştiren yaklaşımını keşfedin.",
};
export default function Page() {
  return (
    <MarketingPage
      eyebrow="İlk günden bugüne"
      title="İşletmeler için"
      accent="daha yalın bir gelecek."
      intro="ilkPos; satış, servis ve yönetim ekiplerinin aynı ritimde çalışabilmesi için karmaşık operasyonları anlaşılır bir deneyime dönüştürür."
      visual="courier"
      proof={[
        ["Tek merkez", "Birleşik operasyon"],
        ["Modüler", "İhtiyaca göre yapı"],
        ["Canlı", "Anlık görünürlük"],
        ["Güvenli", "Rol bazlı erişim"],
      ]}
      sectionEyebrow="Yaklaşımımız"
      sectionTitle="Teknoloji operasyonun önüne değil, arkasına geçmeli."
      sectionCopy="İyi bir işletme sistemi kendini anlatmak zorunda bırakmaz. Ekibin günlük akışına uyum sağlar, tekrar eden işleri azaltır ve karar vermek için gereken bilgiyi zamanında sunar."
      items={[
        {
          number: "01",
          title: "Sade deneyim",
          copy: "Yoğun servis anlarında bile hızlı öğrenilen, net ve odaklı ekranlar.",
        },
        {
          number: "02",
          title: "Operasyonel bütünlük",
          copy: "Satıştan stoğa kadar birbirinden kopuk süreçleri ortak veride buluşturan yapı.",
        },
        {
          number: "03",
          title: "Ölçeklenebilir mimari",
          copy: "Tek işletmeden çoklu şubeye, ihtiyaca göre büyüyen modüler çalışma alanı.",
        },
        {
          number: "04",
          title: "Gerçek destek",
          copy: "Kurulum ve kullanım sürecinde işletmenin çalışma biçimini anlayan destek yaklaşımı.",
        },
      ]}
      darkTitle="Daha düzenli bir işletme, daha güçlü bir servis."
      darkCopy="Ekibinizin günlük akışını birlikte değerlendirelim ve doğru ilkPos yapısını kuralım."
    />
  );
}
