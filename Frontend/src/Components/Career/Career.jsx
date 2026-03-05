import React, {useEffect, useMemo, useRef, useState} from 'react';
import Header from "../header/Header.jsx";
import {careerPage} from "@/assets/JsonData/JobData.js";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import "./Career.css";
import {useGSAP} from "@gsap/react";
import SEO from "../SEO/SEO.jsx";
import Footer from "@/Components/Footer/Footer.jsx";
import benefitsPrimaryImage from "@/assets/Images/celebrating-the-success.jpg";
import benefitsSecondaryImage from "@/assets/Images/planning-with-client.jpg";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_SPREADSHEET_ID = "1WnCzhEHtgpN9WXfn4VR6_iHpwNhj4W1qODOP9Wv0fdc";
const SHEETS_BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets";
const GVIZ_BASE_URL = "https://docs.google.com/spreadsheets/d";

const HEADER_ALIASES = {
    id: ["id", "jobid", "roleid"],
    title: ["jobtitle", "title", "role", "position", "designation"],
    status: ["status", "jobstatus", "openingstatus", "vacancystatus", "availability"],
    description: ["description", "jobdescription", "roledescription", "responsibilities"],
    qualification: ["qualification", "qualifications", "education", "educationqualification"],
    requiredSkills: ["requiredskills", "skills", "skillset", "keyskills", "technicalskills"],
    applyUrl: ["url", "applyurl", "applicationurl", "link", "applylink", "applicationlink"],
    location: ["location", "joblocation", "worklocation"],
    employmentType: ["employmenttype", "type", "jobtype"],
    category: ["category", "department", "domain", "team"],
    openings: ["openings", "noofopenings", "positions", "vacancies", "vacancy", "vaccency", "openposition"]
};

const normalizeHeader = (value = "") =>
    `${value}`
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .trim();

const cleanCell = (value = "") => `${value}`.replace(/\s+/g, " ").trim();

const buildHeaderIndex = (headers = []) => {
    const map = {};
    headers.forEach((header, index) => {
        const key = normalizeHeader(header);
        if (key && map[key] === undefined) {
            map[key] = index;
        }
    });
    return map;
};

const getRowValue = (row = [], headerIndex = {}, aliases = [], fallbackIndexes = []) => {
    for (const alias of aliases) {
        const index = headerIndex[alias];
        if (index !== undefined) {
            const value = cleanCell(row[index]);
            if (value) return value;
        }
    }

    for (const index of fallbackIndexes) {
        const value = cleanCell(row[index]);
        if (value) return value;
    }

    return "";
};

const splitIntoPoints = (value = "", {preferSentenceSplit = false} = {}) => {
    const normalized = `${value}`.replace(/\r/g, "\n").trim();
    if (!normalized) return [];

    if (preferSentenceSplit) {
        const sentenceParts = normalized
            .match(/[^.]+(?:\.(?=\s|$)|$)/g) || [];

        const cleanedSentences = sentenceParts
            .map((part) => part.trim())
            .filter(Boolean);

        if (cleanedSentences.length > 1) {
            return [...new Set(cleanedSentences)];
        }
    }

    const lineParts = normalized
        .split(/\n+/)
        .map((part) => part.trim())
        .filter(Boolean);

    const parts = (lineParts.length > 1 ? lineParts : normalized.split(/\s*[•●·;]\s*/))
        .map((part) => part.replace(/^[-*]\s*/, "").replace(/^\d+[\).:-]\s*/, "").trim())
        .filter(Boolean);

    return [...new Set(parts)];
};

const parseOpenings = (value = "") => {
    const match = `${value}`.match(/\d+/);
    if (!match) return 1;
    const parsed = Number(match[0]);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
};

const normalizeApplyUrl = (value = "", siteUrl = "") => {
    const cleaned = cleanCell(value);
    if (!cleaned) return `${siteUrl}/contact`;
    if (/^(https?:\/\/|mailto:|tel:)/i.test(cleaned)) return cleaned;
    if (/^www\./i.test(cleaned)) return `https://${cleaned}`;
    if (cleaned.startsWith("/")) return `${siteUrl}${cleaned}`;
    return `https://${cleaned}`;
};

const isOpenStatus = (status = "") => {
    const normalized = cleanCell(status).toLowerCase();
    if (!normalized) return true;
    if (normalized === "true") return true;
    if (normalized === "false") return false;
    if (/(close|closed|hold|paused|filled|inactive|expired|cancel)/.test(normalized)) return false;
    if (/(open|active|hiring|vacan|immediate|ongoing)/.test(normalized)) return true;
    return true;
};

const buildSections = ({description = "", qualification = "", requiredSkills = ""}) => {
    const sections = [];
    const descriptionPoints = splitIntoPoints(description);
    const qualificationPoints = splitIntoPoints(qualification);
    const skillsPoints = splitIntoPoints(requiredSkills, {preferSentenceSplit: true});

    if (descriptionPoints.length) {
        sections.push({heading: "Job Description", points: descriptionPoints});
    }
    if (qualificationPoints.length) {
        sections.push({heading: "Qualification", points: qualificationPoints});
    }
    if (skillsPoints.length) {
        sections.push({heading: "Required Skills", points: skillsPoints});
    }

    return sections;
};

const mapSheetRowToJob = (row = [], headerIndex = {}, siteUrl = "", rowIndex = 0) => {
    const sheetId = getRowValue(row, headerIndex, HEADER_ALIASES.id, [0]);
    const title = getRowValue(row, headerIndex, HEADER_ALIASES.title, [1, 0]);
    if (!title) return null;

    const status = getRowValue(row, headerIndex, HEADER_ALIASES.status, [7]);
    const description = getRowValue(row, headerIndex, HEADER_ALIASES.description, [3]);
    const qualification = getRowValue(row, headerIndex, HEADER_ALIASES.qualification, [6]);
    const requiredSkills = getRowValue(row, headerIndex, HEADER_ALIASES.requiredSkills, [5]);
    const applyUrlRaw = getRowValue(row, headerIndex, HEADER_ALIASES.applyUrl);
    const location = getRowValue(row, headerIndex, HEADER_ALIASES.location) || "Mangalore";
    const employmentType = getRowValue(row, headerIndex, HEADER_ALIASES.employmentType) || "Full Time";
    const category = getRowValue(row, headerIndex, HEADER_ALIASES.category, [2]);
    const openingsRaw = getRowValue(row, headerIndex, HEADER_ALIASES.openings, [4]);
    const sections = buildSections({description, qualification, requiredSkills});

    return {
        id: sheetId ? `sheet-job-${sheetId}` : `sheet-job-${rowIndex}`,
        title,
        status,
        category,
        location,
        employmentType,
        openings: parseOpenings(openingsRaw),
        url: normalizeApplyUrl(applyUrlRaw, siteUrl),
        sections,
        searchableText: [title, description, qualification, requiredSkills, category, location, employmentType, status]
            .filter(Boolean)
            .join(" ")
    };
};

const mapGvizTableToRows = (table = {}) => {
    const headers = (table.cols || []).map((column) => cleanCell(column?.label || column?.id || ""));
    const dataRows = (table.rows || []).map((row) =>
        (row.c || []).map((cell) => {
            if (!cell || cell.v === null || cell.v === undefined) return "";
            if (typeof cell.v === "boolean") return cell.v ? "TRUE" : "FALSE";
            if (typeof cell.v === "number") return `${cell.v}`;
            if (typeof cell.v === "string") return cell.v;
            if (cell.f) return `${cell.f}`;
            return `${cell.v}`;
        })
    );
    return [headers, ...dataRows];
};

const mapRowsToOpenJobs = (rows = [], siteUrl = "") => {
    if (rows.length <= 1) return [];
    const [headerRow, ...dataRows] = rows;
    const headerIndex = buildHeaderIndex(headerRow);

    return dataRows
        .map((row, index) => mapSheetRowToJob(row, headerIndex, siteUrl, index + 2))
        .filter(Boolean)
        .filter((job) => isOpenStatus(job.status));
};

const Career = () => {
    const SITE_URL = "https://thumbeja.com";
    const CAREER_PAGE_URL = `${SITE_URL}/career-thumbeja-publicity`;
    const SPREADSHEET_ID = import.meta.env.VITE_CAREER_SPREADSHEET_ID || DEFAULT_SPREADSHEET_ID;
    const SPREADSHEET_GID = import.meta.env.VITE_CAREER_SHEET_GID || "0";
    const SHEETS_API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
    const ROLES_PER_PAGE = 6;
    const DESCRIPTION_PREVIEW_LIMIT = 8;
    const DESCRIPTION_DOT_COUNT = 5;
    const resultsRef = useRef(null);

    const [category, setCategory] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sheetJobs, setSheetJobs] = useState([]);
    const [jobsLoading, setJobsLoading] = useState(true);
    const [jobsError, setJobsError] = useState("");
    const [activeDescriptionKey, setActiveDescriptionKey] = useState(null);
    const [descriptionProgress, setDescriptionProgress] = useState({});

    const heroSection = careerPage?.section1 || {};
    const heroTitle = heroSection.careertitle || "Careers at Thumbeja Publicity";
    const heroSubtitle =
        heroSection.careerSubtitle ||
        "Join our team in Mangalore and build meaningful digital marketing and technology solutions.";
    const heroImage = heroSection.careerImage || benefitsPrimaryImage;

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const cleanupCallbacks = [];

        const fetchRowsFromSheetsApi = async () => {
            if (!SHEETS_API_KEY) {
                throw new Error("Google Sheets API key is missing.");
            }

            const metadataResponse = await fetch(
                `${SHEETS_BASE_URL}/${SPREADSHEET_ID}?fields=sheets(properties(title))&key=${SHEETS_API_KEY}`,
                {signal: controller.signal}
            );

            if (!metadataResponse.ok) {
                throw new Error(`Failed to fetch sheet metadata (${metadataResponse.status})`);
            }

            const metadata = await metadataResponse.json();
            const firstSheetTitle = metadata?.sheets?.[0]?.properties?.title;

            if (!firstSheetTitle) {
                throw new Error("No worksheet found in the spreadsheet.");
            }

            const range = encodeURIComponent(`${firstSheetTitle}!A1:H1000`);
            const valuesResponse = await fetch(
                `${SHEETS_BASE_URL}/${SPREADSHEET_ID}/values/${range}?majorDimension=ROWS&key=${SHEETS_API_KEY}`,
                {signal: controller.signal}
            );

            if (!valuesResponse.ok) {
                throw new Error(`Failed to fetch sheet rows (${valuesResponse.status})`);
            }

            const valuesData = await valuesResponse.json();
            return valuesData?.values || [];
        };

        const fetchRowsFromGviz = () =>
            new Promise((resolve, reject) => {
                if (typeof window === "undefined" || typeof document === "undefined") {
                    reject(new Error("Browser context unavailable for gviz fallback."));
                    return;
                }

                const callbackName = `__careerSheetCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
                const script = document.createElement("script");
                const gvizUrl =
                    `${GVIZ_BASE_URL}/${SPREADSHEET_ID}/gviz/tq?gid=${SPREADSHEET_GID}` +
                    `&tqx=out:json;responseHandler:${callbackName}`;

                const cleanup = () => {
                    if (script.parentNode) {
                        script.parentNode.removeChild(script);
                    }
                    delete window[callbackName];
                };

                const timeoutId = window.setTimeout(() => {
                    cleanup();
                    reject(new Error("Gviz request timed out."));
                }, 15000);

                const finalCleanup = () => {
                    window.clearTimeout(timeoutId);
                    cleanup();
                };

                cleanupCallbacks.push(finalCleanup);

                window[callbackName] = (response) => {
                    finalCleanup();
                    const rows = mapGvizTableToRows(response?.table || {});
                    resolve(rows);
                };

                script.async = true;
                script.src = gvizUrl;
                script.onerror = () => {
                    finalCleanup();
                    reject(new Error("Failed to load gviz data."));
                };
                document.head.appendChild(script);
            });

        const loadJobsFromSheet = async () => {
            setJobsLoading(true);
            setJobsError("");

            try {
                const rows = await fetchRowsFromSheetsApi();
                if (!isMounted) return;
                setSheetJobs(mapRowsToOpenJobs(rows, SITE_URL));
            } catch (sheetsError) {
                if (sheetsError.name === "AbortError") return;
                console.warn("Sheets API failed. Falling back to gviz:", sheetsError);
                try {
                    const rows = await fetchRowsFromGviz();
                    if (!isMounted) return;
                    setSheetJobs(mapRowsToOpenJobs(rows, SITE_URL));
                } catch (gvizError) {
                    console.error("Career sheet loading failed (Sheets API + gviz):", gvizError);
                    if (isMounted) {
                        setSheetJobs([]);
                        setJobsError("Unable to load job data from Excel right now.");
                    }
                }
            } finally {
                if (isMounted) {
                    setJobsLoading(false);
                }
            }
        };

        loadJobsFromSheet();

        return () => {
            isMounted = false;
            controller.abort();
            cleanupCallbacks.forEach((cleanup) => {
                if (typeof cleanup === "function") {
                    cleanup();
                }
            });
        };
    }, [SHEETS_API_KEY, SPREADSHEET_GID, SPREADSHEET_ID, SITE_URL]);

    const matchesCategory = (job = {}, selectedCategory) => {
        const text = `${job.title || ""} ${job.category || ""}`.toLowerCase();
        if (selectedCategory === "all") return true;
        if (selectedCategory === "marketing") return /marketing|seo|media/.test(text);
        if (selectedCategory === "design") return /design/.test(text);
        if (selectedCategory === "development") return /software|developer|engineer|web/.test(text);
        if (selectedCategory === "sales") return /business|client|relationship|sales/.test(text);
        return true;
    };

    const normalizePreviewPoint = (text = "") =>
        text
            .toLowerCase()
            .replace(/[^\w\s]/g, "")
            .replace(/\s+/g, " ")
            .trim();

    const collectSectionPoints = (section = {}) => {
        const directPoints = (section.points || []).map((point) => `${point}`.trim());
        const itemPoints = (section.items || []).flatMap((item) =>
            (item.points || []).map((point) => `${point}`.trim())
        );
        return [...directPoints, ...itemPoints];
    };

    const getRolePreview = (job = {}) => {
        const firstSection = (job.sections || [])[0];
        const heading = firstSection?.heading || "Role Overview";
        const allPoints = (job.sections || [])
            .flatMap((section) => collectSectionPoints(section))
            .filter(Boolean);

        const seen = new Set();
        const uniquePoints = allPoints.filter((point) => {
            const normalized = normalizePreviewPoint(point);
            if (!normalized || seen.has(normalized)) return false;
            seen.add(normalized);
            return true;
        });

        return {heading, points: uniquePoints};
    };

    const filteredJobs = useMemo(() => {
        const query = submittedText.trim().toLowerCase();
        return sheetJobs.filter((job) => {
            if (!matchesCategory(job, category)) return false;
            if (!query) return true;

            const searchable = `${job.title || ""} ${job.searchableText || ""}`.toLowerCase();
            return searchable.includes(query);
        });
    }, [category, sheetJobs, submittedText]);

    const totalPages = useMemo(
        () => Math.max(1, Math.ceil(filteredJobs.length / ROLES_PER_PAGE)),
        [filteredJobs.length, ROLES_PER_PAGE]
    );
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const paginationStartIndex = (safeCurrentPage - 1) * ROLES_PER_PAGE;

    const paginatedJobs = useMemo(
        () => filteredJobs.slice(paginationStartIndex, paginationStartIndex + ROLES_PER_PAGE),
        [filteredJobs, paginationStartIndex, ROLES_PER_PAGE]
    );

    const paginationItems = useMemo(() => {
        if (totalPages <= 7) {
            return Array.from({length: totalPages}, (_, index) => index + 1);
        }

        const items = [1];
        const start = Math.max(2, safeCurrentPage - 1);
        const end = Math.min(totalPages - 1, safeCurrentPage + 1);

        if (start > 2) items.push("...");
        for (let page = start; page <= end; page += 1) {
            items.push(page);
        }
        if (end < totalPages - 1) items.push("...");
        items.push(totalPages);
        return items;
    }, [safeCurrentPage, totalPages]);

    const getRoleCategory = (job = {}) => {
        if (job.category) return job.category;
        const text = (job.title || "").toLowerCase();
        if (/marketing|seo|media/.test(text)) return "Marketing";
        if (/design/.test(text)) return "Design";
        if (/software|developer|engineer|web/.test(text)) return "Development";
        if (/business|client|relationship|sales/.test(text)) return "Sales";
        return "General";
    };

    const getSeoJobDescription = (job = {}) => {
        const preview = getRolePreview(job);
        const description = preview.points
            .slice(0, DESCRIPTION_PREVIEW_LIMIT)
            .join(" ")
            .trim();
        return `${job.title} role at Thumbeja Publicity in Mangalore. ${description}`.trim();
    };

    const openDescription = (jobKey) => {
        setActiveDescriptionKey(jobKey);
        setDescriptionProgress((prev) => {
            if (prev[jobKey] !== undefined) return prev;
            return {...prev, [jobKey]: 0};
        });
    };

    const closeDescription = () => {
        setActiveDescriptionKey(null);
    };

    const updateDescriptionProgress = (jobKey, targetElement) => {
        const maxScroll = targetElement.scrollHeight - targetElement.clientHeight;
        const scrollRatio = maxScroll > 0 ? targetElement.scrollTop / maxScroll : 0;
        const activeDot = Math.round(scrollRatio * (DESCRIPTION_DOT_COUNT - 1));

        setDescriptionProgress((prev) => {
            if (prev[jobKey] === activeDot) return prev;
            return {...prev, [jobKey]: activeDot};
        });
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setSubmittedText(searchText);
        requestAnimationFrame(() => {
            if (resultsRef.current) {
                resultsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        });
    };

    const handlePageChange = (targetPage) => {
        const clamped = Math.min(Math.max(targetPage, 1), totalPages);
        if (clamped === safeCurrentPage) return;
        setCurrentPage(clamped);
        setActiveDescriptionKey(null);
        requestAnimationFrame(() => {
            if (resultsRef.current) {
                resultsRef.current.scrollIntoView({behavior: "smooth", block: "start"});
            }
        });
    };

    const structuredData = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SITE_URL
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Careers",
                    "item": CAREER_PAGE_URL
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Careers at Thumbeja Publicity",
            "url": CAREER_PAGE_URL,
            "description": "Explore current job openings at Thumbeja Publicity in Mangalore for software, marketing, design, and business roles.",
            "inLanguage": "en-IN"
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Current Job Openings at Thumbeja Publicity",
            "numberOfItems": sheetJobs.length,
            "itemListElement": sheetJobs.map((job, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": job.url,
                "name": job.title
            }))
        },
        ...sheetJobs.map((job, index) => ({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": job.title,
            "description": getSeoJobDescription(job),
            "identifier": {
                "@type": "PropertyValue",
                "name": "Thumbeja Publicity",
                "value": `career-role-${index + 1}`
            },
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": "Thumbeja Publicity",
                "sameAs": SITE_URL,
                "logo": `${SITE_URL}/thumbeja.svg`
            },
            "industry": "Digital Marketing and Technology Services",
            "jobLocationType": "Onsite",
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mangalore",
                    "addressRegion": "Karnataka",
                    "addressCountry": "IN"
                }
            },
            "applicantLocationRequirements": {
                "@type": "Country",
                "name": "IN"
            },
            "directApply": true,
            "url": job.url
        }))
    ];

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.career-hero__media', {scale: 1.05, opacity: 0, duration: 0.85, ease: "power2.out"})
            .from('.career-hero__title', {y: 35, opacity: 0, duration: 0.7, ease: "power2.out"}, "-=0.52")
            .from('.career-hero__subtitle', {y: 20, opacity: 0, duration: 0.6, ease: "power2.out"}, "-=0.45")
            .from('.career-search', {y: 20, opacity: 0, duration: 0.6, ease: "power2.out"}, "-=0.35");

        gsap.to('.career-hero__image', {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
                trigger: ".career-hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });

        gsap.fromTo('.career-intro__content', {y: 80, opacity: 0}, {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.7,
            scrollTrigger: {
                trigger: ".career-openings",
                start: "top 78%"
            }
        });

        gsap.from('.career-results__card', {
            y: 34,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".career-results",
                start: "top 82%"
            }
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: ".career-benefits__inner",
                start: "top 80%"
            }
        })
            .from('.career-benefits__image--primary', {x: -70, opacity: 0, duration: 0.7, ease: "power2.out"})
            .from('.career-benefits__image--secondary', {x: -20, y: 70, opacity: 0, duration: 0.7, ease: "power2.out"}, "-=0.4")
            .from('.career-benefits__title', {y: 26, opacity: 0, duration: 0.55, ease: "power2.out"}, "-=0.3")
            .from('.career-benefits__text', {y: 20, opacity: 0, duration: 0.45, stagger: 0.1, ease: "power2.out"}, "-=0.25")
            .from('.career-benefits__item', {y: 18, opacity: 0, duration: 0.4, stagger: 0.11, ease: "power2.out"}, "-=0.2");
    }, []);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.career-results__card');
        if (!cards.length) return;

        gsap.fromTo(cards,
            {y: 18, opacity: 0},
            {y: 0, opacity: 1, duration: 0.42, stagger: 0.08, ease: "power2.out"}
        );
    }, {dependencies: [filteredJobs, safeCurrentPage], scope: resultsRef});

    useEffect(() => {
        setCurrentPage(1);
        setActiveDescriptionKey(null);
    }, [category, submittedText]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    useEffect(() => {
        if (!activeDescriptionKey) return;
        const exists = paginatedJobs.some((job, index) => {
            const absoluteIndex = paginationStartIndex + index;
            const jobKey = job.id || `${job.title}-${absoluteIndex}`;
            return jobKey === activeDescriptionKey;
        });
        if (!exists) {
            setActiveDescriptionKey(null);
        }
    }, [activeDescriptionKey, paginatedJobs, paginationStartIndex]);

    useEffect(() => {
        if (!activeDescriptionKey) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") closeDescription();
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [activeDescriptionKey]);

    return (
        <>
            <SEO
                title="Careers in Mangalore | Thumbeja Publicity Jobs"
                description="Apply for software development, digital marketing, design, and business development jobs at Thumbeja Publicity in Mangalore."
                keywords="Thumbeja careers, jobs in Mangalore, software developer jobs Mangalore, digital marketing jobs Mangalore, graphic designer jobs Mangalore, business development jobs Mangalore"
                url={CAREER_PAGE_URL}
                structuredData={structuredData}
            />
            <Header/>
            <main className="career-page">
                <section className="career-hero">
                    <div className="career-hero__media">
                        <img
                            src={heroImage}
                            alt={heroTitle}
                            className="career-hero__image"
                        />
                        <div className="career-hero__shade"/>
                    </div>
                    <div className="career-hero__content">
                        <h1 className="career-hero__title">{heroTitle}</h1>
                        <p className="career-hero__subtitle">{heroSubtitle}</p>
                    </div>
                    <form className="career-search" role="search" onSubmit={handleSearch}>
                        <div className="career-search__field career-search__field--fixed">
                            <select
                                aria-label="Job category"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                            >
                                <option value="all">All roles</option>
                                <option value="development">Development</option>
                                <option value="marketing">Marketing</option>
                                <option value="design">Design</option>
                                <option value="sales">Sales</option>
                            </select>
                        </div>
                        <div className="career-search__divider"/>
                        <div className="career-search__field career-search__field--grow">
                            <input
                                type="search"
                                placeholder="Search roles, skills, or keywords"
                                aria-label="Search jobs"
                                value={searchText}
                                onChange={(event) => setSearchText(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="career-search__button">
                            Search
                            <span className="career-search__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </button>
                    </form>
                </section>

                <section className="career-openings" ref={resultsRef}>
                    <section className="career-intro">
                        <div className="career-intro__content">
                            <span className="career-intro__label">Current Openings</span>
                            <h2 className="career-intro__title">Current Job Openings at Thumbeja Publicity, Mangalore</h2>
                            <p className="career-intro__text">
                                Explore full-time roles in software development, digital marketing, business development,
                                and graphic design. Review role requirements, responsibilities, and apply directly through
                                each listing.
                            </p>
                        </div>
                    </section>

                    <section className="career-results">
                        <div className="career-results__surface">
                            {jobsLoading && (
                                <p className="career-results__empty">Loading current openings from the latest Excel data...</p>
                            )}

                            {!jobsLoading && jobsError && (
                                <p className="career-results__empty">{jobsError}</p>
                            )}

                            {!jobsLoading && !jobsError && (
                                <>
                                    <div className="career-results__grid">
                                        {paginatedJobs.map((job, index) => {
                                            const preview = getRolePreview(job);
                                            const absoluteIndex = paginationStartIndex + index;
                                            const jobKey = job.id || `${job.title}-${absoluteIndex}`;
                                            const previewText = preview.points.slice(0, 5).join(" ");
                                            const isDescriptionOpen = activeDescriptionKey === jobKey;
                                            const activeDot = descriptionProgress[jobKey] ?? 0;
                                            const openLabel = job.openings > 1 ? `${job.openings} Open Positions` : "1 Open Position";

                                            return (
                                                <article key={jobKey} className={`career-results__card ${isDescriptionOpen ? "is-expanded" : ""}`}>
                                                    <div className="career-results__details">
                                                        <h4>{job.title}</h4>
                                                        <div className="career-results__meta">
                                                            <span>
                                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                                    <rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                                                                    <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7" stroke="currentColor" strokeWidth="1.8"/>
                                                                </svg>
                                                                {getRoleCategory(job)}
                                                            </span>
                                                            <span>
                                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                                    <path d="M12 21C15.5 16.9 18 14.09 18 10.9C18 7.65 15.31 5 12 5C8.69 5 6 7.65 6 10.9C6 14.09 8.5 16.9 12 21Z" stroke="currentColor" strokeWidth="1.8"/>
                                                                    <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.8"/>
                                                                </svg>
                                                                {job.location}
                                                            </span>
                                                            <span className="career-results__meta-highlight">
                                                                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                                    <rect x="3.6" y="6.2" width="16.8" height="11.6" rx="1.8" stroke="currentColor" strokeWidth="1.8"/>
                                                                    <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8"/>
                                                                </svg>
                                                                {openLabel}
                                                            </span>
                                                            <span>{job.employmentType}</span>
                                                        </div>

                                                        <p className="career-results__description-preview">{previewText}</p>

                                                        <a
                                                            href="#"
                                                            className="career-results__description-link"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                openDescription(jobKey);
                                                            }}
                                                        >
                                                            See More
                                                        </a>

                                                        {isDescriptionOpen && (
                                                            <div className="career-results__description-popup" role="dialog" aria-label={`${job.title} description`}>
                                                                <button
                                                                    type="button"
                                                                    className="career-results__description-close"
                                                                    onClick={closeDescription}
                                                                    aria-label="Close description popup"
                                                                >
                                                                    x
                                                                </button>
                                                                <strong>{preview.heading}</strong>
                                                                <div
                                                                    className="career-results__description-popup-body"
                                                                    onScroll={(event) => updateDescriptionProgress(jobKey, event.currentTarget)}
                                                                >
                                                                    <ul>
                                                                        {preview.points.map((point, pointIndex) => (
                                                                            <li key={`${job.title}-popup-${pointIndex}`}>{point}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                <div className="career-results__description-popup-dots" aria-hidden="true">
                                                                    {Array.from({length: DESCRIPTION_DOT_COUNT}).map((_, dotIndex) => (
                                                                        <span
                                                                            key={`${jobKey}-dot-${dotIndex}`}
                                                                            className={`career-results__description-popup-dot ${dotIndex <= activeDot ? "is-active" : ""}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        <a className="career-results__apply" href={job.url} target="_blank" rel="noreferrer">
                                                            Apply now
                                                        </a>
                                                    </div>
                                                </article>
                                            );
                                        })}
                                    </div>

                                    {filteredJobs.length === 0 && (
                                        <p className="career-results__empty">
                                            {sheetJobs.length === 0
                                                ? "No open positions are currently available."
                                                : "No matching roles found. Try another keyword."}
                                        </p>
                                    )}

                                    {filteredJobs.length > 0 && totalPages > 1 && (
                                        <div className="career-results__pagination" aria-label="Jobs pagination">
                                            <p className="career-results__pagination-summary">
                                                Showing {paginationStartIndex + 1}-{Math.min(paginationStartIndex + ROLES_PER_PAGE, filteredJobs.length)} of {filteredJobs.length} roles
                                            </p>
                                            <div className="career-results__pagination-controls">
                                                <button
                                                    type="button"
                                                    className="career-results__page-button"
                                                    onClick={() => handlePageChange(safeCurrentPage - 1)}
                                                    disabled={safeCurrentPage === 1}
                                                >
                                                    Previous
                                                </button>

                                                {paginationItems.map((item, index) => (
                                                    item === "..." ? (
                                                        <span key={`ellipsis-${index}`} className="career-results__page-ellipsis" aria-hidden="true">
                                                            ...
                                                        </span>
                                                    ) : (
                                                        <button
                                                            key={`page-${item}`}
                                                            type="button"
                                                            className={`career-results__page-button ${item === safeCurrentPage ? "is-active" : ""}`}
                                                            onClick={() => handlePageChange(item)}
                                                            aria-current={item === safeCurrentPage ? "page" : undefined}
                                                        >
                                                            {item}
                                                        </button>
                                                    )
                                                ))}

                                                <button
                                                    type="button"
                                                    className="career-results__page-button"
                                                    onClick={() => handlePageChange(safeCurrentPage + 1)}
                                                    disabled={safeCurrentPage === totalPages}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </section>
                </section>

                <section className="career-benefits">
                    <div className="career-benefits__inner">
                        <div className="career-benefits__gallery">
                            <div className="career-benefits__image career-benefits__image--primary">
                                <img src={benefitsPrimaryImage} alt="Team collaboration at Thumbeja Publicity"/>
                            </div>
                            <div className="career-benefits__image career-benefits__image--secondary">
                                <img src={benefitsSecondaryImage} alt="Project planning and execution at Thumbeja Publicity"/>
                            </div>
                        </div>

                        <div className="career-benefits__content">
                            <h3 className="career-benefits__title">Why build your career at Thumbeja Publicity</h3>
                            <p className="career-benefits__text">
                                Build practical expertise by working on live marketing, branding, and software projects
                                for businesses across industries.
                            </p>
                            <p className="career-benefits__text">
                                Our team culture focuses on ownership, consistent execution, and long-term career growth
                                with support from experienced professionals.
                            </p>

                            <div className="career-benefits__items">
                                <article className="career-benefits__item">
                                    <span className="career-benefits__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M12 21C15.5 16.9 18 14.09 18 10.9C18 7.65 15.31 5 12 5C8.69 5 6 7.65 6 10.9C6 14.09 8.5 16.9 12 21Z" stroke="currentColor" strokeWidth="1.8"/>
                                            <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.8"/>
                                        </svg>
                                    </span>
                                    <p>Growth-focused culture</p>
                                </article>

                                <article className="career-benefits__item">
                                    <span className="career-benefits__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <rect x="4" y="7" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                                            <path d="M9 7V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7" stroke="currentColor" strokeWidth="1.8"/>
                                        </svg>
                                    </span>
                                    <p>Practical project exposure</p>
                                </article>

                                <article className="career-benefits__item">
                                    <span className="career-benefits__icon" aria-hidden="true">
                                        <svg viewBox="0 0 24 24" fill="none">
                                            <path d="M5 16V9.5C5 8.67 5.67 8 6.5 8H17.5C18.33 8 19 8.67 19 9.5V16M9 8V6.5C9 5.67 9.67 5 10.5 5H13.5C14.33 5 15 5.67 15 6.5V8M9 16H15M12 16V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                    <p>Supportive team environment</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    );
};

export default Career;
