import React from "react";

const Rules = () => {
  return (
    <section className=" mt-10 w-full">
      <div className="max-w-7xl mx-auto text-start px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#a0d1d5]  text-center mb-12">
          Bet626 Game Rules: Play Fair, Win Big
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-[#a0d1d5] mb-4">
              General Rules
            </h3>
            <ul className="list-disc list-inside text-[#ffffffc5] space-y-2">
              <li>
                <strong>Age Restriction</strong>: Players must be <em>19+</em>
                to enjoy <strong>online betting games</strong>.
              </li>
              <li>
                <strong>One Account</strong>: Use only one account for
                <em>safe betting games</em> to ensure fairness.
              </li>
              <li>
                <strong>Fair Play</strong>: No cheating or exploiting glitches
                in <em>betting game apps</em>.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#a0d1d5] mb-4">
              Game-Specific Rules
            </h3>
            <ul className="list-disc list-inside text-[#ffffffc5] space-y-2">
              <li>
                <strong>Sports Betting</strong>: Wager on outcomes (e.g., team
                wins) with clear odds in <em>mobile betting games</em>.
              </li>
              <li>
                <strong>Slots</strong>: Spin reels using random number
                generators; payouts vary by game.
              </li>
              <li>
                <strong>Live Casino</strong>: Follow standard rules (e.g.,
                blackjack, poker) with live dealers.
              </li>
            </ul>
          </div>
          <p className="text-[#ffffffc5]">
            Bet626 is <em>fully licensed</em>, ensuring all
            <strong className="m-1">safe betting games</strong> are fair. Check
            our
            <a href="/" className="text-green-500 hover:underline m-1">
              terms
            </a>
            for details. Ready to play by the rules?{" "}
            <strong>Join Bet626 now!</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rules;
