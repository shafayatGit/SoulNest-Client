import React from 'react';
import Banner from './Slider/Banner';
import HowItWorks from '../../Components/HowItWorks';
import SuccessCounter from '../../Components/SuccessCounter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>
        </div>
    );
};

export default Home;