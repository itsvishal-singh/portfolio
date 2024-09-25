import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const Info = {
    name: "Vishal Singh",
    stack: ["Full Stack Developer", "Freelancer"],
    bio: "I'm a passionate Full Stack Developer and provide freelance services that exceed client expectations and also passionate about continuous learning and adapting to new technologies and committed to helping businesses bring their digital visions to life Let's connect and create something amazing together!!!"
}



const ProjectInfo = [
    {
        title: "Personal Portfolio",
        desc: "This is my personal Portfolio",
        image: "portfolio.png",
        live: false,
        technologies: ["React", "Tailwind", "Firebase"],
        link: "https://itsvishal-singh.github.io/portfolio/",
        github: "https://github.com/itsvishal-singh/portfolio"
    },
    {
        title: "GYM Management",
        desc: "Developed a responsive GYM management website using React & Tailwind",
        image: "gym.png",
        live: false,
        technologies: ["React + Vite", "Tailwind"],
        link: "https://vishalgym.vercel.app/",
        github: "https://github.com/itsvishal-singh/Frontend"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS","Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "MongoDB"]
    }
]
const socialLinks = [
    { link: "https://github.com/itsvishal-singh", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/itsvishal_singh", icon: IconBrandInstagram }
];


const ExperienceInfo = [
    {
        role: "Internship",
        company: "IBM SkillsBuild Frontend Web Development Summer Internship ",
        date: "25th June 2024 – 5th August 2024",
        desc: "Led a group internship project as the team leader, overseeing 6 team members and successfully managing frontend of GYM management website",
        skills: ["Tailwind", "React JS"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "angular",
    "flutter",
    "android",
    "java",
    "react",
    "html5",
    "css3",
    "springboot",
    "nodedotjs",
    "express",
    "mongodb",
    "selenium",
    "nextdotjs",
    "prisma",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };