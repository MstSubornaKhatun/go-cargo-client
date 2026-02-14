import React from "react";
import { Link } from "react-router";
import {
  FaShippingFast,
  FaGlobeAsia,
  FaBoxes,
  FaMoneyBillWave,
  FaBuilding,
  FaUndoAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShippingFast />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in major cities. Express delivery available in Dhaka within 4–6 hours.",
    path: "/service/express",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district within 48–72 hours.",
    path: "/service/nationwide",
  },
  {
    icon: <FaBoxes />,
    title: "Fulfillment Solution",
    description:
      "Inventory management, packaging and online order processing support.",
    path: "/service/fulfillment",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with product safety.",
    path: "/service/cod",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate Service",
    description:
      "Customized corporate services including warehouse and logistics support.",
    path: "/service/corporate",
  },
  {
    icon: <FaUndoAlt />,
    title: "Parcel Return",
    description:
      "Reverse logistics for easy return and exchange facility.",
    path: "/service/return",
  },
];

const OurServices = () => {
  return (
    <div className="bg-base-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-base-content/70">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="group rounded-xl border border-base-200 p-8 
                         transition duration-300 shadow-sm
                         hover:bg-primary hover:text-white hover:shadow-xl hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center 
                              rounded-full bg-primary/10 text-primary text-2xl mb-6 
                              transition duration-300
                              group-hover:bg-white group-hover:text-primary">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm opacity-80 group-hover:opacity-100">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurServices;
