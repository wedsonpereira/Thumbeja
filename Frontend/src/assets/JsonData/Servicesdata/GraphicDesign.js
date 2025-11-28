import DasaraImg from "../../Images/DasaraPoster.png";
import DiwaliPosterImg from "../../Images/DiwaliPoster.png";
import GandhiJayanthiPosterImg from "../../Images/GandhiJayanthiPoster.png";
import WorldDayPosterImg from "../../Images/WorldDayPoster.png";
import SangamaPosterImg from "../../Images/SangamaPoster.png";
import CongratulationsImg from "../../Images/Congratulations.jpeg";
import EngineersDay1Img from "../../Images/EngineersDay1.png";
import TeachersDay1Img from "../../Images/TeachersDay1.png";
import EngineersDay2Img from "../../Images/EngineersDay2.png";
import TeachersDay2Img from "../../Images/TeachersDay2.png";
import AbsoluteRoyalTechnologiesImg from "../../Images/AbsoluteRoyalTechnologies.png";
import DesignInteriorImg from "../../Images/DesignInterior.jpeg";
import NativityImg from "../../Images/Nativity.png";
import EidMiladImg1 from "../../Images/EidMilad.png";
import EidMiladImg2 from "../../Images/EidMilad2.png";

import KaravaliBizYatraImg from "../../Images/KaravaliBizYatra.png";
import ThumbejaImg from "../../Images/thunbejalogo.png";
import BlaqueInvitationImg from "../../Images/BlaqueInvitation.png";
import NativityImg2 from "../../Images/Nativity2.png";
const services4 = [
    'Posters',
    'Visiting Cards',
    'Pamphlets',
    'Greeting Cards',
    'Invitation Cards',
    'Banners',
    'Brochures',
    'Catalogues',
    'Letter Heads,Envelopes & Billbooks',
    'Mementos',
    'Name Plates',
    'Signage Boards'

];
const imageMap = [
    { src: DasaraImg, alt: 'Posters' },
    { src: DiwaliPosterImg, alt: 'Visiting Cards' },
    { src: GandhiJayanthiPosterImg, alt: 'Pamphlets' },
    { src: WorldDayPosterImg, alt: 'Greeting Cards' },
    { src: EngineersDay1Img, alt: 'Invitation Cards' },
    { src: TeachersDay1Img, alt: 'Banners' },
    { src: EngineersDay2Img, alt: 'Brochures' },
    { src: TeachersDay2Img, alt: 'Catalogues' },
    { src: NativityImg, alt: 'Letter Heads, Envelopes & Billbooks' },
    { src: EidMiladImg1, alt: 'Mementos' },
    { src: EidMiladImg2, alt: 'Name Plates' },
    { src: NativityImg2, alt: 'Signage Boards' },
    { src: AbsoluteRoyalTechnologiesImg, alt: 'Signage Boards' },
    { src: CongratulationsImg, alt: 'Signage Boards' },
    { src: DesignInteriorImg, alt: 'Signage Boards' },
    { src: SangamaPosterImg, alt: 'Signage Boards' }



];

const galleries = [];
for (let i = 0; i < imageMap.length; i += 4) {
    galleries.push(imageMap.slice(i, i + 4));
}

const logos=[
    { src: ThumbejaImg, alt: "Logo 1" },
    { src: BlaqueInvitationImg, alt: "Logo 2" },
    { src: KaravaliBizYatraImg, alt: "Logo 3" }
];

const logoGallery = [];
for (let i = 0; i < logos.length; i += 3) {
    logoGallery.push(logos.slice(i, i + 3));
}

export {services4,galleries,logoGallery};