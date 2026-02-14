import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../OurServices/OurServices';
import CompanyLogos from '../CompanyLogos/CompanyLogos';
import FeatureHighlights from '../FeatureHighlights/FeatureHighlights';
import BeMerchant from '../BeMerchant/BeMerchant';
import Testimonials from '../Testimonials/Testimonials';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <OurServices/>
            <CompanyLogos/>
            <FeatureHighlights/>
            <BeMerchant/>
            <Testimonials/>
            <FAQ/>
        </div>
    );
};

export default Home;