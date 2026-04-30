import reachmeoutImage from "../../Components/Home/Products/images/reachmeout.webp";
import hrmsImage from "../../Components/Home/Products/images/hrms.webp";
import graphicDesignImage from "../../Components/Home/Products/images/graphicdesign.webp";
import noorilmImage from "../../Components/Home/Products/images/norlim.webp";
import i3MarketingImage from "../../Components/Home/Products/images/i3marketing.webp";
import justMessageImage from "../../Components/Home/Products/images/justmessage.webp";
import companionBookImage from "../../Components/Home/Products/images/companion.webp";
import reachmeIcon from "../../Components/Home/Products/icons/reachme.svg";
import hrmsIcon from "../../Components/Home/Products/icons/hrms.svg";
import treeIcon from "../../Components/Home/Products/icons/tree.svg";
import ourfamily from "../../Components/Home/Products/images/ourfamily.webp"

const productsData = [
    {
        id: 1,
        initials: "DC",
        title: "Digital Card",
        description: "Create and share your digital business card & Restaurant menu effortlessly. Modern networking made simple with instant sharing capabilities.",
        image: reachmeoutImage,
        icon: reachmeIcon,
        rating: "4.9",
        totalUsers: "12K+ users",
        link: "https://reachmeout.co.in",
        type: "external",
        colorClass: "bg-blue-500",
        shadowClass: "shadow-blue-100",
        textClass: "text-blue-600",
        hoverTextClass: "hover:text-blue-700"
    },
    {
        id: 2,
        initials: "HR",
        title: "HRMS Application",
        description: "Complete HR management solution for attendance,Realtime location tracking and employee management to streamline your business.",
        image: hrmsImage,
        icon: hrmsIcon,
        rating: "4.8",
        totalUsers: "8K+ users",
        link: "https://noproxy.co.in",
        type: "external",
        colorClass: "bg-purple-500",
        shadowClass: "shadow-purple-100",
        textClass: "text-purple-600",
        hoverTextClass: "hover:text-purple-700"
    },
    {
        id: 3,
        initials: "GD",
        title: "Graphic Design",
        description: "Professional graphic design services to elevate your brand's visual identity and creative storytelling.",
        image: graphicDesignImage,
        rating: "4.7",
        totalUsers: "6K+ users",
        link: "https://zyfox.in",
        type: "external",
        colorClass: "bg-orange-500",
        shadowClass: "shadow-orange-100",
        textClass: "text-orange-600",
        hoverTextClass: "hover:text-orange-700"
    },
    {
        id: 4,
        initials: "NL",
        title: "Noorilm App",
        description: "All in one islamic with vital features like Ai, Halal lens, Dua, Quran and many more.",
        image: noorilmImage,
        rating: "4.9",
        totalUsers: "20K+ users",
        link: "https://noorilm.thumbeja.com/",
        type: "external",
        colorClass: "bg-emerald-500",
        shadowClass: "shadow-emerald-100",
        textClass: "text-emerald-600",
        hoverTextClass: "hover:text-emerald-700"
    },
    {
        id: 5,
        initials: "I3",
        title: "I3 Marketing",
        description: "Innovative marketing strategies powered by intelligence, insight, and innovation for focused results.",
        image: i3MarketingImage,
        rating: "4.8",
        totalUsers: "5K+ users",
        link: "tel:+916366983708",
        type: "phone",
        colorClass: "bg-indigo-500",
        shadowClass: "shadow-indigo-100",
        textClass: "text-indigo-600",
        hoverTextClass: "hover:text-indigo-700"
    },
    {
        id: 6,
        initials: "JM",
        title: "Just Message",
        description: "Streamlined messaging platform for effective business communication and instant connectivity.",
        image: justMessageImage,
        rating: "4.6",
        totalUsers: "7K+ users",
        link: "https://justmessage.co.in/",
        type: "external",
        colorClass: "bg-amber-500",
        shadowClass: "shadow-amber-100",
        textClass: "text-amber-600",
        hoverTextClass: "hover:text-amber-700"
    },
    {
        id: 7,
        initials: "OF",
        title: "Our Family",
        description: "Family-focused application experience designed to keep members connected, organized, and updated in one simple place.",
        image: ourfamily,
        icon: treeIcon,
        rating: "4.7",
        totalUsers: "4K+ users",
        link: "/contact-thumbeja-publicity",
        type: "internal",
        colorClass: "bg-rose-500",
        shadowClass: "shadow-rose-100",
        textClass: "text-rose-600",
        hoverTextClass: "hover:text-rose-700"
    },
    {
        id: 8,
        initials: "CB",
        title: "Companion Book",
        description: "A companion app concept for structured notes, useful information, and easy access to important digital content.",
        image: companionBookImage,
        rating: "4.6",
        totalUsers: "3K+ users",
        link: "/contact-thumbeja-publicity",
        type: "internal",
        colorClass: "bg-cyan-500",
        shadowClass: "shadow-cyan-100",
        textClass: "text-cyan-600",
        hoverTextClass: "hover:text-cyan-700"
    }
];

export default productsData;
