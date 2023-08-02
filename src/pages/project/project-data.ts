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
        description: "Full-stack issue management web application",
        details: [
            "This Bug Tracking System is a full-stack software issue management web application that allows developers to create tickets for their projects and admins to manage the progress of each project using NodeJS & Express in the back end, MongoDB as the database and React in the front end",
        ],
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
        details: [
            "Our team developed an innovative cash management system that combines the power of React in the frontend and Java Spring in the backend for Entrego. This product enables efficient tracking, monitoring, and optimization of cash flows, empowering Entrego to make data-driven financial decisions with ease and accuracy.",
            "As the lead frontend developer of the team, I collaborated closely with stakeholders, product owners and domain experts to gather requirements and understand each of the specific needs to improve UI / UX. This involved conducting thorough discussions and refining the project scope to ensure that the end product would meet all the necessary criteria.",
            "Throughout the development process, I performed rigorous unit testing and debugging to identify and rectify any potential issues, ensuring the application's stability and reliability. Additionally, I collaborated with the backend team to integrate the frontend seamlessly using the Java Spring services, creating a cohesive and efficient data flow. By centralizing cash management, financial teams can analyze trends, forecast cash needs, and optimize cash allocation efficiently. This holistic solution empowers Entrego to stay agile, make informed decisions, and achieve sustainable growth in the ever-changing market.",
        ],
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
        details: [
            "Our collaborative team successfully crafted a developer portal leveraging Next.js and Django technologies, empowering Entrego's growth and innovation. This dynamic platform serves as a centralized hub, providing developers with comprehensive documentation, APIs, and tools to streamline the development process. The Next.js frontend ensures a seamless user experience, while Django's robust backend ensures security and scalability.",
            "By offering an intuitive and feature-rich developer portal, Entrego can attract and engage developers more effectively. The portal fosters a strong developer community, encouraging collaboration and feedback, leading to accelerated product development and enhanced customer experiences.",
            "With our Next.js and Django-powered developer portal, Entrego gains a competitive edge in the market. The platform's seamless integration with your existing systems ensures efficient collaboration between developers and internal teams, reducing development time and costs. Additionally, the portal's comprehensive analytics and tracking capabilities enable you to gain valuable insights into developer behavior, allowing you to make data-driven decisions and continuously optimize the developer experience for long-term success.",
        ],
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
        details: [
            "Our team developed an innovative bidding system using React and Spring for Entrego. This product revolutionizes the way Entrego manages procurement processes, streamlining bids from suppliers and enhancing transparency. By leveraging the power of React's dynamic user interface and Spring's robust backend, the system ensures efficient communication and fosters competitive pricing, empowering Entrego to make well-informed decisions.",
            "With our bidding system, Entrego gains real-time insights into supplier responses, accelerating the evaluation process. The intuitive interface facilitates easy navigation, enabling users to quickly access critical data and submit bids effortlessly.",
            "By implementing our React and Spring-based Taskflow automation system, Entrego experiences enhanced collaboration among teams, faster task completion, and reduced errors. The system's integration with existing tools allows for smooth data exchange, ensuring a seamless transition. Furthermore, the real-time tracking and reporting features enable better decision-making and process optimization. Altogether, the product brings immense value by revolutionizing Entrego's operations and driving significant cost and time savings.",
        ],
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
        details: [
            "Our Hub Management System is an innovative solution developed by our skilled team, integrating React, Django, and Spring technologies. This product empowers companies to efficiently manage their hubs and streamline operations. Through its user-friendly interface, administrators can oversee various processes, from inventory and logistics to personnel and finance, with unparalleled ease.",
            "By leveraging the power of React, Django, and Spring, our system offers seamless integration with other essential company systems, fostering a cohesive and interconnected ecosystem. This synergy optimizes data flow and ensures real-time synchronization across all platforms.",
            "The Hub Management System's robust architecture enables scalability and adaptability, making it suitable for businesses of all sizes and industries. Its key features include centralized hub monitoring, automated reporting, and advanced analytics, empowering decision-makers with valuable insights. Moreover, the system's ability to connect and communicate with external platforms simplifies data exchange and enhances operational efficiency, ultimately driving growth and success for our clients in today's dynamic business landscape.",
        ],
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
        details: [
            "The Claims Management System developed for our company is a powerful and efficient solution that seamlessly integrates React and Django technologies. This comprehensive platform streamlines the entire claims process, enabling our organization to manage and process claims with utmost precision and speed. With an intuitive user interface and robust backend capabilities, our system optimizes workflow and enhances productivity.",
            "Through the React frontend, users can easily submit and track claims, while Django's backend handles data processing, storage, and authentication. The system offers real-time updates and notifications, ensuring transparent communication between clients, employees, and stakeholders.",
            "Our Claims Management System brings unprecedented efficiency and organization to our company's claims handling operations. The seamless interaction between React and Django empowers our team to process claims swiftly, reduce manual errors, and track progress with precision. By providing users with a user-friendly interface, coupled with the robustness of Django's backend, the system ensures a seamless experience for claimants and employees alike, fostering trust and satisfaction in our services.",
        ],
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
        description: "Full-stack social media web application",
        details: [
            "Twitter Clone is a full-stack social media web application similar to the popular website Twitter created using React in the front end and Firebase to handle the Database, Authentication & Security.",
        ],
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
            "/images/home-page/project-backgrounds/twitter-clone.webp",
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
        title: "EJS Express App",
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
        description:
            "This is the landing page for Pioneer Specialty Building Systems Inc. a specialty construction company based in Manila, Philippines. The website follows responsive design practices and displays all completed & upcoming projects done by the company as well as details on its building systems such as Waterproofing, Eifs & Sips.",
        details: [""],
        liveSiteLink: "https://ken-yokohama.github.io/psbsi/",
        githubRepoLink: "https://github.com/Ken-Yokohama/psbsi",
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
