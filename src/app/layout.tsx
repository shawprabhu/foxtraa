import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/context/AuthProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import { leagueSpartan } from "@/lib/Fonts";


export const metadata: Metadata = {
  title: {
    default: "FoxTraa - Simplify Trading",
    template: "%s - FoxTraa",
  },
  description:
    "FoxTraa is the best forex trading website, offering real-time market data, powerful tools, expert insights, and reliable forex signals to boost your trading success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${leagueSpartan.variable} ${leagueSpartan.variable} antialiased dark `}
        >
          <GoogleTagManager gtmId="GTM-PFDLGNX4" />
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
