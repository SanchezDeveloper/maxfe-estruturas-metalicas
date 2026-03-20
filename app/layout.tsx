import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MaxFe | Engenharia de Estruturas Metálicas em Brasília",
    template: "%s | MaxFe Estruturas Metálicas"
  },
  description: "Especialista em fabricação e montagem de galpões industriais, mezaninos e coberturas metálicas. Precisão técnica e segurança para sua obra em todo o Distrito Federal.",
  keywords: [
    "estruturas metálicas brasília", 
    "galpões industriais df", 
    "mezaninos metálicos", 
    "engenharia de estruturas", 
    "coberturas metálicas",
    "MaxFe engenharia"
  ],
  authors: [{ name: "MaxFe Estruturas Metálicas" }],
  creator: "MaxFe",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.maxfe.com.br",
    title: "MaxFe | Estruturas Metálicas e Soluções em Engenharia",
    description: "Líder em soluções de aço para indústria e comércio. Projetos sob medida com rigor técnico e rapidez na entrega.",
    siteName: "MaxFe",
    images: [
      {
        url: "/og-image.jpg", // Certifique-se de criar uma imagem de 1200x630px na pasta public
        width: 1200,
        height: 630,
        alt: "MaxFe Estruturas Metálicas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      
    </html>
  );
}
