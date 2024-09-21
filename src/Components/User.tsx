import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

const Info = {
    name: "Vishal Singh",
    stack: ["Full Stack Developer", "Freelancer"],
    bio: "I'm a passionate Full Stack Developer and provide freelance services that exceed client expectations and also passionate about continuous learning and adapting to new technologies and committed to helping businesses bring their digital visions to life Let's connect and create something amazing together!!!"
}



const ProjectInfo = [
    {
        title: "Portfolio",
        desc: "This is my personal Portfolio",
        image: "profile.png",
        live: false,
        technologies: ["React", "Tailwind"],
        link: "https://vishalpf.vercel.app/",
        github: "https://github.com/itsvishal-singh/React_Animated_Portfolio"
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
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
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