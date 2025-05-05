import Image from "next/image";
import BetBanner from "./Images/bannerbet.webp";
import Features from "./components/Features";
import Carousel from "./components/Caurosel";
import Conclusion from "./components/Conclusion";
import FAQs from "./components/Faqs";
import { Download, DownloadIcon } from "lucide-react";
import Rules from "./components/Rules";

import HowToPlay from "./components/HowToPlay";
import Games from "./components/Games";
import EarnMoney from "./components/EarnMoney";
import Link from "next/link";
import MetadataSection from "./components/MetadataSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-5 ">
      <section className="">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 p-5">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl text-[#a0d1d5] md:text-5xl leading-tight mb-6">
              BET626 Game APK Download New Earning Money App 2025!
            </h1>
            <p className="text-lg text-[#ffffffc5]">
              Looking for excitement and the chance to win real money from home?
              bet626 Game has quickly become Pakistan favorite online casino
              platform. With its user-friendly interface and variety of card
              games, BET 626 APK offers entertainment and winning opportunities
              for both beginners and experienced players.
            </p>
            <a
              href="http://www.bet626.com/?r=oip2657"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-md transition mt-5 gap-2 w-full"
            >
              DOWNLOAD <DownloadIcon />
            </a>
          </div>

          <div className=" flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={BetBanner}
                alt="BET626 "
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <MetadataSection />
      </section>
      <section className="text-[#ffffffc5] max-w-7xl mx-auto">
        <div className=" flex flex-col items-center justify-center text-center mt-6 space-y-4  px-6">
          <h2 className="text-3xl text-[#a0d1d5] font-semibold md:text-4xl leading-13">
            What Is Bet626 Game?
          </h2>
          <p className="md:text-xl ">
            <Link href={"https://bet626game.cc/"} className="m-1">
              Bet626 apk
            </Link>{" "}
            Game is an online casino platform that gaining popularity in
            Pakistan digital gaming scene. it is a mobile application available
            for both Android and iOS devices that offers users the opportunity
            to play various card games and casino-style entertainment.The
            platform allows users to enjoy casino gaming experiences from their
            mobile devices, making it accessible for those who enjoy this type
            of entertainment without needing to visit physical locations.
            Players can download the BET626 APK directly to their smartphones or
            tablets to access the gaming platform.
          </p>
        </div>
      </section>
      <Features />
      <Carousel />
      <HowToPlay />
      <Rules />
      <Games />
      <EarnMoney />
      <FAQs />
      <Conclusion />
    </main>
  );
}
