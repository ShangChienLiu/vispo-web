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
    icon: [
      { url: "/favicon.png?v=3", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32.png?v=3", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=3",
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
