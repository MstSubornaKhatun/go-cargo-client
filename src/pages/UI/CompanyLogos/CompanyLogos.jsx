import React from 'react';
import Marquee from 'react-fast-marquee';
import companyLogo1 from '../../../assets/brands/amazon.png'
import companyLogo2 from '../../../assets/brands/amazon_vector.png'
import companyLogo3 from '../../../assets/brands/casio.png'
import companyLogo4 from '../../../assets/brands/moonstar.png'
import companyLogo5 from '../../../assets/brands/randstad.png'
import companyLogo6 from '../../../assets/brands/start-people 1.png'
import companyLogo7 from '../../../assets/brands/start.png'

const CompanyLogos = () => {
    return (
        <div>
                <div className="py-16 bg-base-100">
      <div className="text-center mb-10">
        
        <div className="text-center mb-18">
 <h2 className="text-3xl md:text-4xl font-bold">
            We've helped thousands of <span className="text-primary">sales teams</span>
          </h2>
             </div>
      </div>

      <Marquee 
        speed={50} 
        gradient={false} 
        pauseOnHover={true}
        direction="left"
      >
        <div className="flex gap-16 items-center">
          <img src={companyLogo1} className="" alt="logo" />
          <img src={companyLogo2} className="" alt="logo" />
          <img src={companyLogo3} className="" alt="logo" />
          <img src={companyLogo4} className="" alt="logo" />
          <img src={companyLogo5} className="" alt="logo" />
          <img src={companyLogo6} className="" alt="logo" />
          <img src={companyLogo7} className="" alt="logo" />
        </div>
      </Marquee>
</div>
        </div>
    );
};

export default CompanyLogos;