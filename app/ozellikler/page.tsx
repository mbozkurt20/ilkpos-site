import type { Metadata } from "next";
import { MarketingPage } from "../inner-page";

export const metadata: Metadata = {
  title: "Özellikler — ilkPos",
  description:
    "POS, masa, paket servis, stok, rapor ve çoklu şube özellikleri.",
};
export default function Page() {
  return (
    <MarketingPage
      eyebrow="Tüm operasyon tek sistemde"
      title="Her adımı hızlandıran"
      accent="güçlü araçlar."
      intro="Sipariş alımından raporlamaya kadar işletmenizin günlük akışını daha görünür, daha hızlı ve daha kontrol edilebilir hale getirin."
      visual="system"
      proof={[
        ["POS", "Hızlı satış"],
        ["Masa", "Adisyon yönetimi"],
        ["Stok", "Reçete takibi"],
        ["Rapor", "Anlık analiz"],
      ]}
      sectionEyebrow="Ürün modülleri"
      sectionTitle="İşletmenizin her noktasına dokunan özellikler."
      sectionCopy="Modüller birbirinden bağımsız ekranlar gibi değil, aynı operasyonun devamı olarak çalışır. Yapılan satış stoklara, siparişler mutfağa, tamamlanan işlemler raporlara yansır."
      items={[
        {
          number: "01",
          title: "POS ve Satış Yönetimi",
          copy: "Ürün, kategori ve ödeme adımlarını hızlı satış ekranından yönetin.",
          tag: "Çekirdek",
        },
        {
          number: "02",
          title: "Masa ve Adisyon",
          copy: "Salon düzenini, açık adisyonları ve servis durumunu masa bazında izleyin.",
        },
        {
          number: "03",
          title: "Paket Servis",
          copy: "Müşteri, adres, sipariş ve kurye bilgisini tek teslimat akışında birleştirin.",
        },
        {
          number: "04",
          title: "Caller ID",
          copy: "Gelen çağrıyı kayıtlı müşteri ve adres bilgileriyle eşleştirin.",
        },
        {
          number: "05",
          title: "Stok ve Reçete",
          copy: "Ürün içeriklerini satış hareketleriyle birlikte düzenli takip edin.",
        },
        {
          number: "06",
          title: "Raporlama",
          copy: "Satış, ürün ve operasyon verilerini anlaşılır görünümlerle değerlendirin.",
        },
        {
          number: "07",
          title: "Çoklu Şube",
          copy: "Roller ve izinlerle şubeler arası merkezi görünürlük kazanın.",
        },
        {
          number: "08",
          title: "QR Menü",
          copy: "Menüyü dijital sunun ve masa bağlamını QR üzerinden erişilebilir kılın.",
        },
      ]}
      darkTitle="Ekibinize hız, yönetiminize netlik kazandırın."
      darkCopy="İşletmenize uygun modül setini birlikte belirleyelim."
    />
  );
}
