import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GAP3 Assessoria | Crescimento e Processos Comerciais para Food Services",
  description:
    "A GAP3 Assessoria é a consultoria de crescimento de vendas especializada em restaurantes e food services. Estruturamos processos comerciais, CRM, entrega de cardápio digital e marketing de alta conversão.",
  keywords: [
    "GAP3 Assessoria",
    "Consultoria para Restaurantes",
    "Food Service",
    "Aumento de Vendas Restaurante",
    "CRM Restaurante",
    "Processos Comerciais Food Service",
    "Cardápio Digital",
    "Tráfego Pago Restaurante",
  ],
  authors: [{ name: "GAP3 Assessoria" }],
  openGraph: {
    title: "GAP3 Assessoria | Solução de Crescimento para Food Services",
    description:
      "Venda mais e melhor no seu restaurante com processos comerciais estruturados e acompanhamento semanal de especialistas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0C1014] text-white font-inter selection:bg-[#F3A200] selection:text-[#0C1014]">
        {children}
      </body>
    </html>
  );
}
