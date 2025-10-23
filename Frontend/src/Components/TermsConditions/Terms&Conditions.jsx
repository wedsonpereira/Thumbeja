import React from 'react';
import Header from "../header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import privacy from "/src/assets/JsonData/privacy.jsx";
import "./terms.css"

const TermsConditions = () => {
    return (
        <>
            <Header />
            <div className={"terms-conditions-main pt-10 pb-12 flex items-center flex-col gap-1 h-max bg-[#fefdf7]"}>
                <div className={"w-[90%] flex flex-col gap-2 items-start m-auto"}>
                    <div className={"text-3xl text-[#000213] font-semibold"}>
                        <span>Privacy Policy & Terms and Conditions</span>
                    </div>
                    <div className={"text-sm"}>
                        <p>
                            Thumbeja Publicity is committed to protecting your personal information and ensuring transparency in how we operate. By accessing our services, website, or engaging with our publicity and marketing campaigns, you agree to the terms outlined below.
                        </p>
                    </div>
                    <div className={"text-sm flex gap-2 p-1"}>
                        {privacy.map((item, index) => {
                            return (
                                <div key={index}>
                                    {/* Loop inside PrivacyPolicy object */}
                                    {Object.entries(item.PrivacyPolicy).map(([section, content], i) => (
                                        <div key={i} className="mb-6 p-1">
                                            <h2 className="text-sm font-bold mb-2">
                                                {section.replace(/_/g, " ")}
                                            </h2>

                                            {Array.isArray(content) ? (
                                                <ul className="list-disc list-inside p-1">
                                                    {content.map((point, j) => (
                                                        <li key={j}>{point}</li>
                                                    ))}
                                                </ul>
                                            ) : typeof content === "object" ? (
                                                Object.entries(content).map(([subKey, subVal], k) => (
                                                    <div key={k} className="ml-4 p-1 mb-2">
                                                        <h3 className="font-semibold">
                                                            {subKey.replace(/_/g, " ")}
                                                        </h3>
                                                        {Array.isArray(subVal) ? (
                                                            <ul className="list-disc list-inside ml-4 p-1">
                                                                {subVal.map((point, l) => (
                                                                    <li key={l}>{point}</li>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className={"m-0"}>{subVal}</p>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <p className={"m-0"}>{content}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
};

export default TermsConditions;