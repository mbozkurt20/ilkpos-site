import Image from "next/image";
import Link from "next/link";
import {
  SiteFooter,
  SiteHeader,
  registerUrl,
  whatsappUrl,
} from "./site-chrome";

type Item = { number: string; title: string; copy: string; tag?: string };
type Props = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  visual: "food" | "courier" | "system";
  proof: [string, string][];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionCopy: string;
  items: Item[];
  darkTitle: string;
  darkCopy: string;
};

export function MarketingPage(props: Props) {
  const useFlowVisual = props.visual === "food";
  return (
    <main>
      <SiteHeader />
      <section className="inner-hero">
        <div className="shell inner-hero-grid">
          <div className="inner-copy">
            <div className="mini-title">
              <i />
              {props.eyebrow}
            </div>
            <h1>
              {props.title}
              <br />
              <span>{props.accent}</span>
            </h1>
            <p>{props.intro}</p>
            <div className="inner-actions">
              <a className="pill orange" href={registerUrl}>
                Ücretsiz başla <span>↗</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Ekibimizle konuşun →
              </a>
            </div>
          </div>
          <div className={`inner-visual ${props.visual}`}>
            <span className="inner-visual-index">ilkPos / 01</span>
            <Image
              className="theme-panel-light"
              src={
                useFlowVisual
                  ? "/assets/panel/tek-akis-light.png?v=20261010-1128"
                  : "/assets/panel/light-home.png?v=20261010-1124"
              }
              alt="ilkPos işletme yönetimi açık tema"
              fill
              priority
              unoptimized
              sizes="45vw"
            />
            <Image
              className="theme-panel-dark"
              src={
                useFlowVisual
                  ? "/assets/panel/tek-akis-dark.png?v=20261010-1128"
                  : "/assets/panel/dark-home.png?v=20261010-1124"
              }
              alt="ilkPos işletme yönetimi koyu tema"
              fill
              priority
              unoptimized
              sizes="45vw"
            />
            <div className="visual-panel">
              <div>
                <i>●</i>
                <small> CANLI OPERASYON</small>
              </div>
              <strong>Her şey tek ekranda, kontrol sizde.</strong>
              <span>Satış · Masa · Stok · Paket servis</span>
            </div>
          </div>
        </div>
      </section>
      <section className="proof-strip">
        <div className="shell">
          {props.proof.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="section inner-intro">
        <div className="shell">
          <div className="inner-section-head">
            <div>
              <div className="mini-title dark">
                <i />
                {props.sectionEyebrow}
              </div>
              <h2>{props.sectionTitle}</h2>
            </div>
            <p>{props.sectionCopy}</p>
          </div>
          <div className="inner-card-grid">
            {props.items.map((item) => (
              <article id={`item-${item.number}`} key={item.number}>
                <div>
                  <span>{item.number}</span>
                  {item.tag && <em>{item.tag}</em>}
                </div>
                <i className="inner-card-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </i>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="inner-dark">
        <div className="shell">
          <div>
            <div className="mini-title">
              <i /> ilkPos ile tanışın
            </div>
            <h2>{props.darkTitle}</h2>
            <p>{props.darkCopy}</p>
          </div>
          <div className="inner-dark-actions">
            <a className="pill orange" href={registerUrl}>
              Hemen başlayın <span>↗</span>
            </a>
            <Link href="/iletisim">İletişime geçin</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
