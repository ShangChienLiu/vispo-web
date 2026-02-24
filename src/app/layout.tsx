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
  metadataBase: new URL("https://vispo.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png?v=5", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32.png?v=5", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png?v=5",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Vispo — AI Tutoring Platform",
    description:
      "Learn alongside a creature that grows with you. Join the waitlist.",
    type: "website",
    url: "https://vispo.app",
    siteName: "Vispo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vispo — AI Tutoring Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vispo — AI Tutoring Platform",
    description:
      "Learn alongside a creature that grows with you. Join the waitlist.",
    images: ["/og-image.png"],
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
