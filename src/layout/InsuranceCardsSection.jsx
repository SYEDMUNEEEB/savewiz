import React from "react";
import colors from "../config/colors";
import { FaHome, FaCar, FaBriefcase, FaHeart } from 'react-icons/fa';
import { motion } from "framer-motion";

const insuranceCards = [
    {
        id: 1,
        title: "Home Insurance",
        description: "Protect your home with comprehensive coverage tailored to your needs.",
        icon: <FaHome className="text-4xl" />,
        color: "bg-blue-100 text-blue-800"
    },
    {
        id: 2,
        title: "Auto Insurance",
        description: "Protect your car with comprehensive coverage tailored to your needs.",        
        icon: <FaCar className="text-4xl" />,
        color: "bg-green-100 text-green-800"
    },
    {
        id: 3,
        title: "Life Insurance",
        description: "Protect your life with comprehensive coverage tailored to your needs.",
        icon: <FaHeart className="text-4xl" />,
        color: "bg-red-100 text-red-800"
    },
    {
        id: 4,
        title: "Business Insurance",
        description: "Protect your business with comprehensive coverage tailored to your needs.",
        icon: <FaBriefcase className="text-4xl" />,
        color: "bg-purple-100 text-purple-800"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const InsuranceCardsSection = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {insuranceCards.map((card, idx) => (
                    <motion.div
                        key={card.id}
                        className="relative cursor-pointer bg-white rounded-2xl shadow-lg p-8 pt-10 flex flex-col min-h-[270px] w-full overflow-hidden group"
                        variants={cardVariants}
                        whileHover={{ y: -5 }}
                    >
                        {/* Background overlay with slide-up animation */}
                        <div 
                            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500 ease-in-out z-10 rounded-2xl transform translate-y-full group-hover:translate-y-0"
                        />
                        
                        {/* Icon container */}
                        <motion.div
                            className="absolute -top-0 -left-0 w-24 h-24 z-20"
                            style={{
                                background: colors.primary,
                                borderTopLeftRadius: '1rem',
                                borderBottomRightRadius: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-white text-3xl">
                                {card.icon}
                            </div>
                        </motion.div>
                    
                        {/* Number indicator */}
                        <motion.span
                            className="absolute top-6 right-6 text-5xl font-bold text-gray-200 z-10 transition-colors duration-500 group-hover:text-white"
                            style={{ opacity: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {`0${idx + 1}`}
                        </motion.span>
                    
                        {/* Content */}
                        <div className="mt-8 z-20 relative">
                            <motion.h3 
                                className="text-xl font-bold text-gray-900 mb-2 mt-8 group-hover:text-white transition-colors duration-500"
                                whileHover={{ x: 3 }}
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p 
                                className="text-gray-500 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500"
                                whileHover={{ x: 3 }}
                            >
                                {card.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

export default InsuranceCardsSection;