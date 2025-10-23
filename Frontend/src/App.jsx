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



function App() {
    snowflakeCursor(document.body);

    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/info" element={<TermsConditions/>}/>
                <Route path="/services/digitalmarketing" element={<DigitalMarketing/>}/>
                <Route path="/services/printing" element={<Printing/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
