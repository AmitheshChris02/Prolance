import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  srmRmp,
  easwari,
} from "../assets";

import bits from "../assets/logos/bits.png";
import nit from "../assets/logos/nit.svg";
import srm from "../assets/logos/srm.png";
import vit from "../assets/logos/vit.png";
import anna from "../assets/logos/anna.png";

import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Domains",
    url: "#domains",
  },
  {
    id: "3",
    title: "Referrals",
    url: "#referrals",
  },
  {
    id: "4",
    title: "Contact",
    url: "#contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [vit, srm, anna, bits, nit, srmRmp, easwari];

export const brainwaveServices = [
  "Final Year Projects",
  "UI/UX Design Services",
  "Domain Mini Projects",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI/ML Projects",
    text: "Cutting-edge Artificial Intelligence and Machine Learning projects for final year students and research.",
    date: "Trending",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Cybersecurity",
    text: "Advanced security protocols, encryption techniques, and network defense systems.",
    date: "High Demand",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Full Stack Development",
    text: "Complete web and mobile application development using modern frameworks like React, Node, and Flutter.",
    date: "Popular",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Blockchain",
    text: "Decentralized applications, smart contracts, and secure ledger technologies.",
    date: "Emerging",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// export const collabText =
//   "Earn rewards by referring friends! Get ₹250 OFF per referral and 50% OFF after 5 referrals.";

export const collabContent = [
  {
    id: "0",
    title: "Refer your Friend and get ₹250 OFF for the first referral",

  },
  {
    id: "1",
    title: "50% OFF for 5 referrals",
  },
  {
    id: "2",
    title: "Instant Rewards",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Mini Projects",
    description: "Perfect for semester submissions and learning",
    price: "200",
    features: [
      "Domain Mini Projects designed to boost your resume",
      "Domains: AI/ML, Full Stack, Blockchain, Cybersecurity",
      "Basic Documentation and installation support",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "Final Year \nProject (Our Topic)",
    description: "Complete support for final year students",
    price: "5,000",
    features: [
      "Support until final review",
      "1 on 1 explanation and installation support",
      "Report and PPT : (+₹500)",
      "IEEE Paper/Journal Paper : (+₹3000)",
    ],
    premium: true,
  },
  {
    id: "2",
    title: "Final Year \nProject (Client Topic)",
    description: "Complete support for final year students",
    price: "5,500",
    features: [
      "Support until final review",
      "1 on 1 explanation and installation support",
      "Report and PPT : (+₹500)",
      "IEEE Paper/Journal Paper : (+₹3000)",
    ],
    premium: true,
  },
  {
    id: "3",
    title: "UI/UX Design",
    description: "Professional design services for your apps",
    price: "2,500",
    features: [
      "1 on 1 consultation and support until acceptance",
      "Mobile UI & Web UI responsive",
      "Convert prototype into functional website",
      "Modern & Clean Designs",
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "End-to-End Support",
    text: "We provide complete guidance from topic selection to final review, ensuring you succeed.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "/prolance_purple.svg",
  },
  {
    id: "1",
    title: "Expert Guidance",
    text: "Work with professionals who have deep knowledge in AI, ML, Full Stack, and more.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: "/prolance_purple.svg",
    light: true,
  },
  {
    id: "2",
    title: "On-Time Delivery",
    text: "We value your time and ensure all projects and reports are delivered before the deadline.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "/prolance_purple.svg",
  },
  {
    id: "3",
    title: "Affordable Pricing",
    text: "Student-friendly pricing packages without compromising on quality or support.",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: "/prolance_purple.svg",
    light: true,
  },
  {
    id: "4",
    title: "Conference Support",
    text: "Get assistance with publishing your work in conferences and journals.",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: "/prolance_purple.svg",
  },
  {
    id: "5",
    title: "Resume Boosting",
    text: "Projects designed to enhance your portfolio and increase your employability.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "/prolance_purple.svg",
  },
];

export const socials = [
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/prolance.technologies/",
  },
];
