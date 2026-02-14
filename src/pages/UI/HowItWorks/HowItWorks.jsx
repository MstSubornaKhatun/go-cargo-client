import React from "react";
import { FaTruckPickup, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const steps = [
  {
    icon: <FaTruckPickup className="text-4xl text-primary" />,
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-primary" />,
    title: "Cash On Delivery",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaWarehouse className="text-4xl text-primary" />,
    title: "Delivery Hub",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaBuilding className="text-4xl text-primary" />,
    title: "Booking SME & Corporate",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mt-4 text-base-content/70">
            Simple steps to deliver your parcel quickly and securely.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 border border-base-200"
            >
              <div className="card-body items-center text-center">
                <div className="mb-4">
                  {step.icon}
                </div>

                <h3 className="card-title text-base-content text-lg">
                  {step.title}
                </h3>

                <p className="text-base-content/70 text-sm">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
