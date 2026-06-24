import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/app/context/CartContext";

export const metadata: Metadata = {
  title: "Cafe San",
  description: "طعم واقعی قهوه و دسرهای جادویی در کافه سان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}