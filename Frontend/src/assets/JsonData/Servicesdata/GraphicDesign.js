import DasaraImg from "../../../assets/images/DasaraPoster.png";
import DiwaliPosterImg from "../../../assets/images/DiwaliPoster.png";
import GandhiJayanthiPosterImg from "../../../assets/images/GandhiJayanthiPoster.png";
import WorldDayPosterImg from "../../../assets/images/WorldDayPoster.png";
import SangamaPosterImg from "../../../assets/images/SangamaPoster.png";
import CongratulationsImg from "../../../assets/images/Congratulations.jpeg";
import EngineersDay1Img from "../../../assets/images/EngineersDay1.png";
import TeachersDay1Img from "../../../assets/images/TeachersDay1.png";
import EngineersDay2Img from "../../../assets/images/EngineersDay2.png";
import TeachersDay2Img from "../../../assets/images/TeachersDay2.png";
import AbsoluteRoyalTechnologiesImg from "../../../assets/images/AbsoluteRoyalTechnologies.png";
import DesignInteriorImg from "../../../assets/images/DesignInterior.jpeg";
import NativityImg from "../../../assets/images/Nativity.png";
import EidMiladImg1 from "../../../assets/images/EidMilad.png";
import EidMiladImg2 from "../../../assets/images/EidMilad2.png";

import KaravaliBizYatraImg from "../../../assets/images/KaravaliBizYatra.png";
import ThumbejaImg from "../../../assets/images/thunbejalogo.png";
import BlaqueInvitationImg from "../../../assets/images/BlaqueInvitation.png";
import NativityImg2 from "../../../assets/images/Nativity2.png";
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