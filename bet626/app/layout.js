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

export const metadata = {
  metadataBase: new URL("https://bet626game.cc"),
  keywords: ["Bet626, Bet626 game Download, Bet626, bet626,bet626 game apk"],
  title: {
    default: "BET626 Game Download Pakistan (New Betting Apk) 2025",
    template: "%s | Bet626",
  },
  description:
    "Now a days bet626 game is the most famous betting game app in Pakistan. Earn big with small amount of money. ",
  author: "zeeshan",
  openGraph: {
    description: "best betting game app in pakitsna bet626",
    url: "https://bet626game.cc",
    image: "./Images/626bet.webp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    description: "Bet626 Game Download and start winning real money today",
    image: "/path/to/twitter-image.jpg",
  },
  alternates: {
    canonical: "https://www.bet626game.cc",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
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
