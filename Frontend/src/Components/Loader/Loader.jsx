import React from 'react';
import './Loader.scss';
const Loader = () => {
    return (
        <div className={"my-custom-loader"}>
            <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
            </div>
            <div>
                <span className={"text-white"}>Loading...</span>
            </div>
        </div>
    );
};

export default Loader;