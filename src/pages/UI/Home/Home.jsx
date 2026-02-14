import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import CompanyLogos from '../CompanyLogos/CompanyLogos';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <CompanyLogos/>
        </div>
    );
};

export default Home;