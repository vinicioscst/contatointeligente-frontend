import type { Metadata } from "next";
import { Volkhov, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export const inter = Inter({ subsets: ["latin"] });
const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Contato Inteligente",
  description: "Todos os seus contatos organizados em um único lugar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${volkhov.className} bg-background-color text-font-color scroll-smooth`}
      >
        <Header />
        {children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
