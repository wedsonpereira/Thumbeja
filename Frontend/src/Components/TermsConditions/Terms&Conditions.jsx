import React from 'react';
import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import privacy from "../../assets/JsonData/privacy.jsx";
import "./terms.css"
import SEO from "../SEO/SEO.jsx";

const TermsConditions = () => {
    return (
        <>
            <SEO
                title="Privacy Policy & Terms - Thumbeja Publicity"
                description="Read Thumbeja Publicity privacy policy and terms and conditions for our digital marketing and branding services."
                keywords="privacy policy, terms and conditions, Thumbeja Publicity policies"
                url="https://thumbeja.com/terms-conditions-thumbeja-publicity"
            />
            <Header />
            <div className="w-full bg-[#ffffff] py-12 flex justify-center mt-20">
                <div className="w-[92%] md:w-[75%] lg:w-[65%] bg-white shadow-lg rounded-xl p-6 md:p-10 border border-[#e5e7eb]">

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                        Privacy Policy & Terms and Conditions
                    </h1>

                    {/* Intro */}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
                        Thumbeja Publicity is committed to protecting your personal information and ensuring transparency in how we operate.
                        By accessing our services, website, or engaging with our publicity and marketing campaigns, you agree to the terms outlined below.
                    </p>

                    {/* Content */}
                    <div className="space-y-6">
                        {privacy.map((item, index) => (
                            <div key={index}>
                                {Object.entries(item.PrivacyPolicy).map(([section, content], i) => (
                                    <div key={i} className="bg-[#f8fafc] border border-[#dbeafe] rounded-lg p-5 mt-3">

                                        {/* Section Heading */}
                                        <h2 className="text-lg font-semibold text-[#001845] mb-3">
                                            {section.replace(/_/g, " ")}
                                        </h2>

                                        {/* Content */}
                                        {Array.isArray(content) ? (
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                                {content.map((point, j) => (
                                                    <li key={j}>{point}</li>
                                                ))}
                                            </ul>
                                        ) : typeof content === "object" ? (
                                            <div className="space-y-3">
                                                {Object.entries(content).map(([subKey, subVal], k) => (
                                                    <div key={k} className="ml-2">
                                                        <h3 className="font-medium text-[#003566] mb-1">
                                                            {subKey.replace(/_/g, " ")}
                                                        </h3>

                                                        {Array.isArray(subVal) ? (
                                                            <ul className="list-disc list-inside ml-4 space-y-1 text-sm text-gray-700">
                                                                {subVal.map((point, l) => (
                                                                    <li key={l}>{point}</li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-sm text-gray-700">{subVal}</p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-sm text-gray-700">{content}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer/>
        </>

    );
};

export default TermsConditions;
