import React from 'react';
import './NotifyBar.css'
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const NotifyBar = ({}) => {



    return (
        <div className={"tp-notify-bar"} >
            <span className={"p-1"}>{content}</span>
            <FontAwesomeIcon icon={faBell} size="lg"/>
        </div>
    );
};

export default NotifyBar;