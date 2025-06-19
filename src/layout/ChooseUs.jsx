import React from "react";
import { FaHandshake, FaHeadset, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ChooseUs = () => {
  const features = [
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Expert Advice",
      description: "Our extensive network of partners enables us to find the ideal protection for your needs while keeping costs affordable. Your peace of mind is our priority.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHeadset className="text-4xl" />,
      title: "24/7 Support",
      description: "Our team service champions are here to help you navigate the complex world of insurance policies and find the best options for your needs.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Peace of Mind",
      description: "We understand that accidents and emergencies can happen at any time. That's why we offer 24/7 support to ensure that you always have access to the help you need.",
      color: "from-violet-500 to-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Save Wise</span> Insurance?
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three pillars of excellence that set us apart in the insurance industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-75 blur-md group-hover:opacity-100 transition-all duration-300`}></div>
              
              <div className="relative h-full bg-white p-8 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} opacity-10`}></div>
                
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 relative z-10`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;