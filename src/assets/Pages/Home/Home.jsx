import React, { useEffect, useState } from "react";
import Banner from "./Slider/Banner";
import HowItWorks from "../../Components/HowItWorks";
import SuccessCounter from "../../Components/SuccessCounter";
import SuccessStories from "../../Components/SuccessStories";
import PremiumCards from "./PremiumCards/PremiumCards";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => clearTimeout(timer); // Cleanup if unmounted
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className=" max-w-6xl mx-auto w-full h-dvh flex justify-center items-center">
          <div class="loader"></div>
        </div>
      ) : (
        <div>
          <Banner></Banner>
          <PremiumCards></PremiumCards>
          <HowItWorks></HowItWorks>
          <SuccessCounter></SuccessCounter>
          <SuccessStories></SuccessStories>
        </div>
      )}
    </div>
  );
};

export default Home;
