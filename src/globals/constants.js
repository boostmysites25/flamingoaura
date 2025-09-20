import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";
import mobiledevelopment from "../assets/images/png/mobile-development.png";
import webdevelopment from "../assets/images/png/webdevelopment.png";
import aicalling from "../assets/images/png/aicalling.png";
// Portfolio images - Web Development
import FiveGHomesWebImg from "../assets/web-development/5ghomes.webp";
import ColdCreekcapWebImg from "../assets/web-development/cold-creekcap.webp";
import ThinkRealityWebImg from "../assets/web-development/think-reality.webp";
import AkashMegaMartWebImg from "../assets/web-development/akash-mega-mart.webp";
import MidwamWebImg from "../assets/web-development/midwam.webp";

// Portfolio images - App Development
import AkashMegaMartAppImg from "../assets/app-development/akash_mega_mart-app.webp";
import FeelitAppImg from "../assets/app-development/feelit_app.webp";
import KlikomicsAppImg from "../assets/app-development/klikomics.webp";
import AutosnapAppImg from "../assets/app-development/autosnap-app.webp";
import RentopAppImg from "../assets/app-development/rentop.webp";

const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export const companyDetails = {
  name: "Flamingo",
  number: "+91-7330690244",
  address: "126-A Nandi paradise",
  email: "info@flamingoaura.com",
};

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const ourServices = [
  {
    image: webdevelopment,
    heading: "Web Development Services",
    shortDescription:
      "Custom-built websites designed for performance, user experience, and business growth.",
    description:
      "A well-designed and functional website is the cornerstone of any successful online presence. At Flamingo, we specialize in developing custom websites that not only look great but also provide a smooth user experience across all devices. Our websites are optimized for speed, security, and SEO, ensuring you attract and retain visitors while achieving your business goals.",
  },
  {
    image: mobiledevelopment,
    heading: "App Development Services",
    shortDescription:
      "High-performance mobile apps tailored to engage users and enhance business operations.",
    description:
      "In a mobile-first world, having a robust and feature-rich mobile application is essential for businesses aiming to improve customer engagement and streamline operations. We offer tailored solutions for both iOS and Android platforms, ensuring intuitive user experiences, seamless functionality, and long-term scalability.",
  },
  {
    image: aicalling,
    heading: "AI-Powered Calling Solutions",
    shortDescription:
      "Revolutionizing customer interactions with AI-driven calling and automation.",
    description:
      "Artificial Intelligence is transforming customer service, making interactions more efficient and personalized. Our AI-powered calling solutions automate inbound and outbound communications, improving customer support, lead generation, and operational efficiency. With 24/7 availability and advanced analytics, businesses can enhance customer satisfaction while reducing costs.",
  },
];

export const whyChooseUs = {
  mainHeading:
    "At Flamingo, we prioritize delivering high-quality, customized solutions that help businesses thrive in the digital landscape. Here’s why clients trust us as their technology partner.",
  details: [
    {
      image: imageOne,
      heading: "Tailored Solutions",
      description:
        "We understand that every business is unique, which is why we create customized solutions tailored to your specific needs and goals. Whether it’s web development, mobile apps, or AI-driven technology, we work closely with you to develop solutions that drive real impact and success.",
    },
    {
      image: imageTwo,
      heading: "Expert Team",
      description:
        "Our team is composed of experienced developers, designers, and AI specialists dedicated to providing top-tier digital solutions. With expertise across multiple industries, we ensure that every project is executed with precision, innovation, and a deep understanding of your business needs.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "Technology is constantly evolving, and so are we. We stay ahead of industry trends by integrating the latest advancements in AI, machine learning, and web technologies to provide cutting-edge solutions that keep your business competitive and future-ready.",
    },
  ],
};

export const ourlandingServices = {
  webServices: [
    {
      image: require("../assets/images/png/laptop.png"),
      heading: "E-commerce Solutions",
      description: "Boost your sales with custom-designed online stores.",
    },
    {
      image: require("../assets/images/png/maintenance.png"),
      heading: "Website Maintenance",
      description: "Keeping your site updated and running smoothly.",
    },
    {
      image: require("../assets/images/png/computer.png"),
      heading: "SEO Optimization",
      description:
        "Ensuring your site is easily found with on-page SEO best practices.",
    },
    {
      image: require("../assets/images/png/web-design.png"),
      heading: "Custom Web Design",
      description:
        "Tailored websites that reflect your brand and engage your target audience",
    },
    {
      image: require("../assets/images/png/responsive-design.png"),
      heading: "Responsive Design",
      description:
        "Seamless user experience across all devices—desktop, tablet, and mobile.",
    },
  ],
  appServices: [
    {
      image: require("../assets/images/png/application.png"),
      heading: "Custom App Development",
      description: "Tailored apps designed for your unique business needs.",
    },
    {
      image: require("../assets/images/png/cloud-sync.png"),
      heading: "Cross-Platform Solutions",
      description:
        "Apps that perform seamlessly across iOS, Android, and web platforms.",
    },
    {
      image: require("../assets/images/png/user-experience.png"),
      heading: "UX/UI Design",
      description:
        "Intuitive and attractive designs for an outstanding user experience.",
    },
    {
      image: require("../assets/images/png/maintenance.png"),
      heading: "Backend Development",
      description: "Secure and scalable backend services to support your app.",
    },
    {
      image: require("../assets/images/png/maintenance.png"),
      heading: "App Maintenance and Updates",
      description: "Ensuring your app stays up-to-date and fully functional.",
    },
  ],
};

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesWebImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
    projectId: "5g-homes"
  },
  {
    id: 2,
    img: ColdCreekcapWebImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
    projectId: "cold-creekcap"
  },
  {
    id: 3,
    img: ThinkRealityWebImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
    projectId: "think-reality"
  },
  {
    id: 4,
    img: AkashMegaMartWebImg,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
    projectId: "akash-mega-mart"
  },
  {
    id: 5,
    img: MidwamWebImg,
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
    projectId: "midwam"
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartAppImg,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    projectId: "akash-mega-mart-app"
  },
  {
    id: 2,
    img: FeelitAppImg,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    projectId: "feelit-app"
  },
  {
    id: 3,
    img: KlikomicsAppImg,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    projectId: "klikomics-app"
  },
  {
    id: 4,
    img: AutosnapAppImg,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    projectId: "autosnap-app"
  },
  {
    id: 5,
    img: RentopAppImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    projectId: "rentop-app"
  },
];

// Detailed portfolio data for portfolio details pages
export const portfolioDetails = {
  // Web Development Projects
  "5g-homes": {
    id: "5g-homes",
    title: "5G Homes",
    category: "Web Development",
    img: FiveGHomesWebImg,
    link: "https://5ghighspeedinternet.co",
    overview: "A comprehensive website for 5G Homes, showcasing high-speed internet services and solutions. The platform provides detailed information about 5G technology, service packages, and customer support.",
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap", "JavaScript"],
    challenge: "Creating a modern, responsive website that effectively communicates the benefits of 5G technology to potential customers while maintaining fast loading times and excellent user experience.",
    process: "We conducted extensive research on 5G technology, designed user-friendly interfaces, and implemented a content management system for easy updates.",
    solution: "Developed a fast, responsive website with interactive elements, real-time service status, and seamless integration with customer support systems.",
    features: [
      "Responsive Design",
      "Real-time Service Status",
      "Customer Portal",
      "Service Comparison Tool",
      "Contact Integration"
    ],
    duration: "3 months",
    team: "4 developers"
  },
  "cold-creekcap": {
    id: "cold-creekcap",
    title: "Cold Creekcap",
    category: "Web Development",
    img: ColdCreekcapWebImg,
    link: "https://www.coldcreekcap.com",
    overview: "A professional website for Cold Creekcap, featuring their investment services and portfolio management capabilities. The site emphasizes trust, transparency, and financial expertise.",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    challenge: "Building a trustworthy financial services website that instills confidence in potential investors while providing comprehensive information about investment strategies and portfolio performance.",
    process: "We analyzed the financial services industry, created secure data visualization components, and implemented robust security measures for sensitive financial information.",
    solution: "Delivered a secure, professional website with interactive portfolio tracking, investor resources, and seamless integration with financial data systems.",
    features: [
      "Portfolio Tracking",
      "Investment Calculator",
      "Secure Client Portal",
      "Performance Analytics",
      "Document Management"
    ],
    duration: "4 months",
    team: "5 developers"
  },
  "think-reality": {
    id: "think-reality",
    title: "Think Reality",
    category: "Web Development",
    img: ThinkRealityWebImg,
    link: "https://thinkrealty.ae",
    overview: "An innovative real estate platform that combines virtual reality technology with traditional property listings, providing immersive property viewing experiences.",
    techStack: ["React", "Three.js", "WebGL", "Node.js", "MongoDB", "WebRTC"],
    challenge: "Integrating VR technology into a web platform to provide immersive property viewing experiences while maintaining compatibility across different devices and browsers.",
    process: "We researched VR web technologies, developed 3D property models, and created an intuitive interface for virtual property tours.",
    solution: "Built a cutting-edge platform that allows users to take virtual tours of properties, view 360-degree images, and interact with 3D models directly in their browser.",
    features: [
      "Virtual Property Tours",
      "3D Property Models",
      "360° Image Viewing",
      "Interactive Floor Plans",
      "VR Compatibility"
    ],
    duration: "6 months",
    team: "6 developers"
  },
  "akash-mega-mart": {
    id: "akash-mega-mart",
    title: "Akash Mega Mart",
    category: "Web Development",
    img: AkashMegaMartWebImg,
    link: "https://akashmegamart.com/",
    overview: "A comprehensive e-commerce platform for Akash Mega Mart, featuring online shopping, inventory management, and customer relationship tools.",
    techStack: ["React", "Redux", "Node.js", "MongoDB", "Stripe", "AWS"],
    challenge: "Creating a scalable e-commerce platform that can handle high traffic, manage complex inventory, and provide seamless shopping experiences across multiple product categories.",
    process: "We analyzed e-commerce requirements, designed a scalable architecture, and implemented advanced features like real-time inventory tracking and personalized recommendations.",
    solution: "Developed a robust e-commerce platform with advanced search functionality, secure payment processing, and comprehensive admin dashboard for inventory management.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Payment Processing",
      "Inventory Management",
      "Order Tracking",
      "Customer Reviews"
    ],
    duration: "5 months",
    team: "7 developers"
  },
  "midwam": {
    id: "midwam",
    title: "Midwam",
    category: "Web Development",
    img: MidwamWebImg,
    link: "https://www.midwam.com/en/about",
    overview: "A creative agency website for Midwam, showcasing their immersive experience design capabilities and innovative approach to digital solutions.",
    techStack: ["Next.js", "Framer Motion", "Three.js", "GSAP", "Tailwind CSS", "Vercel"],
    challenge: "Creating a visually stunning website that demonstrates Midwam's creative capabilities while maintaining excellent performance and user experience across all devices.",
    process: "We collaborated closely with the design team to create custom animations, interactive elements, and a unique visual identity that reflects their creative expertise.",
    solution: "Delivered an award-winning website with smooth animations, interactive 3D elements, and a portfolio showcase that effectively communicates their creative vision.",
    features: [
      "Interactive Animations",
      "3D Visual Elements",
      "Portfolio Showcase",
      "Case Studies",
      "Contact Integration"
    ],
    duration: "4 months",
    team: "5 developers"
  },
  // App Development Projects
  "akash-mega-mart-app": {
    id: "akash-mega-mart-app",
    title: "Akash Mega Mart Mobile App",
    category: "App Development",
    img: AkashMegaMartAppImg,
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
    overview: "A comprehensive mobile shopping application for Akash Mega Mart, providing customers with a seamless shopping experience on their mobile devices.",
    techStack: ["React Native", "Redux", "Node.js", "MongoDB", "Firebase", "Stripe"],
    challenge: "Creating a mobile app that replicates and enhances the web platform's functionality while providing native mobile features like push notifications and offline capabilities.",
    process: "We analyzed user behavior patterns, optimized the mobile user interface, and implemented native mobile features to enhance the shopping experience.",
    solution: "Developed a feature-rich mobile app with offline shopping capabilities, push notifications for deals, and seamless synchronization with the web platform.",
    features: [
      "Mobile Shopping",
      "Push Notifications",
      "Offline Mode",
      "Barcode Scanner",
      "Loyalty Program",
      "Order Tracking"
    ],
    duration: "4 months",
    team: "5 developers"
  },
  "feelit-app": {
    id: "feelit-app",
    title: "FeelIt Mobile App",
    category: "App Development",
    img: FeelitAppImg,
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
    overview: "An innovative social media application focused on emotional expression and connection, allowing users to share their feelings and connect with others.",
    techStack: ["Flutter", "Firebase", "Dart", "Google Cloud", "Machine Learning", "TensorFlow"],
    challenge: "Building a social platform that encourages authentic emotional expression while maintaining user privacy and creating meaningful connections between users.",
    process: "We conducted extensive user research on emotional expression, developed AI-powered content moderation, and created intuitive interfaces for emotional sharing.",
    solution: "Created a unique social platform with emotion-based matching, AI-powered content suggestions, and privacy-focused features that encourage authentic connections.",
    features: [
      "Emotion Sharing",
      "AI Matching",
      "Privacy Controls",
      "Mood Tracking",
      "Community Features",
      "Content Moderation"
    ],
    duration: "6 months",
    team: "6 developers"
  },
  "klikomics-app": {
    id: "klikomics-app",
    title: "Klikomics Mobile App",
    category: "App Development",
    img: KlikomicsAppImg,
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
    overview: "A comprehensive economics and finance learning application that makes complex economic concepts accessible through interactive content and gamification.",
    techStack: ["React Native", "Node.js", "PostgreSQL", "Chart.js", "WebRTC", "AWS"],
    challenge: "Creating an educational app that makes economics engaging and accessible to users of all levels while providing comprehensive learning resources and progress tracking.",
    process: "We collaborated with economics educators, developed interactive learning modules, and implemented gamification elements to enhance user engagement.",
    solution: "Built an educational platform with interactive lessons, progress tracking, community features, and real-time tutoring capabilities for economics learning.",
    features: [
      "Interactive Lessons",
      "Progress Tracking",
      "Gamification",
      "Live Tutoring",
      "Community Forums",
      "Certification"
    ],
    duration: "5 months",
    team: "7 developers"
  },
  "autosnap-app": {
    id: "autosnap-app",
    title: "AutoSnap Mobile App",
    category: "App Development",
    img: AutosnapAppImg,
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
    overview: "An innovative photography application that uses AI to automatically capture perfect moments, providing intelligent photo suggestions and automated editing.",
    techStack: ["Flutter", "TensorFlow Lite", "OpenCV", "Firebase", "Google ML Kit", "Dart"],
    challenge: "Integrating advanced AI and computer vision technologies into a mobile app to provide intelligent photo capture and editing capabilities while maintaining performance.",
    process: "We researched computer vision algorithms, developed custom AI models for photo analysis, and created an intuitive interface for automated photography features.",
    solution: "Developed an AI-powered photography app with automatic moment detection, intelligent photo suggestions, and advanced editing capabilities powered by machine learning.",
    features: [
      "AI Photo Detection",
      "Auto Capture",
      "Smart Editing",
      "Photo Enhancement",
      "Moment Tracking",
      "Cloud Sync"
    ],
    duration: "4 months",
    team: "5 developers"
  },
  "rentop-app": {
    id: "rentop-app",
    title: "Rentop Bike and Car",
    category: "App Development",
    img: RentopAppImg,
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
    overview: "A comprehensive vehicle rental platform that connects users with bike and car rental services, featuring real-time availability, booking management, and payment processing.",
    techStack: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Stripe", "Firebase"],
    challenge: "Creating a two-sided marketplace that efficiently connects vehicle owners with renters while managing real-time availability, location services, and secure transactions.",
    process: "We analyzed the sharing economy model, integrated mapping and location services, and developed a robust booking and payment system for vehicle rentals.",
    solution: "Built a comprehensive rental platform with real-time vehicle tracking, secure payment processing, user verification, and seamless booking management.",
    features: [
      "Vehicle Discovery",
      "Real-time Tracking",
      "Secure Payments",
      "User Verification",
      "Booking Management",
      "Rating System"
    ],
    duration: "5 months",
    team: "6 developers"
  }
};
