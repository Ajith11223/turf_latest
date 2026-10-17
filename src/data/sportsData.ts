export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
  specs: string[];
  dimensions: string;
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  area: string;
  year: string;
  highlight: string;
  image: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "football",
    number: "01",
    title: "Artificial Football Turf",
    shortDesc: "High-quality artificial football turf solutions designed for regular play, training and competitive sports environments.",
    fullDesc: "FIFA-grade monofilament synthetic turf with resilient silica sand and cryogenic SBR/EPDM infill. Engineered for superior shock absorption, consistent ball roll, all-weather durability, and rapid drainage.",
    image: "/images/cards/football.jpg",
    badge: "Most Popular",
    specs: ["40mm - 55mm Pile Height", "Sub-base Drainage System", "Shock Pad Cushioning Option", "UV-Treated Polyethylene Yarn"],
    dimensions: "5-a-side (90x60 ft) to 11-a-side (330x210 ft)",
    idealFor: "Sports academies, schools, commercial turf clubs, resorts"
  },
  {
    id: "cricket",
    number: "02",
    title: "Box Cricket Arenas",
    shortDesc: "Complete box cricket arena development with suitable playing surfaces, protective netting and supporting infrastructure.",
    fullDesc: "End-to-end box cricket solutions including non-directional curly grass pitch, roof and surround UV-treated HDPE netting, high-lux LED lighting, and padded rebound borders for high-tempo games.",
    image: "/images/cards/cricket.jpg",
    badge: "High ROI Commercial",
    specs: ["10mm - 15mm Dense Turf", "High-Impact Boundary Netting", "Flicker-Free LED Floodlights", "Rebound Padding & Stumps Base"],
    dimensions: "80x40 ft up to 130x70 ft",
    idealFor: "Commercial sports hubs, rooftops, urban recreation arenas"
  },
  {
    id: "basketball",
    number: "03",
    title: "Basketball Courts",
    shortDesc: "Durable basketball court solutions with appropriate sports flooring, court markings and functional layouts.",
    fullDesc: "Multi-layer acrylic cushion surfacing or interlocking polypropylene modular sports tiles. Anti-skid surface texture with official FIBA markings and heavy-duty adjustable hydraulic or fixed basketball posts.",
    image: "/images/cards/basketball.jpg",
    badge: "FIBA Standards",
    specs: ["8-layer Acrylic Cushion Flooring", "UV-Resistant Vibrant Colors", "Shatter-proof Acrylic/Glass Backboard", "True Ball Rebound Coefficient"],
    dimensions: "FIBA Standard 94x50 ft (28x15 m)",
    idealFor: "Colleges, international schools, residential gated communities"
  },
  {
    id: "pickleball",
    number: "04",
    title: "Pickleball Courts",
    shortDesc: "Modern pickleball court construction designed for recreational play, clubs and sports facilities.",
    fullDesc: "The fastest growing racquet sport globally. We construct custom pickleball courts with resilient cushioned acrylic coatings, non-glare high-friction finishes, tournament-spec permanent posts and perimeter windscreens.",
    image: "/images/cards/pickleball.jpg",
    badge: "Trending Worldwide",
    specs: ["Cushioned Acrylic Flooring", "Regulation Line Markings", "Heavy Duty Post & Net Set", "Integrated Drainage Slope"],
    dimensions: "44x20 ft playing area (60x30 ft court footprint)",
    idealFor: "Sports clubs, fitness centers, gated villas, hotels"
  },
  {
    id: "volleyball",
    number: "05",
    title: "Volleyball Courts",
    shortDesc: "Functional volleyball courts with suitable playing surfaces, court markings and supporting infrastructure.",
    fullDesc: "Engineered outdoor and indoor volleyball courts with synthetic sports acrylic, modular tiles, or fine washed sand. Equipped with telescopic galvanized posts, regulation antenna nets, and player safety margins.",
    image: "/images/cards/volleyball.jpg",
    badge: "All-Weather Surface",
    specs: ["Impact-Absorbing Polyurethane / Acrylic", "Galvanized Tensioning Posts", "High-visibility Markings", "Surround Netting & Drainage"],
    dimensions: "59x29.5 ft (18x9 m) + 10 ft run-off zone",
    idealFor: "Educational institutions, police training grounds, sports clubs"
  },
  {
    id: "badminton",
    number: "06",
    title: "Badminton Courts",
    shortDesc: "Quality-focused badminton court solutions with appropriate flooring and layouts for training and competitive play.",
    fullDesc: "BWF-standard court construction featuring anti-slip PVC vinyl sports mats or synthetic acrylic systems over engineered timber or asphalt bases, providing optimal joint protection and traction for rapid footwork.",
    image: "/images/cards/badminton.jpg",
    badge: "BWF Compliant",
    specs: ["4.5mm - 7mm Sports Vinyl Mats", "Anti-Glare Indoor Sports Lighting", "Wooden Underlay Cushioning Option", "Non-Slip Sand Textured Finish"],
    dimensions: "44x20 ft doubles (54x26 ft court envelope)",
    idealFor: "Indoor sports stadiums, school auditoriums, fitness complexes"
  },
  {
    id: "tennis",
    number: "07",
    title: "Tennis Courts",
    shortDesc: "Complete tennis court construction solutions with suitable playing surfaces, accurate markings and supporting facilities.",
    fullDesc: "ITF-classified hard court acrylic systems and artificial synthetic turf courts. Built with precision laser-levelled sub-base, controlled water gradient run-off, custom court fencing, and high-lux asymmetric sports floodlighting.",
    image: "/images/cards/tennis.jpg",
    badge: "ITF Classified",
    specs: ["Multi-Layer Hard Court Acrylic", "Sub-Surface Slope Water Drainage", "Heavy-Duty Perimeter Fencing", "Windbreaker Screening"],
    dimensions: "78x36 ft doubles (120x60 ft total run-off area)",
    idealFor: "Tennis clubs, universities, luxury resorts, private estates"
  }
];

export const EXTENDED_INFRASTRUCTURE = [
  {
    id: "multi-sport",
    title: "Multi-Sport Courts",
    description: "Versatile facilities combining football, cricket, basketball, and volleyball in a unified, space-efficient footprint.",
    badge: "Space Maximizer",
    icon: "LayoutGrid"
  },
  {
    id: "tracks",
    title: "Athletic & Jogging Tracks",
    description: "Polyurethane synthetic rubber tracks with calibrated shock absorption, reducing impact on runners' joints.",
    badge: "Anti-Injury Tech",
    icon: "Flame"
  },
  {
    id: "play-areas",
    title: "Children's Play Areas",
    description: "Vibrant and safe play zones constructed with seamless EPDM rubber soft-fall flooring and safety-certified structures.",
    badge: "Child Safe EPDM",
    icon: "Smile"
  },
  {
    id: "outdoor-fitness",
    title: "Outdoor Fitness Zones",
    description: "Durable calisthenics rigs and open-gym fitness equipment designed for high-traffic public and residential use.",
    badge: "Heavy Duty Steel",
    icon: "Dumbbell"
  },
  {
    id: "flooring-systems",
    title: "Sports Flooring Systems",
    description: "State-of-the-art interlocking polypropylene tiles, seamless polyurethane, and cushioned acrylic court solutions.",
    badge: "Certified Systems",
    icon: "Layers"
  },
  {
    id: "sports-lighting",
    title: "Sports Lighting",
    description: "High-mast glare-reducing LED floodlighting calculated for uniform lux distribution and low power consumption.",
    badge: "Optimal Lux Levels",
    icon: "Sun"
  },
  {
    id: "fencing-netting",
    title: "Perimeter Fencing & Safety Netting",
    description: "Galvanized iron chain links, powder-coated structural posts, and UV-stabilized heavy-gauge safety netting.",
    badge: "UV Stabilized",
    icon: "Shield"
  },
  {
    id: "equipment",
    title: "Sports Equipment Installation",
    description: "Regulation goal posts, adjustable basketball hoops, tournament net posts, umpire stands, and spectator seating.",
    badge: "Turnkey Inclusions",
    icon: "Award"
  },
  {
    id: "renovation",
    title: "Ground Renovation & Maintenance",
    description: "Comprehensive surface grooming, infill replenishment, drainage unclogging, seam patching, and court resurfacing.",
    badge: "24/7 Support",
    icon: "Wrench"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Consultation",
    shortDesc: "Understanding your vision, sport selection, space, budget and operational goals.",
    fullDesc: "We engage in deep discovery to understand your target sports, commercial vs institutional model, expected footfall, local climate conditions, and budget constraints.",
    deliverables: ["Requirement documentation", "Initial feasibility analysis", "Budget estimation & timeline forecast"],
    icon: "MessageSquare"
  },
  {
    number: 2,
    title: "Site Assessment",
    shortDesc: "Technical survey of land dimensions, ground stability, accessibility and drainage slope.",
    fullDesc: "Our engineers inspect topography, soil bearing capacity, underground water levels, natural gradient, approach roads for heavy equipment, and municipal permissions.",
    deliverables: ["Topographical survey report", "Drainage gradient mapping", "Soil compaction evaluation"],
    icon: "MapPin"
  },
  {
    number: 3,
    title: "Design & Planning",
    shortDesc: "Developing project-specific architectural layouts, run-off zones and 3D mockups.",
    fullDesc: "We produce CAD schematics factoring in official game boundaries, safety runoff buffers, player dugouts, spectator zones, floodlight pole orientation, and entrance security.",
    deliverables: ["2D/3D CAD site layouts", "Civil foundation engineering drawings", "Lighting lux simulation"],
    icon: "Compass"
  },
  {
    number: 4,
    title: "Material & System Selection",
    shortDesc: "Selecting FIFA-standard turf, acrylic systems, shock pads and floodlights.",
    fullDesc: "We select the exact pile height, yarn density (Dtex), silica sand mesh size, EPDM infill ratios, sub-base gravel aggregate grade, and structural steel fencing gauges.",
    deliverables: ["Material specification sheets", "FIFA / ITF test certification data", "Physical material sample kit"],
    icon: "CheckSquare"
  },
  {
    number: 5,
    title: "Construction & Installation",
    shortDesc: "Precision civil works, perforated drainage, sub-base levelling and turf stitching.",
    fullDesc: "Our skilled crews execute excavation, perforated French drainage installation, 3-layer aggregate compaction, laser levelling, turf unrolling, heat-bonded seam joining, and infill brushing.",
    deliverables: ["Sub-base compaction certificate", "Precision turf seam alignment", "Floodlight & net structure erection"],
    icon: "Hammer"
  },
  {
    number: 6,
    title: "Quality Checks",
    shortDesc: "Rigorous quality inspection against international sports facility criteria.",
    fullDesc: "Every square meter is inspected for surface planarity, drainage run-off rate, infill uniformity, line accuracy, net tensioning, and perimeter fence structural rigidity.",
    deliverables: ["Planarity & gradient inspection", "Infill depth measurement", "Fence pull-test & electrical safety signoff"],
    icon: "CheckCircle2"
  },
  {
    number: 7,
    title: "Testing & Handover",
    shortDesc: "Ball bounce, roll consistency, night lighting lux testing and formal inauguration.",
    fullDesc: "We conduct practical play tests, measure lux output at pitch center and corners, provide facility operating manuals, and conduct official handover to the client.",
    deliverables: ["Facility Handover Certificate", "Operational & maintenance manual", "Staff orientation & first game kickoff"],
    icon: "Trophy"
  },
  {
    number: 8,
    title: "After-Project Support",
    shortDesc: "Continuous maintenance guidance, infill rejuvenation and emergency repair hotline.",
    fullDesc: "SPORTICON remains your partner long after handover. We offer scheduled grooming, mechanical brushing, infill top-ups, net repairs, and 24-hour maintenance assistance.",
    deliverables: ["Scheduled periodic grooming", "Quick-response repair hotline", "Surface longevity warranty"],
    icon: "Headphones"
  }
];

export const WHY_US_PILLARS = [
  {
    id: "experience",
    stat: "10+",
    label: "Years of Industry Experience",
    title: "A Decade of Sports Engineering",
    description: "Deep domain knowledge in civil foundations, climate-resilient drainage, and specialized sports surfacing across diverse terrains."
  },
  {
    id: "projects",
    stat: "250+",
    label: "Completed Projects",
    title: "Proven Track Record",
    description: "From FIFA-grade college arenas to high-earning commercial urban box cricket hubs and government sports complexes."
  },
  {
    id: "end-to-end",
    stat: "100%",
    label: "End-to-End Execution",
    title: "Single Point Accountability",
    description: "No dealing with scattered subcontractors. We manage civil engineering, lighting, turf installation, and fencing from concept to completion."
  },
  {
    id: "custom",
    stat: "Tailored",
    label: "Customised Project Solutions",
    title: "Engineered For Your Land",
    description: "We optimize your available dimensions to maximize playable area, commercial revenue, and player safety."
  },
  {
    id: "reach",
    stat: "Pan-India",
    label: "Project Reach",
    title: "Nationwide Infrastructure Reach",
    description: "Active projects and handed-over facilities across Kerala, Tamil Nadu, Karnataka, Nagaland, and all over India."
  },
  {
    id: "support",
    stat: "24/7",
    label: "Maintenance & Support",
    title: "Guaranteed Facility Upkeep",
    description: "Dedicated service crews, routine turf grooming, infill replenishment, and 24-hour rapid emergency assistance."
  }
];

export const MAJOR_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Loyola College",
    location: "Trivandrum, Kerala",
    category: "Football Turf & Multi-Sport",
    area: "32,000 sq ft",
    year: "Completed",
    highlight: "FIFA standard artificial football turf with sub-surface herringbone drainage and 400W stadium LED array.",
    image: "/images/hero.jpeg"
  },
  {
    id: "p2",
    title: "Loyola School",
    location: "Trivandrum, Kerala",
    category: "Campus Sports Infrastructure",
    area: "18,500 sq ft",
    year: "Completed",
    highlight: "Dual-purpose synthetic turf football arena and FIBA standard multi-layer acrylic basketball court.",
    image: "/images/cards/football.jpg"
  },
  {
    id: "p3",
    title: "Kerala Police Ground",
    location: "Kannur, Kerala",
    category: "Government Athletic Facility",
    area: "45,000 sq ft",
    year: "Completed",
    highlight: "High-endurance football turf and athletic physical training zone built for rigorous institutional usage.",
    image: "/images/about-turf.jpg"
  },
  {
    id: "p4",
    title: "Escolca International",
    location: "Kodiyathur, Kerala",
    category: "International School Arena",
    area: "24,000 sq ft",
    year: "Completed",
    highlight: "Multi-sport arena with 50mm monofilament turf, heavy-gauge perimeter safety cages and night illumination.",
    image: "/images/cards/football.jpg"
  },
  {
    id: "p5",
    title: "Choomadipara Football Stadium",
    location: "Chimpur, Nagaland",
    category: "Stadium Level Project",
    area: "65,000 sq ft",
    year: "Completed",
    highlight: "Full-scale stadium turf installation in high-rainfall hill terrain featuring specialized gravel filtration civil works.",
    image: "/images/cards/football.jpg"
  },
  {
    id: "p6",
    title: "BTA Football Academy",
    location: "Ponani, Kerala",
    category: "Elite Sports Academy",
    area: "28,000 sq ft",
    year: "Completed",
    highlight: "Professional training grounds with shock-pad underlay designed for youth athletic development and agility drills.",
    image: "/images/hero.jpeg"
  },
  {
    id: "p7",
    title: "Bypass Arena",
    location: "Malappuram, Kerala",
    category: "Commercial Turf & Box Cricket",
    area: "20,000 sq ft",
    year: "Completed",
    highlight: "High-earning commercial sports complex with twin 7-a-side football turfs and rooftop box cricket arena.",
    image: "/images/cards/football.jpg"
  },
  {
    id: "p8",
    title: "Kovakkulam Sports Hub",
    location: "Coimbatore, Tamil Nadu",
    category: "Pickleball & Artificial Turf",
    area: "22,000 sq ft",
    year: "Completed",
    highlight: "Twin pickleball tournament courts coupled with a 6-a-side artificial football turf arena and cafe pavilion.",
    image: "/images/cards/pickleball.jpg"
  },
  {
    id: "p9",
    title: "Fort Turf Academy",
    location: "Kallurichira, Kerala",
    category: "Premier Football Turf",
    area: "19,500 sq ft",
    year: "Completed",
    highlight: "Premium monofilament turf with 30ft perimeter netting, dugouts, locker rooms, and automated water-cooling system.",
    image: "/images/cards/football.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Pricing & Investment",
    question: "How much does it cost to construct a football turf?",
    answer: "The cost depends on the size of the facility (e.g. 5-a-side vs 7-a-side), natural land slope, civil foundation works, drainage system specifications, turf pile height (40mm - 55mm), perimeter fencing height, and lighting lux requirements. A project-specific quotation after our site assessment is the most accurate way to estimate your total investment."
  },
  {
    category: "Timeline & Delivery",
    question: "How long does turf construction take?",
    answer: "A standard 5-a-side or 7-a-side turf typically takes 25 to 45 working days, depending on site readiness, local soil conditions, civil levelling needs, weather factors, and material selections. We provide a structured milestone schedule prior to commencement."
  },
  {
    category: "Scope of Work",
    question: "Do you provide complete turnkey construction?",
    answer: "Yes, SPORTICON offers 100% turnkey execution. Our scope covers initial soil survey, architectural planning, excavation and civil grading, sub-surface perforated drainage, sub-base aggregate compaction, turf laying and seam bonding, infill application, GI structural fencing, high-impact netting, LED floodlights, and player dugouts."
  },
  {
    category: "Site Suitability",
    question: "Can you construct a turf on my existing land?",
    answer: "Yes! We can construct on bare agricultural land, uneven soil, rocky ground, rooftop slabs, or existing outdoor concrete surfaces. Our engineering team conducts a thorough site evaluation to design suitable levelling, retaining walls, and water drainage customized for your plot."
  },
  {
    category: "Land Requirements",
    question: "What size of land is required for a football turf?",
    answer: "A standard 5-a-side football turf requires approximately 6,000 to 8,000 sq ft (including safety runoff boundaries). A 7-a-side arena typically requires 12,000 to 16,000 sq ft. For multi-sport or box cricket, compact sizes from 3,500 to 5,000 sq ft can also be transformed into thriving sporting spaces."
  },
  {
    category: "Maintenance",
    question: "Do you provide turf maintenance?",
    answer: "Yes! SPORTICON provides comprehensive after-project support. This includes periodic mechanical grooming, power brushing to stand yarn upright, decompaction and replenishment of rubber/silica infill, seam inspection, netting repairs, and 24-hour emergency technical support."
  },
  {
    category: "Quotation Process",
    question: "What information is needed to get a quotation?",
    answer: "Simply share your location (city/state), approximate land dimensions (length x width or total sq ft), intended sport (football, cricket, pickleball, etc.), project timeline, and preferred facilities. You can submit this via our website quote form or connect directly with our engineers via WhatsApp."
  }
];

