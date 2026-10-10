import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ilkPos — İşletmenizin Tüm Ritmi Tek Merkezde",
  description:
    "Satış, stok, masa, paket servis, müşteri ve şube operasyonlarını ilkPos ile tek noktadan yönetin.",
  icons: {
    icon: [{ url: "/assets/ilkpos-logo.png?v=20261010", type: "image/png" }],
    shortcut: "/assets/ilkpos-logo.png?v=20261010",
    apple: "/assets/ilkpos-logo.png?v=20261010",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ilkpos-theme');document.documentElement.dataset.theme=t||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme='light'}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
