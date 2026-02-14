import React from "react";
import location from "../../../assets/img/location-merchant.png";
import bgImage from "../../../assets/img/be-a-merchant-bg.png";

const BeMerchant = () => {
  return (
    <div

    data-aos="flip-left"

      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
      className="bg-base-200 rounded-3xl p-10 lg:p-20"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        
        {/* Image */}
        <img
          src={location}
          alt="Merchant Location"
          className="w-full max-w-sm rounded-xl shadow-2xl"
        />

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>

          <p className="py-6 text-gray-600">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary rounded-full px-6">
              Become A Merchant
            </button>

            <button className="btn btn-outline rounded-full px-6">
              Earn with Profast Courier
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BeMerchant;
