import { FaTruck, FaShieldAlt, FaHeadset } from "react-icons/fa";
import benefitImg1 from '../../../assets/benefits/benefit1.png'
import benefitImg2 from '../../../assets/benefits/benefit2.png'
import benefitImg3 from '../../../assets/benefits/benefit3.png'


const features = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    icon: <FaTruck />,
    image: benefitImg1,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    icon: <FaShieldAlt />,
    image: benefitImg2,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    icon: <FaHeadset />,
    image: benefitImg3,
  },
];

const FeatureHighlights = () => {
  return (
    <div className="py-16 bg-base-100 space-y-12">
             <div className="text-center mb-10">
 <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-primary">Choose Us</span>
          </h2>
             </div>
            
      {features.map((feature, index) => (
        <div
          key={feature.id}
          className={`hero bg-base-200 rounded-2xl shadow-lg px-6 py-10`}
        >
          <div
            className={`hero-content flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-10`}
          >
            {/* Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="max-w-sm w-full rounded-xl shadow-2xl"
            />

            {/* Text Content */}
            <div>
              <div className="text-4xl text-primary mb-4">
                {feature.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureHighlights;
