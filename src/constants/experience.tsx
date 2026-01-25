import { skills } from "./skills";
export const companies = {
  BRAINSTATION: "BrainStation",
  METRICSFLOW: "Metricsflow Inc.",
  TREEHOUSE: "Treehouse Medical Inc.",
  JOIST: "Joist Software Inc.",
  UDACITY: "Udacity",
};

export const years = ["2020", "2021", "2022", "2023", "2024"];

export const positions = {
  FULL_STACK_DEVELOPER: "Full Stack Developer",
  FRONTEND_DEVELOPER: "Frontend Developer",
  TEACHING_ASSISTANT: "Teaching Assistant",
  WEB_ENGINEER: "Web Engineer",
  STUDENT: "Web Development Student",
};

export const experience = [
  {
    company: companies.JOIST,
    position: positions.WEB_ENGINEER,
    startDate: "April 2022",
    endDate: "Present",
    description:
      "Making contractor heroes by developing features and maintaining the Joist web app.",
  },
  {
    company: companies.BRAINSTATION,
    position: positions.TEACHING_ASSISTANT,
    startDate: "January 2022",
    endDate: "September 2022",
    description:
      "Assisted students in their web development joist in the part-time program.",
  },
  {
    company: companies.TREEHOUSE,
    position: positions.FRONTEND_DEVELOPER,
    startDate: "July 2021",
    endDate: "April 2022",
    description: "Developed and maintained web applications for clients.",
  },
  {
    company: companies.METRICSFLOW,
    position: positions.FULL_STACK_DEVELOPER,
    startDate: "January 2021",
    endDate: "June 2021",
    description:
      "Got promoted to a full-stack developer role and did backend work on top of frontend work.",
  },
  {
    company: companies.METRICSFLOW,
    position: positions.FRONTEND_DEVELOPER,
    startDate: "September 2020",
    endDate: "December 2020",
    description: "My first full-time role as a web developer.",
  },
  {
    company: companies.UDACITY,
    position: positions.STUDENT,
    startDate: "July 2020",
    endDate: "November 2020",
    description:
      "Took an online React Nanodegree program in a self-paced setting.",
  },
  {
    company: companies.BRAINSTATION,
    position: positions.TEACHING_ASSISTANT,
    startDate: "May 2020",
    endDate: "August 2020",
    description: "",
  },
  {
    company: companies.BRAINSTATION,
    position: positions.STUDENT,
    startDate: "January 2020",
    endDate: "April 2020",
    description:
      "My first experience with web development. Studied web development full-time.",
  },
];

export const FrontendSkills = {
  HTML: 'HTML',
  CSS: 'CSS',
  JAVASCRIPT: 'Javascript',
  REACT: 'ReactJS',
  REDUX_TOOLKIT: 'Redux Toolkit',
  TYPESCRIPT: 'Typescript',
  BOOTSTRAP: 'Bootstrap',
  MATERIAL_UI: 'Material UI',
  JQUERY: 'jQuery',
  APEX: 'Apex',
  LIGHT_WEB_COMPONENT: 'Light Web Component',
}

export const BackendSkills = {
  EXPRESS: 'Express',
  NODE: 'NodeJS',
}

export const DevelopmentSkills = {
  GIT: 'Git',
  GITHUB: 'GitHub',
  VS_CODE: 'VS Code',
};

export const tools = {
  CURSOR: 'Cursor',
  GIT: 'Git',
  GITHUB: 'GitHub',
  VS_CODE: 'VS Code',
  HEROKU: 'Heroku',
};

export const apiIntegration = {
  APPSFLYER: 'AppsFlyer',
  FRIENDBUY: 'Friendbuy',
  INTERCOM: 'Intercom',
  OPTIMIZELY: 'Optimizely',
  REVENUECAT: 'RevenueCat',
  STRIPE: 'Stripe',
};
export const NonTechnicalSkills = {
  COMMUNICATION: 'Communication',
  PROBLEM_SOLVING: 'Problem Solving',
  TEAMWORK: 'Teamwork',
};
export interface YearlyWork {
  year: string;
  projects: string[];
}

export interface Experience {
  id: string;
  company: string;
  link?: string;
  yearlyWork: YearlyWork[];
  dayToDay?: string[];
  skills: {
    [category: string]: string[];
  };
}

export const experiences: Experience[] = [
  {
    id: 'joist',
    company: companies.JOIST,
    link: 'https://joist.com',
    yearlyWork: [
      {
        year: '2025',
        projects: [
          'Optimizely < > Segment Sync',
          'Heap integration',
          'In app purchase paywall UI revamp',
          'Enabling Promotions on paywall purchase',
          'React-Router v6 Upgrade',
        ],
      },
      {
        year: '2024',
        projects: [
          'Refer & Earn/Friendbuy Integration',
          'Intercom Integration - migration from Zendesk',
          'Optimizely Integration',
        ],
      },
      {
        year: '2023',
        projects: [
          'Google and Apple SSO Signup and Signin - contractors with Apple/Google accounts are able to signup and signup using their respective accounts.',
          'Line Item Markup on Documents - ability to add markup amount and percentage on line items on a document, includes document amount markup deprecation',
          'Usage Limits - contributed to ~11,000 increase of subscriptions on its first round.',
          'Responsive Joist Rewards redirect page to mobile after signup completion.',
        ],
      },
      {
        year: '2022',
        projects: [
          'Ember to React - migrated Settings Page to React code',
          'QuickBooks Integration and Sync UI Revamp',
          'Signup Migration From Ember to React',
          'Password Enhancement',
        ],
      },
    ],
    dayToDay: [
      'Communicate with stakeholders project deliverables',
      'Code reviews with the web team',
    ],
    skills: {
      [skills.FRONTEND]: ['Material UI', 'Javascript', 'ReactJS', 'Typescript', 'Redux Toolkit'],
      [skills.AI_TOOLS]: ['Perplexity', 'Claude'],
      [skills.TESTING]: ['Jest', 'React Testing Library'],
      [skills.NON_TECHNICAL]: ['Communication', 'Problem Solving', 'Leadership', 'Teamwork', 'Code Reviews'],
    },
  },
  {
    id: 'metricsflow',
    company: companies.METRICSFLOW,
    link: 'https://www.linkedin.com/company/metrics-flow/',
    yearlyWork: [
      {
        year: '2021',
        projects: [
          'Created light web components inserted in the Salesforce app',
          'InDesign to create UI elements',
          'Built help webpage using react js',
        ],
      },
      {
        year: '2020',
        projects: [
          'Create data analytics webpage for tracking',
        ],
      },
    ],
    skills: {
      [skills.FRONTEND]: ['Javascript', 'ReactJS', 'Apex', 'Light web component'],
      [skills.NON_TECHNICAL]: ['Communication', 'Design Systems'],
    },
  },
  {
    id: 'udacity',
    company: companies.UDACITY,
    link: 'https://www.udacity.com',
    yearlyWork: [
      {
        year: '2020',
        projects: ['React Nanodegree'],
      },
    ],
    skills: {}
  },
  {
    id: 'treehouse',
    company: companies.TREEHOUSE,
    link: 'https://www.treehouse.com',
    yearlyWork: [
      {
        year: '2020',
        projects: ['React Nanodegree'],
      },
    ],
    skills: {
      [skills.FRONTEND]: ['Javascript', 'ReactJS'],
      [skills.NON_TECHNICAL]: ['Communication', 'Design Systems', 'Problem Solving', 'Teamwork', 'Leadership'],
    }
  },
    {
    id: 'brainstation',
    company: companies.BRAINSTATION,
    link: 'https://www.brainstation.com',
    yearlyWork: [
      {
        year: '2021',
        projects: ['Taught web development in class and remotely', 'Helped students in their web development'],
      },
      {
        year: '2020',
        projects: ['Bandsite - a fanpage for a band built with HTML, CSS, and JavaScript', 'BrainFlix - a video streaming platform built with ReactJS', 'Typing Game - pair programming project, built a typing game with scroring system', 'InStock - a group project where we built a web application to manage an inventory of items'],
      },
    ],
    dayToDay: [
      'During my time as a student, I learned the fundamentals of the web development, including HTML, CSS, and JavaScript.',
      'Paired in small teams to work on projects and assignments to apply the concepts learned in class',
      'Created EaterMeter as my capstone project - a full-stack food metasearch engine',
      'During my time as a teaching assistant, I helped students with their web development by answering questions and providing feedback on their code',
      'Participated in weekly office hours to help students with their web development',
    ],
    skills: {
      [skills.FRONTEND]: [FrontendSkills.HTML, FrontendSkills.CSS, FrontendSkills.JAVASCRIPT, FrontendSkills.REACT, FrontendSkills.BOOTSTRAP],
      [skills.BACKEND]: [BackendSkills.EXPRESS, BackendSkills.NODE],
      [skills.DEVELOPMENT]: [DevelopmentSkills.GIT, DevelopmentSkills.GITHUB, DevelopmentSkills.VS_CODE],
      [skills.NON_TECHNICAL]: [NonTechnicalSkills.COMMUNICATION, NonTechnicalSkills.PROBLEM_SOLVING, NonTechnicalSkills.TEAMWORK],
    }
  },
];