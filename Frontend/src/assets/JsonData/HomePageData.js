import Business1 from "../Images/BusinessImages/Business1.jpg"
import Business2 from "../Images/BusinessImages/Business2.jpg"
import Business3 from "../Images/BusinessImages/Business3.jpg"
import Business4 from "../Images/BusinessImages/Business4.jpg"
import Business5 from "../Images/BusinessImages/Business5.jpg"
import img1 from "../CarousalImages/img1.png"
import img2 from "../CarousalImages/img2.png"
import img3 from "../CarousalImages/img3.png"
import img4 from "../CarousalImages/img4.png"
import img5 from "../CarousalImages/img5.png"
import img6 from "../CarousalImages/img6.png"
import img7 from "../CarousalImages/img7.png"
import {faDiceOne,faDiceTwo,faDiceThree} from "@fortawesome/free-solid-svg-icons";

const homePageData=[
    {
        id: 1,
        title: "Website & Software Development(SEO)",
        subtitle: "We help your business appear at the top of search results using targeted Google Ads and SEO strategies. Our goal is to increase visibility, drive quality traffic, and boost conversions.",
        services:[
            "Targeted Google Ads campaigns",
            "SEO strategies for top search rankings",
            "Visibility enhancement",
            "Quality traffic generation",
            "Conversion optimization",
        ]
    },

    {
        id: 2,
        title: "Digital Marketing",
        subtitle: "Expand your reach through powerful social media campaigns tailored to your audience. We create engaging content and run ads that attract followers, build brand trust, and generate leads.",
        services:[
            "Engaging content creation",
            "Targeted ad campaigns on Facebook, Instagram, LinkedIn, Pinterest, and Meta",
            "Follower attraction",
            "Brand trust building",
            "Lead generation",
        ]
    },



    {
        id: 3,
        title: "Social Media Marketing",
        subtitle: "Stay connected with your customers through smart automation. We set up WhatsApp Business APIs, bulk SMS, and email campaigns to engage audiences instantly and build strong customer relationships.",
        services:[
            "WhatsApp Business API setup",
            "Bulk SMS campaigns",
            "Email marketing automation",
            "Chatbot Marketing",
            "Customer relationship building",
        ]
    },

    {
        id: 4,
        title: "Customer Relationship Management",
        subtitle: "Track and manage every customer interaction with ease. Our CRM solutions provide deep insights, help you understand customer behavior, and measure the performance of your marketing campaigns.",
        services:[
            "Customer interaction tracking",
            "Deep insights provision",
            "Customer behavior analysis",
            "Marketing campaign performance measurement",
        ]
    },

    {
        id: 5,
        title: "Printing & Branding Solutions",
        subtitle: "Premium printing and branding solutions ensuring your business makes a lasting impression both online and offline.",
        services:[
            "Corporate Stationery: visiting cards, letterheads, envelopes, billbooks",
            "Marketing Collaterals: pamphlets, brochures, posters, catalogues, company profiles, danglers, sticker sheet labels",
            "Event & Personal Branding: invitation cards, ID cards, badges, button badges",
            "Merchandise Printing: custom mugs, t-shirts, mementos",
            "Signage & Display: durable name plates, signage boards",
        ]
    },
]

const homepageData2 = [
    {
        id: 1,
        title: "Web Design & Development",
        description:"Custom responsive websites and apps.",
    },
    {
        id: 2,
        title: "Digital marketing",
        description:"Targeted campaigns to boost engagement.",
    },
    {
        id: 3,
        title: "Search Engine Optimization",
        description:"Improve visibility and drive traffic.",
    },
    {
        id: 4,
        title: "Graphic and Poster design",
        description:"Creative visuals for brand impact.",
    },



]

const homepageData3 = [
    {
        id: 1,
        title: "Expertise teams",
        description:" Our seasoned professionals bring deep industry knowledge and innovative strategies to every project.",
        src:Business1
    },
    {
        id: 2,
        title: "Tailored Solutions",
        description:" We craft customized strategies that align perfectly with your unique business goals and challenges.",
        src:Business2
    },
    {
        id: 3,
        title: "Client Centric Approach",
        description:" Your success is our priority, with open communication and collaborative partnerships at the core.",
        src:Business3
    },
    {
        id: 4,
        title: "24/7 Customer Support",
        description:" Round-the-clock assistance ensures your concerns are addressed promptly, whenever they arise.",
        src:Business4
    },
    {
        id: 5,
        title: "High Returns on investment",
        description:" Proven results deliver measurable ROI through efficient, data-driven marketing initiatives.",
        src:Business5
    },
]

const homepageData4 = [
    {
        id: 1,
        icon:faDiceOne,
        title: "Defining Objectives and Audience",
        description:" We start by setting clear, measurable goals for your digital marketing efforts, such as increasing brand awareness or driving conversions. We conduct thorough audience research to understand demographics, behaviors, and preferences, ensuring your strategy targets the right people effectively.",
    },
    {
        id: 2,
        icon:faDiceTwo,
        title: "Developing Content and Campaigns",
        description:" We create compelling, value-driven content tailored to your audience across chosen channels like social media, email, and SEO. We launch integrated campaigns that leverage automation tools and analytics to maximize reach and engagement while maintaining brand consistency.",
    },
    {
        id: 3,
        icon:faDiceThree,
        title: "Analyzing and Optimizing Performance",
        description:"We track key metrics using tools like Google Analytics to evaluate campaign success against your objectives. We identify what's working and what isn't, then iterate by refining strategies, reallocating budgets, and testing new approaches for continuous improvement.",
    },
]

const homeherodata = [
    {
        id: 1,
        text: 'Printing and Branding Solutions',
        description:'Comprehensive printing services including custom branding materials like logos, banners, and promotional items to elevate your business identity.',
        src:img1
    },
    {
        id: 2,
        text: 'Website and Software Development(SEO)',
        description:'Full-stack web and software development with integrated SEO optimization to build responsive sites that rank high and drive organic traffic.',
        src:img2
    },
    {
        id: 3,
        text: 'Social Media Marketing',
        description:'Strategic social media campaigns to grow your audience, boost engagement, and convert followers into loyal customers across platforms.',
        src:img3
    },
    {
        id: 4,
        text: 'Customer Relationship Management',
        description:'Streamlined CRM tools to manage leads, track interactions, and nurture customer relationships for improved retention and sales growth.',
        src:img4
    },
    {
        id: 5,
        text: 'Digital Marketing',
        description:'End-to-end digital strategies encompassing PPC, email marketing, and content creation to maximize online visibility and ROI.',
        src:img5
    },
    {
        id: 6,
        text: 'Outdoor Marketing',
        description:'Promoting products via billboards, posters, and signage in public spaces for visibility.',
        src:img6
    },
    {
        id: 7,
        text: 'Event Management',
        description:'Planning, organizing, and executing events from concept to evaluation for satisfaction.',
        src:img7
    },
]




export {homePageData,homepageData2,homepageData3,homepageData4,homeherodata};