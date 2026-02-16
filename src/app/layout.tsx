import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.png" },
  title: "PLAID — Product Led AI Development",
  description:
    "An agent skill that guides founders from idea to buildable spec through a structured conversation.",
  openGraph: {
    title: "PLAID — Product Led AI Development",
    description:
      "An agent skill that guides founders from idea to buildable spec through a structured conversation.",
    siteName: "PLAID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@chris_bgp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
