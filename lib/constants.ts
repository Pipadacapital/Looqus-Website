export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  platforms: string[];
  icon: string;
}

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  initials: string;
  role: string;
}

export interface CaseStudy {
  id: number;
  industry: string;
  clientType: string;
  headline: string;
  subline: string;
  result: string;
  color: string;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const STATS: Stat[] = [
  { value: "120", numericValue: 120, suffix: "+", label: "Brands Scaled" },
  { value: "40", numericValue: 40, suffix: "M+", label: "Ad Spend Managed" },
  { value: "3.8", numericValue: 3.8, suffix: "x", label: "Avg. ROAS" },
  { value: "8", numericValue: 8, suffix: " Yrs", label: "of Growth" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Meta & Instagram Ads",
    shortDesc: "Thumb-stopping creative meets precision targeting across Meta's ecosystem.",
    description:
      "We build full-funnel Meta campaigns that move people from awareness to purchase. From prospecting to retargeting, every ad is crafted with platform-native creative and data-driven bidding strategies that maximize your return.",
    deliverables: [
      "Campaign architecture & funnel mapping",
      "Ad creative strategy & copywriting",
      "Audience research & segmentation",
      "A/B testing framework",
      "Weekly performance reporting",
      "Pixel & Conversions API setup",
    ],
    platforms: ["Meta Ads Manager", "Instagram", "Facebook", "WhatsApp"],
    icon: "Megaphone",
  },
  {
    id: 2,
    title: "Google & YouTube Ads",
    shortDesc: "Capture intent and dominate search with high-converting Google campaigns.",
    description:
      "From Search to Performance Max, we build Google campaigns that capture high-intent customers at the exact moment they're ready to buy. Our YouTube strategies build brand equity while driving measurable direct response.",
    deliverables: [
      "Keyword research & competitive analysis",
      "Search, Display & Shopping campaigns",
      "Performance Max strategy",
      "YouTube video ad creative briefs",
      "Landing page CRO recommendations",
      "Conversion tracking & attribution",
    ],
    platforms: ["Google Ads", "YouTube", "Google Analytics 4", "Google Tag Manager"],
    icon: "Search",
  },
  {
    id: 3,
    title: "Shopify Growth & CRO",
    shortDesc: "Turn more visitors into buyers with conversion-focused store optimization.",
    description:
      "Traffic means nothing without conversion. We audit your Shopify store, identify friction points, and implement data-backed improvements that lift your conversion rate and average order value.",
    deliverables: [
      "Full store CRO audit",
      "Heatmap & session recording analysis",
      "A/B testing implementation",
      "Checkout optimization",
      "Email & SMS flow setup",
      "Product page copywriting",
    ],
    platforms: ["Shopify", "Klaviyo", "Hotjar", "Google Optimize"],
    icon: "ShoppingBag",
  },
  {
    id: 4,
    title: "Creative Strategy",
    shortDesc: "Bold, platform-native creative that stops scrolling and starts selling.",
    description:
      "Creative is your most powerful lever in paid media. Our strategists and designers build ad concepts rooted in customer psychology, tested frameworks, and brand storytelling that converts across every channel.",
    deliverables: [
      "Creative strategy document",
      "Ad concept development",
      "Static & motion ad design",
      "Video ad scripting & storyboards",
      "UGC creative direction",
      "Creative performance analysis",
    ],
    platforms: ["Figma", "Adobe Creative Suite", "CapCut", "Canva Pro"],
    icon: "Palette",
  },
  {
    id: 5,
    title: "Analytics & Reporting",
    shortDesc: "Crystal-clear data that tells you exactly what's working and why.",
    description:
      "We build custom reporting dashboards and attribution models so you always know where your money is going and what it's generating. No vanity metrics — only the KPIs that matter for your business.",
    deliverables: [
      "Custom Looker Studio dashboard",
      "Multi-touch attribution setup",
      "Weekly & monthly reports",
      "Cohort & LTV analysis",
      "Channel profitability analysis",
      "Quarterly business reviews",
    ],
    platforms: ["Google Analytics 4", "Looker Studio", "Triple Whale", "Northbeam"],
    icon: "BarChart3",
  },
  {
    id: 6,
    title: "Brand Development",
    shortDesc: "Build a brand identity that makes you unmistakable in your market.",
    description:
      "Before you can scale, you need a brand that stands for something. We help emerging brands define their positioning, messaging, and visual identity so every ad lands with clarity and conviction.",
    deliverables: [
      "Brand positioning workshop",
      "Messaging & tone of voice guide",
      "Visual identity system",
      "Competitor analysis",
      "Brand guidelines document",
      "Go-to-market strategy",
    ],
    platforms: ["Figma", "Miro", "Notion", "Canva Pro"],
    icon: "Sparkles",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Marcus Rivera",
    title: "Founder & CEO",
    bio: "Former head of growth at two DTC unicorns. 10+ years scaling brands through paid media and brand strategy.",
    initials: "MR",
  },
  {
    name: "Sofia Chen",
    title: "Head of Paid Social",
    bio: "Meta Blueprint certified with a track record of managing $20M+ in Meta ad spend for fashion and beauty brands.",
    initials: "SC",
  },
  {
    name: "James Okafor",
    title: "Creative Director",
    bio: "Award-winning creative strategist who has led campaigns for global DTC brands. Obsessed with the psychology of conversion.",
    initials: "JO",
  },
  {
    name: "Priya Nair",
    title: "Director of Analytics",
    bio: "Data scientist turned marketing analyst. Builds attribution models and dashboards that make complex data crystal clear.",
    initials: "PN",
  },
  {
    name: "Tyler Brooks",
    title: "Google Ads Lead",
    bio: "Google Partner certified specialist with deep expertise in Performance Max, Search, and YouTube campaigns.",
    initials: "TB",
  },
  {
    name: "Aisha Kamara",
    title: "Shopify & CRO Specialist",
    bio: "E-commerce strategist with a knack for identifying conversion blockers and turning browsers into repeat buyers.",
    initials: "AK",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Looqus didn't just run our ads — they transformed how we think about growth. Our ROAS went from 1.8x to 4.6x in four months. They're the real deal.",
    name: "Daniel Park",
    company: "Forge Athletic",
    initials: "DP",
    role: "Founder & CEO",
  },
  {
    quote:
      "We'd worked with three agencies before Looqus. None of them came close to the transparency, creativity, and results we get here. Our Meta revenue doubled in six months.",
    name: "Lena Hartmann",
    company: "Bloom Skincare",
    initials: "LH",
    role: "Head of Marketing",
  },
  {
    quote:
      "The creative strategy work alone was worth the entire engagement. Looqus fundamentally shifted how we communicate our brand — and the conversion numbers prove it.",
    name: "Chris Adeyemi",
    company: "Crest Home",
    initials: "CA",
    role: "Co-Founder",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    industry: "Athletic Apparel",
    clientType: "DTC E-Commerce",
    headline: "3.2x ROAS in 60 Days",
    subline: "Meta & Google full-funnel rebuild for a performance apparel brand.",
    result: "Revenue up 280% YoY",
    color: "bg-ember",
  },
  {
    id: 2,
    industry: "Beauty & Skincare",
    clientType: "Shopify Brand",
    headline: "$2.1M in 90 Days",
    subline: "Creative-led Meta campaign for a clean beauty product launch.",
    result: "4.8x blended ROAS",
    color: "bg-ink",
  },
  {
    id: 3,
    industry: "Home Goods",
    clientType: "Omnichannel Retail",
    headline: "CPA reduced by 42%",
    subline: "Google Shopping & Performance Max optimization for home décor.",
    result: "18% CVR improvement",
    color: "bg-slate-800",
  },
  {
    id: 4,
    industry: "B2B SaaS",
    clientType: "Tech Startup",
    headline: "Pipeline up 5x",
    subline: "LinkedIn + Google demand gen for a B2B software company.",
    result: "Cost-per-lead down 60%",
    color: "bg-ember",
  },
  {
    id: 5,
    industry: "Food & Beverage",
    clientType: "CPG Brand",
    headline: "National retail launch",
    subline: "Brand development + paid media for a beverage brand's retail expansion.",
    result: "500K+ reach in 30 days",
    color: "bg-ink",
  },
  {
    id: 6,
    industry: "Fitness & Wellness",
    clientType: "Subscription Model",
    headline: "LTV up 2.3x",
    subline: "Retention-focused email, paid social & CRO for a wellness subscription.",
    result: "Churn reduced by 35%",
    color: "bg-slate-800",
  },
];

export const VALUES: Value[] = [
  {
    number: "01",
    title: "Bold Creativity",
    description:
      "We believe the best ads don't feel like ads. Every piece of creative we build is designed to earn attention, not demand it — rooted in insight, crafted with intention.",
  },
  {
    number: "02",
    title: "Data Integrity",
    description:
      "We don't hide behind vanity metrics. Every report we send reflects the full picture — what's working, what isn't, and exactly what we're doing about it.",
  },
  {
    number: "03",
    title: "Client Partnership",
    description:
      "Your brand's success is our scorecard. We embed ourselves in your business, learn what drives your customers, and treat your budget with the care of our own.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Deep dive into your brand, market, competitors, and customer data.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Build a bespoke growth roadmap with channel, budget, and creative strategy.",
  },
  {
    number: "03",
    title: "Create",
    description: "Develop platform-native ad creative and copy informed by data.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Execute campaigns with precise targeting and conversion tracking.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Continuously test, iterate, and reallocate budget toward what wins.",
  },
  {
    number: "06",
    title: "Scale",
    description: "Identify scaling opportunities and expand into new channels and markets.",
  },
];

export const PLATFORMS = [
  { name: "Meta", abbr: "META" },
  { name: "Google", abbr: "GOOG" },
  { name: "Shopify", abbr: "SHPY" },
  { name: "TikTok", abbr: "TKTK" },
  { name: "LinkedIn", abbr: "LNKD" },
  { name: "Pinterest", abbr: "PINT" },
];

export const PRIVACY_SECTIONS = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with our team. This includes your name, email address, phone number, company name, and any other information you choose to provide.

We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about your use of our site through cookies and similar tracking technologies.`,
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Your Information",
    content: `We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and fulfill your requests; send you technical notices, updates, and support messages; send marketing communications (where permitted by law); and monitor and analyze trends and usage.

We process your data based on your consent, the necessity to perform a contract, compliance with legal obligations, and our legitimate business interests in operating and improving our services.`,
  },
  {
    id: "advertising-platforms",
    number: "03",
    title: "Advertising Platform Data",
    content: `As a digital advertising agency, we access and process data through third-party advertising platforms including Meta (Facebook/Instagram), Google Ads, Shopify, TikTok, LinkedIn, and Pinterest on behalf of our clients.

This data is processed under our clients' data processing agreements with those platforms. We act as a data processor for our clients and comply with each platform's terms of service, data use policies, and applicable privacy regulations including GDPR and CCPA.`,
  },
  {
    id: "data-sharing",
    number: "04",
    title: "Data Sharing & Disclosure",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.

We may also disclose your information when we believe disclosure is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.`,
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies & Tracking Technologies",
    content: `We use cookies, web beacons, and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device).`,
  },
  {
    id: "data-security",
    number: "06",
    title: "Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. These measures include encryption, access controls, and regular security assessments.

However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`,
  },
  {
    id: "data-retention",
    number: "07",
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. When determining the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.

Client campaign data is retained for a minimum of 36 months to support performance analysis and compliance requirements, unless otherwise agreed upon in the client services agreement.`,
  },
  {
    id: "your-rights",
    number: "08",
    title: "Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information. These may include the right to access, correct, or delete your personal data; the right to restrict or object to processing; the right to data portability; and the right to withdraw consent at any time where processing is based on consent.

To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days. We may need to verify your identity before fulfilling your request.`,
  },
  {
    id: "gdpr",
    number: "09",
    title: "GDPR Compliance",
    content: `For individuals in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). Our legal bases for processing personal data include: performance of a contract, compliance with legal obligations, protection of vital interests, legitimate interests, and consent.

If you are in the EEA and have concerns about our data processing practices, you have the right to lodge a complaint with your local data protection authority. Our Data Protection Officer can be contacted at accounts@looqus.com.`,
  },
  {
    id: "ccpa",
    number: "10",
    title: "CCPA Rights (California)",
    content: `If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know about personal information collected, disclosed, or sold; the right to delete personal information; the right to opt-out of the sale of personal information; and the right to non-discrimination for exercising your CCPA rights.

We do not sell personal information to third parties. To submit a CCPA request, please contact us at accounts@looqus.com or call our toll-free number. We will respond within 45 days of receiving your request.`,
  },
  {
    id: "third-party-links",
    number: "11",
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites, including advertising platforms, analytics tools, and partner services. These sites have their own privacy policies, which we encourage you to review. We have no responsibility or liability for the content, privacy practices, or activities of any linked sites.

Third-party services we use include Google Analytics (analytics), Meta Pixel (advertising), and various advertising platform tools. Each of these services has its own privacy policy governing data use.`,
  },
  {
    id: "policy-changes",
    number: "12",
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last Updated" date.

We encourage you to review this privacy policy periodically for any changes. Your continued use of our website and services after any changes to this privacy policy constitutes your acceptance of the updated policy.`,
  },
];
