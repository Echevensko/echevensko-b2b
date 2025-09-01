import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echevensko Empresas",
  description: "Charlas corporativas – La Magia de la Imaginación",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
