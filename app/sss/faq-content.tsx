"use client";

import { useState } from "react";
import { whatsappUrl } from "../site-chrome";

const questions = [
  [
    "ilkPos hangi işletmeler için uygundur?",
    "ilkPos; restoran, cafe, fast food, market, şarküteri, paket servis, pastane, büfe ve benzer satış noktalarının POS, stok, müşteri ve operasyon ihtiyaçları için kullanılabilir. Uygun modüller işletme yapısına göre değerlendirilir.",
  ],
  [
    "ilkPos yalnızca restoran programı mı?",
    "Hayır. Masa ve mutfak operasyonlarının yanında ürün, kategori, satış, stok, müşteri, kullanıcı ve raporlama kabiliyetleri sayesinde farklı yeme-içme ve perakende işletmelerine uyarlanabilir.",
  ],
  [
    "Caller ID nasıl çalışır?",
    "Gelen çağrıdaki numara algılanır. Numara kayıtlıysa müşteri ve adres bilgilerine erişilir; yeni bir numaraysa müşteri oluşturma akışı başlatılabilir. Eş zamanlı ek çağrılar bekleyen çağrı kuyruğunda tutulur.",
  ],
  [
    "Yemek platformlarından gelen siparişler görülebilir mi?",
    "Desteklenen Uber Eats / Trendyol Go, Migros Yemek ve Yemeksepeti entegrasyonları üzerinden siparişler ilkPos’a aktarılabilir ve kaynak bilgisiyle tek panelden takip edilebilir. Güncel kapsam aktivasyon öncesinde teyit edilir.",
  ],
  [
    "Yazarkasa entegrasyonu tüm cihazlarla çalışır mı?",
    "Uyumluluk cihazın marka/modeline ve kurulum yapısına bağlıdır. Desteklenen cihazlar için WhatsApp üzerinden ilkPos ekibine yazabilirsiniz.",
  ],
  [
    "Çoklu şube desteği var mı?",
    "Evet. Şubeler kendi operasyonlarını yetki kapsamında yönetebilir; uygun yetkiye sahip yöneticiler organizasyon seviyesinde izin verilen yönetim ve raporlama alanlarına erişebilir.",
  ],
  [
    "Demo talebi nasıl oluşturulur?",
    "WhatsApp üzerinden işletme türünüzü ve ihtiyacınızı paylaşabilirsiniz. Ekibimiz uygun ürün kapsamı ve demo süreci hakkında bilgi verir.",
  ],
  [
    "ilkPos fiyatları nedir?",
    "Standart ilkPos paketi aylık 699 TL, 3 aylık 1.799 TL ve yıllık 5.999 TL’dir. Caller ID standart pakete dahildir. Eklenti ve entegrasyonları fiyat simülatöründen seçebilirsiniz. Fiyatlara KDV dahil değildir.",
  ],
] as const;

export function FaqContent() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="support-hero faq-page-hero">
        <div className="shell">
          <div className="mini-title">
            <i /> Yardım merkezi
          </div>
          <h1>
            Sık sorulan <span>sorular.</span>
          </h1>
          <p>
            ilkPos’un kullanım alanları, özellikleri, entegrasyonları ve
            iletişim süreci hakkında kısa ve net yanıtlar.
          </p>
        </div>
      </section>
      <section className="section faq-page">
        <div className="shell faq-page-layout">
          <div className="faq-list">
            {questions.map(([question, answer], index) => (
              <article className={open === index ? "open" : ""} key={question}>
                <button
                  type="button"
                  onClick={() => setOpen(open === index ? -1 : index)}
                  aria-expanded={open === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{question}</b>
                  <i>+</i>
                </button>
                <div>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
          <aside className="faq-contact-card">
            <span>YANITINIZI BULAMADINIZ MI?</span>
            <h2>Ekibimize doğrudan sorun.</h2>
            <p>
              İşletmenizin yapısını ve ihtiyacınızı paylaşın, size uygun kapsamı
              birlikte netleştirelim.
            </p>
            <a
              className="pill orange"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan yazın <b>↗</b>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
