//must be in the order the projects are in the dom
export const projectData: ProjectInfoProps[] = [
  {
    projectTitle: "BuildHub",
    imgUrls: ["/BuildHub2.png"],
    headline: "Elevate Your Fitness and Sports Experience",
    description: `
   BuildHub is a comprehensive fitness platform offering a wide range of fitness services, with multiple certified trainers and instructors to guide you on your fitness journey. Our revamped website now includes a seamless online booking system for registered users to schedule fitness sessions and classes from the comfort of their homes.
   
    `,
    websiteLink: "https://rctapp-dien.vercel.app/",
    githubLink: "https://github.com/babureddyg2308/BuildHub_Rct104",
  },
  {
    projectTitle: "Knowledge Knook",
    imgUrls: [
      "/Knowledge_Knook.png",
      "/Knowledge_Knook2.png",
      "/Knowledge_Knook3.png",
      "/Knowledge_Knook4.png",
    ],
    headline: "Full Stack Application",
    description: `
    Knowledge Knook presents a sophisticated yet user-friendly edu-tech platform, empowering users to create, consume, and rate educational content. It offers seamless account management with secure authentication and email verification. While currently paused, this initiative holds promising potential for future expansion into a comprehensive educational hub.`,
    websiteLink: "https://lg-legends-053-nem-104.vercel.app/",
    githubLink: "https://github.com/kPratik07/LG-Legends_053-NEM104-",
    isMobileApp: true,
  },
  {
    projectTitle: "Cosmos",
    imgUrls: ["/cosmos2.png"],
    headline: "Cosmos: Revolutionizing the Cosmetics Industry with Fresh Perspectives",
    description: `
    Cosmos is a cutting-edge beauty brand that revolutionizes the way you discover, experience, and enjoy cosmetics. By blending innovative product formulations with a user-centric digital platform, Cosmos offers a unique approach to beauty that is both modern and engaging.`,
    websiteLink: "https://github.com/tashwini-p/Cosmos-and-Figma",
    githubLink: "https://github.com/tashwini-p/Cosmos-and-Figma",
  },
];

export interface ProjectInfoProps {
  projectTitle: string;
  imgUrls: string[];
  headline: string;
  description: string;
  websiteLink: string;
  githubLink: string;
  isMobileApp?: boolean;
}
