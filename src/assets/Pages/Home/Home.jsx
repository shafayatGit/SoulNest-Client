import React from 'react';
import Banner from './Slider/Banner';
import HowItWorks from '../../Components/HowItWorks';
import SuccessCounter from '../../Components/SuccessCounter';
import SuccessStories from '../../Components/SuccessStories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;