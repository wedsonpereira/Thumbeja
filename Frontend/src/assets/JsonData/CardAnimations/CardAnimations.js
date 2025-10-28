// src/assets/JsonData/CardAnimations/CardAnimations.js
// Corrected relative paths: From src/assets/JsonData/CardAnimations/ -> ../../Images/
import VisitingCard1Img from "../../Images/VisitingCard1.png"// Front for card 1
import VisitingCard2Img from "../../Images/VisitingCard2.png"; // Back for card 1 / Front for card 2
import JayeshaPackersFrontImg from "../../Images/JayeshaPackers.png";
import JayeshaPackersBackImg from "../../Images/JayeshaPackers2.png";
import ThumbejaPublicityPamphletPage1img from "../../Images/ThumbejaPublicityPamphletPage1.png";
import ThumbejaPublicityPamphletPage2img from "../../Images/ThumbejaPublicityPamphletPage2.png";


// If you have more images, add them here, e.g.:
// import VisitingCard3Img from "../../Images/VisitingCard3.png"; // Back for card 2

const cardAnimations = [
    {
        id: 1,
        frontImage: VisitingCard1Img,
        backImage: VisitingCard2Img,
        altFront: "Front side of visiting card 1",
        altBack: "Back side of visiting card 1",
        animation: {
            type: 'flip',
            duration: 1500,
            easing: 'ease-in-out',
            delay: 0,
            repeat: false,
            direction: 'normal'
        },
        type:"card",
    },
    {
        id: 2,
        frontImage: JayeshaPackersFrontImg, // Reuse for demo; replace with new import if available
        backImage: JayeshaPackersBackImg, // Reuse for demo
        altFront: "Front side of visiting card 2",
        altBack: "Back side of visiting card 2",
        animation: {
            type: 'fade',
            duration: 800,
            easing: 'ease-out',
            delay: 200,
            repeat: true,
            direction: 'alternate'
        },
        type:"card",
    },
    {
        id: 3,
        frontImage: ThumbejaPublicityPamphletPage1img, // Reuse for demo; replace with new import if available
        backImage: ThumbejaPublicityPamphletPage2img, // Reuse for demo
        altFront: "Front side of visiting card 2",
        altBack: "Back side of visiting card 2",
        animation: {
            type: 'fade',
            duration: 800,
            easing: 'ease-out',
            delay: 200,
            repeat: true,
            direction: 'alternate'
        },
        type:"poster",
    }

    // Add more objects here as needed
]


export default cardAnimations;