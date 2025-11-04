import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import {Routes, Route} from "react-router-dom";
import Services from "./Components/Services/Services.jsx";
import Career from "./Components/Career/Career.jsx";
import TermsConditions from "./Components/TermsConditions/Terms&Conditions.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import DigitalMarketing from "./Components/Services/DigitalMarketing/DigitalMarketing.jsx";
import Printing from "./Components/Services/Printing/Printing.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import {snowflakeCursor} from "./Components/MouseHover/SnowFlake.js";
import GraphicDesign from "./Components/Services/GraphicDesign/GraphicDesign.jsx";
import CustomerRelationshipManagement
    from "./Components/Services/CustomerRelationshipManagement/CustomerRelationshipManagement.jsx";
import OutdoorAdvertising from "./Components/Services/OutdoorAdvertising/OutdoorAdvertising.jsx";
import SocialMediaHandling from "./Components/Services/SocialMediaHandling/SocialMediaHandling.jsx";
import SocialMediaMarketing from "./Components/Services/SocialMediaMarketing/SocialMediaMarketing.jsx";
import VideoMarketing from "./Components/Services/VideoMarketing/VideoMarketing.jsx";
import WhatsappChatbot from "./Components/Services/Whatsapp & Chatbot/WhatsappChatbot.jsx";
import WebsiteSoftwareDevelopment from "./Components/Services/Website Software Development/WebsiteSoftwareDevelopment.jsx";


function App() {
    snowflakeCursor(document.body);

    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact-thumbeja-publicity" element={<Contact/>}/>
                <Route path="/services-thumbeja-publicity" element={<Services/>}/>
                <Route path="/career-thumbeja-publicity" element={<Career/>}/>
                <Route path="/terms-conditions-thumbeja-publicity" element={<TermsConditions/>}/>
                <Route path="/services/digital-marketing-mangalore" element={<DigitalMarketing/>}/>
                <Route path="/services/printing-services-mangalore" element={<Printing/>}/>
                <Route path="/services/social-media-marketing-mangalore" element={<SocialMediaMarketing/>}/>
                <Route path="/services/video-marketing-mangalore" element={<VideoMarketing/>}/>
                <Route path="/services/whatsapp-chatbot-services" element={<WhatsappChatbot/>}/>
                <Route path="/services/website-development-mangalore" element={<WebsiteSoftwareDevelopment/>}/>
                <Route path="/services/crm-solutions-mangalore" element={<CustomerRelationshipManagement/>}/>
                <Route path="/services/outdoor-advertising-mangalore" element={<OutdoorAdvertising/>}/>
                <Route path="/services/social-media-handling-mangalore" element={<SocialMediaHandling/>}/>
                <Route path="/services/graphic-design-mangalore" element={<GraphicDesign/>}/>


                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
