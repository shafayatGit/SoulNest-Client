import React from 'react';
import Banner from './Slider/Banner';
import HowItWorks from '../../Components/HowItWorks';
import SuccessCounter from '../../Components/SuccessCounter';
import SuccessStories from '../../Components/SuccessStories';
import PremiumCards from './PremiumCards/PremiumCards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumCards></PremiumCards>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;