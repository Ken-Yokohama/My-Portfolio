interface Project {
    featuredProject: boolean;
    year: string;
    month: string;
    name: string;
    title: string;
    description: string;
    details: string[];
    technologies: string[];
    liveSiteLink?: string;
    githubRepoLink?: string;
    hasProjectPage?: boolean;
    backgroundImgUrl: string;
}

const allProjects: Project[] = [
    {
        featuredProject: true,
        year: "2023",
        month: "June",
        name: "bug-tracker",
        title: "Bug Tracker",
        description:
            "This Bug Tracking System is a full-stack software issue management web application that allows developers to create tickets for their projects and admins to manage the progress of each project using NodeJS & Express in the back end, MongoDB as the database and React in the front end",
        details: [""],
        technologies: [
            "MongoDB",
            "ExpressJS",
            "React",
            "NodeJS",
            "Redux",
            "Typescript",
        ],
        liveSiteLink: "https://ken-yokohama.github.io/Bug-Tracking-System",
        githubRepoLink: "https://github.com/Ken-Yokohama/Bug-Tracking-System",
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/bug-tracker-multi-1.webp",
    },
    {
        featuredProject: true,
        year: "2023",
        month: "June",
        name: "entrego-cash",
        title: "Entrego Cash Management System",
        description: "Online Task and Workflow Automation Platform",
        details: [""],
        technologies: [
            "React",
            "Typescript",
            "Redux",
            "SASS",
            "Java",
            "Spring",
            "AWS SQS",
            "AWS S3",
        ],
        liveSiteLink: undefined,
        githubRepoLink: undefined,
        hasProjectPage: true,
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/cash-multi-1.webp",
    },
    {
        featuredProject: true,
        year: "2023",
        month: "May",
        name: "entrego-dev",
        title: "Entrego Developer Portal",
        description: "Online E-Commerce Management Platform",
        details: [""],
        technologies: [
            "NextJS",
            "Typescript",
            "Redux",
            "SASS",
            "Python",
            "Django",
            "PostgreSQL",
        ],
        liveSiteLink: undefined,
        githubRepoLink: undefined,
        hasProjectPage: true,
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/dvp-desktop-1.webp",
    },
    {
        featuredProject: true,
        year: "2022",
        month: "Oct",
        name: "entrego-bid",
        title: "Entrego Bidding System",
        description: "Online Task and Workflow Automation Platform",
        details: [""],
        technologies: [
            "React",
            "Typescript",
            "Redux",
            "SASS",
            "Java",
            "Spring",
            "Python",
            "Django",
            "PostgreSQL",
        ],
        liveSiteLink: undefined,
        githubRepoLink: undefined,
        hasProjectPage: true,
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/bid-multi-1.webp",
    },
    {
        featuredProject: true,
        year: "2022",
        month: "June",
        name: "entrego-hub",
        title: "Entrego Hub Management System",
        description: "Enterprise IT Service Management Platform",
        details: [""],
        technologies: [
            "React",
            "Typescript",
            "Redux",
            "SASS",
            "Java",
            "Spring",
            "Python",
            "Django",
            "PostgreSQL",
            "AWS SQS",
            "AWS S3",
            "AWS SNS",
            "AWS SES",
        ],
        liveSiteLink: undefined,
        githubRepoLink: undefined,
        hasProjectPage: true,
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/hms-multi-1.webp",
    },
    {
        featuredProject: true,
        year: "2022",
        month: "June",
        name: "entrego-claims",
        title: "Entrego Claims Management System",
        description: "Online Task and Workflow Automation Platform",
        details: [""],
        technologies: [
            "React",
            "Typescript",
            "Redux",
            "SASS",
            "Python",
            "Django",
            "PostgreSQL",
            "AWS S3",
            "AWS SES",
        ],
        liveSiteLink: undefined,
        githubRepoLink: undefined,
        hasProjectPage: true,
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/claims-multi-1.webp",
    },
    {
        featuredProject: true,
        year: "2022",
        month: "MAR",
        name: "twitter-clone",
        title: "Twitter Clone",
        description:
            "Twitter Clone is a full-stack social media web application similar to the popular website Twitter created using React in the front end and Firebase to handle the Database, Authentication & Security.",
        details: [""],
        technologies: [
            "REACT",
            "FIREBASE",
            "MATERIAL UI",
            "REACT ROUTER",
            "BAD WORDS",
        ],
        liveSiteLink: "https://ken-yokohama.github.io/Twitter-Clone",
        githubRepoLink: "https://github.com/Ken-Yokohama/Twitter-Clone",
        backgroundImgUrl:
            "/images/home-page/project-backgrounds/twitter-clone.JPG",
    },
    {
        featuredProject: false,
        year: "2022",
        month: "FEB",
        name: "kenterest",
        title: "Kenterest",
        description:
            "Kenterest is a full-stack social media photo sharing web application similar to the popular website Pinterest created using React in the Frontend and Sanity.io as the CMS.",
        details: [""],
        technologies: [
            "REACT",
            "SANITY.IO",
            "TAILWIND CSS",
            "REACT ROUTER",
            "UUID",
        ],
        liveSiteLink: "https://kenterest.netlify.app/",
        githubRepoLink: "https://github.com/Ken-Yokohama/Kenterest",
        backgroundImgUrl: "/images/home-page/project-backgrounds/kenterest.JPG",
    },
    {
        featuredProject: false,
        year: "2022",
        month: "MAR",
        name: "ka-chat",
        title: "Ka-Chat!",
        description:
            "Ka-Chat! is a full-stack realtime chat application created using React in the Frontend and Firebase as the CMS.",
        details: [""],
        technologies: [
            "TYPESCRIPT",
            "REACT",
            "FIREBASE",
            "MATERIAL UI",
            "REACT ROUTER",
        ],
        liveSiteLink: "https://ken-yokohama.github.io/Ka-Chat/",
        githubRepoLink: "https://github.com/Ken-Yokohama/Ka-Chat",
        backgroundImgUrl: "/images/home-page/project-backgrounds/ka-chat.JPG",
    },
    {
        featuredProject: false,
        year: "",
        month: "",
        name: "mailchimp-api",
        title: "MailChimp API Newsletter Sign Up Page",
        technologies: ["nodeJS", "expressJS", "mailChimp API"],
        description:
            "This is a web application that uses the MailChimp API to subscribe users to my personal mailing list. In the Mailchimp database, we are able to organize each user and filter which content we want to send for individual users. Additionally, using the MailChimp api allows us to sync all data (subscriber, customers, orders, products) and enables marketing automation with email campaigns, automations, ads, postcards and more.",
        details: [""],
        liveSiteLink: "https://still-garden-96667.herokuapp.com/",
        githubRepoLink:
            "https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#mailchimp-api-newsletter-signup",
        backgroundImgUrl: "",
    },
    {
        featuredProject: false,
        year: "",
        month: "",
        name: "ejs-to-do-list",
        title: "EJS Express To Do List App",
        technologies: ["nodeJS", "expressJS", "Mongo DB", "EJS"],
        description:
            "This is a simple web application that uses MongoDB as the database and EJS for templating as well as partials for components. The frontend displays the current date & month at the top. Input feilds allows users to input any tasks they have for the given day. Users can also crossout any tasks that have been completed.",
        details: [""],
        liveSiteLink: "https://to-do-list-using-mongodb-atlas.herokuapp.com/",
        githubRepoLink:
            "https://github.com/Ken-Yokohama/Node-Express-JS-Training-Files#ejstodoist-v1",
        backgroundImgUrl: "",
    },
    {
        featuredProject: false,
        year: "",
        month: "",
        name: "psbsi",
        title: "PSBSI",
        technologies: ["HTML", "CSS", "JS", "JQUERY", "BOOTSTRAP"],
        details: [""],
        description:
            "This is the landing page for the company Pioneer Specialty Building Systems Inc. The website displays all completed & upcoming projects done by the company as well as details on its building systems such as Waterproofing, Eifs & Sips.",
        liveSiteLink: "https://ken-yokohama.github.io/psbsi/",
        githubRepoLink: "https://github.com/Ken-Yokohama/psbsi",
        backgroundImgUrl: "",
    },
    {
        featuredProject: false,
        year: "",
        month: "",
        name: "tindog",
        title: "Tindog",
        technologies: ["HTML", "CSS", "JS", "BOOTSTRAP"],
        details: [""],
        description:
            "This is a simple static webpage used as a parody of Tinder... But for Dogs! This project was mainly used to learn basic CSS design patterns as well as responsive design using the Bootstrap grid system.",
        liveSiteLink: "https://ken-yokohama.github.io/TinDog/",
        githubRepoLink: "https://github.com/Ken-Yokohama/TinDog",
        backgroundImgUrl: "",
    },
];

export const featuredProjects = allProjects.filter(
    (project) => project.featuredProject
);

export const projects = allProjects.filter(
    (project) => !project.featuredProject
);

export const projectPages = featuredProjects.filter(
    (project) => project.hasProjectPage
);
