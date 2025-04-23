import Image from "next/image";
import sports from "../Images/sportsbetting.png";
import slots from "../Images/slots.png";
import casino from "../Images/livecasino.png";

import React from "react";

const Games = () => {
  return (
    <section className="mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl text-[#a0d1d5] font-semibold md:text-4xl leading-13 text-center">
          Explore Bet626’s Exciting Online Betting Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6 ">
          <div className="bg-[#0a555c] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-[#a0d1d5] mb-4">
              Sports Betting
            </h3>
            <Image
              src={sports}
              alt="Sports betting on Bet626 Game"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <p className="text-[#ffffffc5]">
              Bet on soccer, NBA, and more with <em>mobile betting games</em>.
              Enjoy live odds and <strong>betting game bonuses</strong> for big
              wins.
            </p>
          </div>
          <div className="bg-[#0a555c] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-[#a0d1d5] mb-4">Slots</h3>
            <Image
              src={slots}
              alt="Vibrant slots on Bet626 Game"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <p className="text-[#ffffffc5]">
              Spin vibrant <em>online betting games</em> with huge payouts. Easy
              to play on <strong>betting game apps</strong>, perfect for
              beginners.
            </p>
          </div>
          <div className="bg-[#0a555c] p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold text-[#a0d1d5] mb-4">
              Live Casino
            </h3>
            <Image
              src={casino}
              alt="Live casino tables on Bet626 Game"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <p className="text-[#ffffffc5]">
              Play blackjack, poker, and more with live dealers. Enjoy{" "}
              <strong>safe betting games</strong> and real-time thrills.
            </p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">
          Ready to try these <em>online betting games</em>?{" "}
          <a href="/signup" className="text-green-500 hover:underline">
            Join Bet626 now!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Games;
