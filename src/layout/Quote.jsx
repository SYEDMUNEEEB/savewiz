import React from "react";
import { FaShieldAlt, FaHandHoldingUsd, FaChartLine, FaQuoteLeft } from "react-icons/fa";
import Button from "../component/Button";
import quoteImg from "../assets/02.jpg";
import colors from "../config/colors";

const Quote = () => {
    const cards = [
        {
            icon: <FaShieldAlt className="text-xl" />,
            title: "Comprehensive Protection",
            description: "Tailored coverage for your needs",
            bg: colors.primary,
        },
        {
            icon: <FaHandHoldingUsd className="text-xl" />,
            title: "No Hidden Fees",
            description: "Transparent pricing always",
            bg: colors.secondary,
        },
        {
            icon: <FaChartLine className="text-xl" />,
            title: "Best Rates",
            description: "Competitive market prices",
            bg: "#4F46E5",
        },
    ];

    return (
        <section className="w-full py-12 xs:py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 xs:mb-12 sm:mb-16">
                    <span className="inline-flex items-center px-3 py-1.5 xs:px-4 xs:py-2 rounded-full bg-[#AF1F37]/10 text-[#AF1F37] text-xs xs:text-sm font-medium mb-3 xs:mb-4">
                        <FaQuoteLeft className="mr-1.5 xs:mr-2 text-xs xs:text-sm" /> GET STARTED
                    </span>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 xs:mb-4">
                        Get Your <span className="text-[#AF1F37]">Free Quote</span> Today
                    </h2>
                    <div className="w-16 xs:w-20 sm:w-24 h-1 xs:h-1.5 bg-[#AF1F37] mx-auto mb-4 xs:mb-5 sm:mb-6"></div>
                    <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-3xl mx-auto">
                        Discover how much you can save with our personalized insurance solutions
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 xs:gap-10 sm:gap-12 lg:gap-16">
                    {/* Left Side: Content */}
                    <div className="flex-1 space-y-6 xs:space-y-8 w-full">
                        <div className="space-y-4 xs:space-y-6">
                            <p className="text-sm xs:text-base sm:text-lg text-justify leading-relaxed xs:leading-loose text-gray-700">
                                At SaveWise Insurance, we firmly believe that everyone should have access to the finest insurance policies out there. Simply click the "Get Quote" button to receive a free quote and discover how much you can save on your premiums. Your financial security is just a click away.



                                Our mission is to simplify the insurance process and connect you with the best options tailored to your unique needs. With SaveWise, you can explore, compare, and choose the right insurance solutions that give you peace of mind in every aspect of life



                                Whether it's safeguarding your family's future with life insurance, ensuring your health and well-being with medical coverage, protecting your financial assets, securing your vehicles, or providing comprehensive coverage for your business, we've got you covered.
                            </p>

                            {/* Cards Grid */}
                            <section className="w-full py-12 bg-gradient-to-br from-gray-50 to-gray-100">
                                <div className="max-w-2xl  w-max px-4 flex flex-col items-center  h-full">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                                        {cards.map((card, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl group"
                                            >
                                                <div
                                                    className="w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow"
                                                    style={{ background: card.bg }}
                                                >
                                                    {card.icon}
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                                                    {card.title}
                                                </h4>
                                                <p className="text-gray-500 text-base">{card.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="pt-2 xs:pt-4">
                            <Button className="w-full sm:w-auto transform hover:-translate-y-1 transition-transform duration-300 text-sm sm:text-base" />
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="flex-1 relative w-full mb-50 sm:mt-0">
                        <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <img
                                src={quoteImg}
                                alt="Insurance consultation"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#AF1F37]/20 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#6B3560]/10 rounded-full -z-10"></div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#AF1F37]/10 rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quote;