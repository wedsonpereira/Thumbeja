import React from 'react';

const TotalClients = ({data}) => {
    return (
        <div className={"tp-content h-max pb-10 pt-10 m-auto mt-0 mb-0 flex flex-col items-center justify-center gap-10"}>
            <div className={"tp-content-inner1 flex flex-col items-center w-[70%] gap-8 tp-content-header-1"}>
                <span className={"text-lg select-none home-animation-2"}>--------Who we are--------</span>
                <span className={"text-4xl text-center font-semibold select-none home-animation-2"}>Our team consists of digital marketing experts who are passionate about helping businesses succeed online.</span>
            </div>
            <div className={"flex flex-wrap w-[93%] gap-8 justify-center home-animation-2"}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}
                                 className="tp-card w-[25rem] h-max  p-5 relative flex justify-evenly flex-col ">
                                {/*<div className={"tp-card-in w-[90%] h-[90%] flex p-4 flex-col border-1"}>*/}
                                <span
                                    className="text-5xl font-bold h-[6rem] flex items-center text-[#583bac] select-none">{item.stats}{item.operators}</span>
                                <div className={"flex gap-4 flex-col  h-[10rem] justify-center"}>
                                    <p className="tp-home-card-content text-2xl select-none">{item.content}</p>
                                    <p className="tp-home-card-desc text-lg text-gray-500 select-none">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TotalClients;