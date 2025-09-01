import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Echevensko Empresas",
  description: "La Magia de la Imaginación para organizaciones",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
