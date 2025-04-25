import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const Metadata = {
  metadataBase: new URL("https://bet626game.cc"),
  keywords: [
    "Bet626, Bet626 game Download, Bet 626, betting game bet626,bet626 game apk",
  ],
  title: {
    default: "Bet626 Game – Play & Win Big Real Money at Top Online Paksitan ",
    template: "%s | Bet626",
  },
  description:
    "Join Bet626 Game and start winning real money today! Best online betting games for beginners. Play safe online Get free bonuses now and win big rewards.",

  author: "zeeshan",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    description: "best betting game app in pakitsna bet626",
    url: "https://bet626game.cc",
    image: "/path/to/og-image.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Create Next App",
    description: "Next.js app for building scalable applications",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://www.bet626game.cc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="HsuT4LGCZdr0GPavpzObPvONKPMLVmQZnPVui4hoNf8"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#00444a] `}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
