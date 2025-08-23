import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";
import mobiledevelopment from "../assets/images/png/mobile-development.png";
import webdevelopment from "../assets/images/png/webdevelopment.png";
import aicalling from "../assets/images/png/aicalling.png";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";

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
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
