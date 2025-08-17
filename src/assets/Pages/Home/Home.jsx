import React, { useEffect, useState } from "react";
import Banner from "./Slider/Banner";
import HowItWorks from "../../Components/HowItWorks";
import SuccessCounter from "../../Components/SuccessCounter";
import SuccessStories from "../../Components/SuccessStories";
import PremiumCards from "./PremiumCards/PremiumCards";
import TestimonialsSection from "../../Components/Testimonial";
import ResourcesSection from "../../Components/ResourcesSection";
import WhyChooseUs from "../../Components/WhyChooseUs";
import MembershipPlans from "../../Components/ThemeToggle/MemberShipCards";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        <PremiumCards></PremiumCards>
        <TestimonialsSection></TestimonialsSection>
        <ResourcesSection></ResourcesSection>
        <MembershipPlans></MembershipPlans>
        <HowItWorks></HowItWorks>
        {/* <WhyChooseUs></WhyChooseUs> */}
        <SuccessCounter></SuccessCounter>
        <SuccessStories></SuccessStories>
      </div>
    </div>
  );
};

export default Home;
