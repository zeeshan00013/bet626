import Image from "next/image";
import profile from "../../Images/profileeee.PNG";
import React from "react";

const Bet626ProfileComponent = () => {
  return (
    <section className="p-6 bg-white rounded-2xl shadow-lg max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        User Profile Overview - bet626
      </h1>
      <div>
        <Image src={profile} alt="bet626 profile" loading="lazy" />
      </div>
    </section>
  );
};

export default Bet626ProfileComponent;
