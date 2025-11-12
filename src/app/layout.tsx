import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mind AI - Plataforma Completa de Inteligência Artificial",
  description: "Crie vídeos realistas, converse com IA avançada, gere imagens profissionais e monetize seu conteúdo. A plataforma de IA mais completa do mundo.",
  keywords: "AI video generator, IA para criadores, ferramenta IA global, gerador de vídeos, chat IA, gerador de imagens, inteligência artificial",
  authors: [{ name: "Mind AI" }],
  openGraph: {
    title: "Mind AI - Crie. Inove. Lucre.",
    description: "Plataforma completa de IA para criadores de conteúdo. Vídeos, imagens, chat e monetização em um só lugar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
