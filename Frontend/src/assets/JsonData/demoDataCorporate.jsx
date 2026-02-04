const galleryData = [
    {
        id: 1,
        name: "Corporate Strategy Session",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        description: "Leadership team aligning on long-term goals and business strategy."
    },
    {
        id: 2,
        name: "Modern Office Interior",
        imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        description: "A contemporary workspace designed to support collaboration and focus."
    },
    {
        id: 3,
        name: "Team Collaboration",
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        description: "Employees working together to solve problems and share ideas."
    },
    {
        id: 4,
        name: "Business Presentation",
        imageUrl: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
        description: "Presenting quarterly results and future plans to stakeholders."
    },
    {
        id: 5,
        name: "Innovation Workshop",
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        description: "Creative brainstorming session focused on innovation and growth."
    },
    {
        id: 6,
        name: "Executive Office",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        description: "A professional executive workspace reflecting leadership and vision."
    },
    {
        id: 7,
        name: "Team Standup Meeting",
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        description: "Daily standup meeting to align tasks and priorities."
    },
    {
        id: 8,
        name: "Corporate Lobby",
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
        description: "A welcoming corporate lobby that reflects brand identity."
    },
    {
        id: 9,
        name: "Remote Collaboration",
        imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
        description: "Teams collaborating remotely using modern digital tools."
    },
    {
        id: 10,
        name: "Product Planning",
        imageUrl: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657",
        description: "Product roadmap discussion focused on user needs and timelines."
    },

    {
        id: 11,
        name: "Open Workspace",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        description: "An open-plan office encouraging transparency and teamwork."
    },
    {
        id: 12,
        name: "Marketing Strategy",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
        description: "Marketing team planning campaigns and brand positioning."
    },
    {
        id: 13,
        name: "Client Meeting",
        imageUrl: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        description: "Professional discussion focused on client needs and solutions."
    },
    {
        id: 14,
        name: "Corporate Training",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
        description: "Employee training session to enhance skills and knowledge."
    },
    {
        id: 15,
        name: "Team Workshop",
        imageUrl: "https://images.unsplash.com/photo-1549924231-f129b911e442",
        description: "Interactive workshop encouraging collaboration and learning."
    },
    {
        id: 16,
        name: "Financial Review",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        description: "Reviewing financial performance and forecasting growth."
    },
    {
        id: 17,
        name: "Creative Discussion",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
        description: "Creative discussion focused on new ideas and solutions."
    },
    {
        id: 18,
        name: "Project Kickoff",
        imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
        description: "Launching a new project with clear objectives and roles."
    },
    {
        id: 19,
        name: "Workstation Setup",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        description: "A clean and efficient workstation supporting productivity."
    },
    {
        id: 20,
        name: "Office Collaboration Area",
        imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
        description: "Shared space designed for informal meetings and collaboration."
    },

    {
        id: 21,
        name: "Leadership Discussion",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        description: "Leaders discussing company direction and key decisions."
    },
    {
        id: 22,
        name: "Team Brainstorming",
        imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
        description: "Team brainstorming session to generate innovative ideas."
    },
    {
        id: 23,
        name: "Corporate Workspace",
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        description: "A well-organized workspace supporting daily operations."
    },
    {
        id: 24,
        name: "Office Lounge",
        imageUrl: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e",
        description: "A relaxed lounge area for informal discussions and breaks."
    },
    {
        id: 25,
        name: "Planning Session",
        imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221",
        description: "Planning session focused on milestones and deliverables."
    },
    {
        id: 26,
        name: "Digital Collaboration",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-760bce3f36a9",
        description: "Using digital tools to collaborate efficiently across teams."
    },
    {
        id: 27,
        name: "Office Environment",
        imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        description: "A professional environment designed for focus and comfort."
    },
    {
        id: 28,
        name: "Team Alignment",
        imageUrl: "https://images.unsplash.com/photo-1515169067865-5387ec356754",
        description: "Aligning teams around shared goals and responsibilities."
    },
    {
        id: 29,
        name: "Business Analysis",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        description: "Analyzing data to drive informed business decisions."
    },
    {
        id: 30,
        name: "Professional Workspace",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        description: "A modern professional workspace supporting productivity."
    },

    {
        id: 31,
        name: "Corporate Team Meeting",
        imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
        description: "Team meeting focused on collaboration and accountability."
    },
    {
        id: 32,
        name: "Office Design",
        imageUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        description: "Thoughtful office design that balances form and function."
    },
    {
        id: 33,
        name: "Team Planning",
        imageUrl: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5",
        description: "Planning session to define next steps and priorities."
    },
    {
        id: 34,
        name: "Business Workshop",
        imageUrl: "https://images.unsplash.com/photo-1522202222200-69a8c42d2f33",
        description: "Hands-on workshop focused on skill development."
    },
    {
        id: 35,
        name: "Corporate Collaboration",
        imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
        description: "Cross-team collaboration to achieve shared outcomes."
    },
    {
        id: 36,
        name: "Office Brainstorming",
        imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
        description: "Brainstorming session aimed at problem-solving."
    },
    {
        id: 37,
        name: "Meeting Room",
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        description: "A modern meeting room equipped for presentations."
    },
    {
        id: 38,
        name: "Team Discussion",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
        description: "Open discussion encouraging diverse perspectives."
    },
    {
        id: 39,
        name: "Corporate Culture",
        imageUrl: "https://images.unsplash.com/photo-1542744173-fb6e3f33c8ae",
        description: "Capturing moments that reflect company culture."
    }
];

export default galleryData;
