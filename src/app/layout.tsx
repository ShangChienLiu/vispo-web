import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vispo — AI Tutoring Platform",
  description:
    "The global AI tutoring platform where you learn alongside a creature that grows with you.",
  icons: {
    icon: "/icon.png?v=2",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Vispo — AI Tutoring Platform",
    description:
      "Learn alongside a creature that grows with you. Join the waitlist.",
    type: "website",
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
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
