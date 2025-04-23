import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const HowToPlay = () => {
  return (
    <section className="mt-10 w-full">
      <div className="max-w-7xl mx-auto text-start px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#a0d1d5]  text-center mb-12">
          How to Play Betting Games on Bet626
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-[#ffffffc5]">
          <li>
            <strong>Sign Up</strong>: Create an account on Bet626’s website or{" "}
            <em>betting game apps</em> in minutes.
          </li>
          <li>
            <strong>Deposit Funds</strong>: Use secure payment options like
            cards or e-wallets for <em>safe betting games</em>.
          </li>
          <li>
            <strong>Choose a Game</strong>: Explore sports betting, slots, or
            live casino tables and place your bet.
          </li>
          <li>
            <strong>Claim Bonuses</strong>: Activate{" "}
            <em>betting game bonuses</em> to enhance your play.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HowToPlay;
