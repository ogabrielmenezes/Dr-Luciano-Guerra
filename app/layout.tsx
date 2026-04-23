import type { Metadata, Viewport } from "next";
import { Aleo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const aleo = Aleo({
  subsets: ["latin"],
  variable: "--font-aleo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Luciano Guerra | Ginecologista e Cirurgia Ginecológica em Salvador",
  description:
    "Há 20 anos oferecendo medicina de precisão com humanidade real. Especialista em Histeroscopia, Laparoscopia, Endometriose e Reprodução Humana. CRM-BA 17101.",
  keywords: [
    "ginecologista",
    "Salvador",
    "histeroscopia",
    "laparoscopia",
    "endometriose",
    "reprodução humana",
    "cirurgia ginecológica",
    "Dr. Luciano Guerra",
  ],
  authors: [{ name: "Dr. Luciano Guerra" }],
  openGraph: {
    title: "Dr. Luciano Guerra | Ginecologista em Salvador",
    description:
      "Medicina de precisão com humanidade real. Especialista em Histeroscopia, Laparoscopia e Reprodução Humana.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#123450",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${aleo.variable} bg-background`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
