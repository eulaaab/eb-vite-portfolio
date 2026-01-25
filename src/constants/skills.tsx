export const skills = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DEVELOPMENT: "Development",
  TESTING: "Testing",
  TOOLS: "Tools",
  API_INTEGRATION: "API Integration",
  AI_TOOLS: "AI Tools",
  NON_TECHNICAL: "Non-Technical",
};

export const skillCategories = [
  {
    name: skills.FRONTEND,
    icon: "html5",
    skills: ['Bulma', 'CSS', 'HTML', 'Javascript', 'React', 'Redux Toolkit', 'Typescript'],
  },
  {
    name: skills.AI_TOOLS,
    icon: "ai",
    skills: ['Claude', 'Gemini', 'Perplexity'],
  },
  {
    name: skills.DEVELOPMENT,
    icon: "code",
    skills: ['Create React App', 'Git', 'Vite'],
  },
  {
    name: skills.TESTING,
    icon: "test-tube",
    skills: ['Cypress', 'Jest', 'React Testing Library'],
  },
  {
    name: skills.TOOLS,
    icon: "wrench",
    skills: ['Cursor', 'Git', 'GitHub', 'VS Code'],
  },
  {
    name: skills.API_INTEGRATION,
    icon: "api",
    skills: ['AppsFlyer', 'Friendbuy', 'Intercom', 'Optimizely', 'RevenueCat', 'Stripe'],
  },
  {
    name: skills.BACKEND,
    icon: "node-js",
    skills: ['Express', 'Node'],
  },
  {
    name: skills.NON_TECHNICAL,
    icon: "user",
    skills: ['Communication', 'Problem Solving', 'Leadership', 'Teamwork', 'Cross-functional Collaboration', 'Code Review', 'Documentation'],
  },
];
