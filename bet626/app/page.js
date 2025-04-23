import Image from "next/image";
import BetBanner from "./Images/bannerbet.png";
import Features from "./components/Features";
import Carousel from "./components/Caurosel";
import Conclusion from "./components/Conclusion";
import FAQs from "./components/Faqs";
import { Download } from "lucide-react";
import Rules from "./components/Rules";

import HowToPlay from "./components/HowToPlay";
import Games from "./components/Games";
import EarnMoney from "./components/EarnMoney";

export default function Home() {
  const gameInfo = [
    { attribute: "Name", detail: "Bet626" },
    { attribute: "Version App", detail: "V1.1.14" },
    { attribute: "Developer", detail: "bet626game.cc" },
    { attribute: "Category", detail: "Casino/Card" },
    { attribute: "Available", detail: " Web, Android, iOS" },
    { attribute: "Language", detail: "Urdu/English" },
  ];

  return (
    <main className="flex flex-col items-center justify-center space-y-5 ">
      <section className="text-[#ffffffc5] max-w-7xl mx-auto">
        <div className="relative   text-center ">
          <div className=" px-6 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl text-[#a0d1d5] font-semibold md:text-4xl leading-13 mt-6">
              Bet626 Game APK – Download & Start Earning Real Money Today!
            </h1>
            <p className="md:text-lg">
              Dive into thrilling <em>online betting games</em> with Bet626, a
              trusted platform offering <strong>safe betting games</strong> for
              beginners and pros.
            </p>
            <a href="http://www.bet626.com/?r=oip2657">
              <button className="text-[#ffffff] rounded-lg py-2 px-3 bg-[#0a767f] mt-5 md:text-2xl flex items-center justify-center gap-2 cursor-pointer  w-full mx-auto">
                Download apk <Download />
              </button>
            </a>
          </div>
        </div>

        <div className="text-[#000000] flex flex-col items-center justify-center w-full mt-10">
          <h2
            id="game-info-heading"
            className="text-4xl text-center font-semibold mb-4 text-[#a0d1d5]"
          >
            Details of Bet626 Game
          </h2>
          <div className="overflow-x-auto ">
            <table className="min-w-auto md:min-w-3xl border border-green-100 text-center">
              <thead className="text-center">
                <tr className="bg-[#f8f8f8] py-3 text-center">
                  <th className="px-4 py-2 border-b">Attribute</th>
                  <th className="px-4 py-2 border-b">Details</th>
                </tr>
              </thead>
              <tbody>
                {gameInfo.map((item, index) => (
                  <tr key={index} className="hover:bg-green-300 text-white">
                    <td className="px-4 py-2 border-b">{item.attribute}</td>
                    <td className="px-4 py-2 border-b">{item.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 mt-6">
          <Image src={BetBanner} alt="bet626 banneer" width={800} />
        </div>
        <div className=" flex flex-col items-center justify-center text-center mt-6 space-y-4  px-6">
          <h2 className="text-3xl text-[#a0d1d5] font-semibold md:text-4xl leading-13">
            What Is Bet626 Game?
          </h2>
          <p className="md:text-xl ">
            Bet626 Game brings the thrill of online betting games to your
            fingertips. This trusted platform offers safe betting games like
            sports betting on soccer or NBA, vibrant slots, and live casino
            tables. Fully licensed, Bet626 ensures secure, fair play for all.
            Its betting game apps for Android and iOS let you wager anywhere,
            with an easy-to-use interface perfect for beginners. From online
            gambling games to live odds, Bet626 has it all. Want a fun, secure
            betting experience? Bet626 is your go-to destination. Start
            exploring its exciting games today!
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
