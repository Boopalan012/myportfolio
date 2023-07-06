import Mypic from '../src/assets/images/ProfilePic.jpg'
import springreact from '../src/assets/images/springreact .jpg'
const logotext = "Boopalan";
const meta = {
    title: "Boopalan",
    description: "I’m Boopalan Full stack devloper,currently working in Just Integrate IT",
};

const introdata = {
    title: "Boopalan",
    animated: {
        first: "Full Stack Developer",
        second: "Java Developer",
        third: "Full stack devloper",
    },
    description: "Proficient in C,Java, HTML, CSS, JavaScript, React, Spring Boot, MySQL, MongoDB, Git, and experienced in building user-friendly and secure web applications.",
    your_img_url: Mypic
};

const dataabout = {
    title: "About Myself",
    aboutme: "I am a dedicated software engineer with a strong academic background in engineering. I have completed my engineering degree and also underwent rigorous training as a full-stack developer. Passionate about web development, I strive to continuously enhance my skills and stay up-to-date with the latest industry trends. With a detail-oriented approach and a drive for excellence, I am committed to delivering high-quality software solutions. I am enthusiastic about tackling challenging projects, leveraging my expertise to create innovative and user-centric applications.",
};
const worktimeline = [{
        jobtitle: "Full stack devloper Trainee",
        where: "Chennai",
        date: "2022",
    },
    {
        jobtitle: "Junior Software Developer",
        where: "Chennai",
        date: "2023",
    },
];

const skills = [{
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "Javascript",
        value: 85,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name:"Java",
        value:"85"
    },
    {
        name:"Spring Boot",
        value:"80"
    },
    
    {
        name:"MYSQL",
        value:"80"
    },
];

const services = [{
        title: " Full Stack Devloper Trainee",
        description:"Certified in Full Stack Java Development from QSpiders Chennai, I possess a strong foundation in both frontend and backend technologies. With hands-on experience in Java, Spring Boot, and front-end frameworks, I am equipped to develop robust and scalable web applications",
    },
    {
        title: "Junior Software Devloper",
        description:"Currently working as a Junior Software Engineer at JustIntegrate IT in Perungudi, Chennai, I contribute to the development of software solutions while continuously expanding my skills in the field. I am actively involved in building and maintaining innovative web applications with a focus on delivering high-quality results.",
    },
];

const dataportfolio = [{
        img: springreact,
        description: "Crud Operation Spring Boot ,React , MySQL",
        link: "",
    }
];

const contactConfig = {
    YOUR_EMAIL: "r.boopalan01@gmail.com",
    YOUR_FONE: "8489699040",
    description: "For any inquiries or collaboration opportunities, feel free to reach out to me—I'm excited to connect and discuss web development projects or opportunities!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_oyviyys",
    YOUR_TEMPLATE_ID: "template_ead33ds",
    YOUR_USER_ID: "BMqiesikFFdcOi8pI",
};


const socialprofils = {
    github: "https://github.com/boopalan012",
    facebook: "#",
    linkedin: "https://linkedin.com",
    twitter: "#",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};