export const profile = {
  name: 'Nagappan S',
  alias: 'Nagspidey',
  title: 'Full Stack Engineer | AI Engineering',
  location: 'Chennai, India',
  email: 'karthiknano932@gmail.com',
  phone: '+91 9500167175',
  site: 'https://nagspidey.co.in',
  linkedin: 'https://linkedin.com/in/nagappan-s-286b035b',
  github: 'https://github.com/Nagappan03',
  blog: 'https://nagspidey.hashnode.dev',
  resumeUrl: '/Nagappan_S_Resume.pdf',
  summary:
    "Seasoned Full Stack Engineer with 9+ years of experience building scalable web applications across fintech, insurance, and enterprise domains. Proficient in React, Node.js, Next.js, and cloud technologies, with a strong track record of leading teams and delivering complex migrations end to end. Recently expanded into AI Engineering — building RAG pipelines, agentic workflows, and LLM-powered applications using Anthropic Claude, LangChain, and pgvector. Actively seeking senior engineering roles where I can bridge full stack expertise with modern AI capabilities to deliver intelligent, high-impact products.",
}

export const experience = [
  {
    period: '01/2025 – Present',
    company: 'Capgemini Technology Services India Limited',
    role: 'Senior Consultant',
    points: [
      "Leading offshore development of Synchrony's Shopify Marketing and Payment applications, enabling merchants to seamlessly integrate financing options into their e-commerce storefronts.",
      'Architected and implemented an iFrame-based Common UI system adopted across multiple Shopify apps, standardising configuration workflows and widget placements across merchant platforms.',
      'Designed and optimised backend APIs handling high-volume payment and marketing flows, improving reliability and reducing error rates across critical transaction pipelines.',
      'Drove application performance improvements by migrating legacy class-based React components to modern functional patterns, significantly improving maintainability and test coverage.',
      'Represented the team in internal Hackathons and Coding Quests, delivering innovative proof-of-concept solutions recognised at the project level.',
    ],
  },
  {
    period: '06/2023 – 12/2024',
    company: 'Cognizant Technology Solutions',
    role: 'Senior Software Engineer',
    points: [
      'Led a 4-member offshore team as technical lead, responsible for delivery, code quality, and junior developer mentorship across a large-scale enterprise application.',
      "Spearheaded the end-to-end migration of a complex React application to Liberty Mutual's proprietary design system (LMDS), ensuring zero functional regression across all migrated modules.",
      'Drove a full architectural migration from legacy React patterns to Next.js 14 App Router, modernising the frontend stack and improving performance and SEO capabilities.',
      'Engineered an automated Service Desk ticket creation system integrated with JIRA, reducing manual effort and improving incident response time for operations teams.',
      'Implemented automated customer email notification services, improving communication workflows triggered by key application events.',
    ],
  },
  {
    period: '10/2020 – 05/2023',
    company: 'Saksoft Limited',
    role: 'Technical Consultant',
    points: [
      'Built efficient, reusable, and accessible frontend systems using React, delivering consistent and performant user experiences across multiple client projects.',
      'Developed and secured REST APIs using Node.js with JWT-based authentication, ensuring protected access to sensitive application data.',
      'Integrated frontend applications with relational databases, implementing optimised queries for reliable data retrieval and storage.',
      'Applied performance optimisation techniques including lazy loading, code splitting, and memoisation, measurably improving application load times and user experience.',
    ],
  },
  {
    period: '12/2017 – 10/2020',
    company: 'Fujitsu Consulting India Private Limited',
    role: 'Assistant Application Developer',
    points: [
      'Developed dynamic, cross-browser compatible user interfaces using HTML5, CSS3, JavaScript, and Bootstrap.',
      'Built interactive UI components leveraging jQuery, enhancing usability across client-facing dashboards.',
      'Delivered a full-stack proof-of-concept application using Node.js, implementing MVC architecture, template engines, and Express validations end to end.',
    ],
  },
  {
    period: '03/2017 – 09/2017',
    company: 'Tech Mahindra',
    role: 'Associate Software Engineer',
    points: [
      'Provided production support and bug resolution for a live enterprise application, ensuring stability and minimal downtime.',
      'Delivered targeted feature enhancements on existing modules with minimal disruption to the production environment.',
    ],
  },
]

export const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'jQuery'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'pgvector'] },
  { category: 'Cloud & DevOps', items: ['AWS (Certified Developer Associate)', 'Docker', 'GitHub Actions (CI/CD)', 'Railway'] },
  {
    category: 'AI & LLM Engineering',
    items: [
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'Vector Search (pgvector)',
      'Prompt Engineering',
      'Anthropic Claude API',
      'Voyage AI Embeddings',
      'Agentic AI',
      'Multi-Agent Systems',
      'Vercel AI SDK',
    ],
  },
  { category: 'Tools & Platforms', items: ['Prisma ORM', 'NextAuth.js', 'Shopify', 'Git'] },
]

export const projects = [
  {
    name: 'RAG-Based Internal Document Q&A',
    tag: 'AI Engineering',
    description:
      'Full-stack document intelligence app where users upload PDFs and query them via a chat interface. Implements the complete RAG pipeline — chunking, embedding, vector similarity search, and streamed LLM responses.',
    stack: ['Next.js 14', 'Anthropic Claude Haiku', 'Voyage AI Embeddings', 'pgvector', 'LangChain', 'Prisma', 'NextAuth.js'],
  },
  {
    name: 'AI-Powered SQL Query Generator',
    tag: 'Agentic AI',
    description:
      "Natural language to SQL agent connected to a live PostgreSQL database. Users describe what they need in plain English; the agent generates the query using Claude's tool calling, executes it, and returns results with an explanation.",
    stack: ['Claude Tool Calling', 'PostgreSQL', 'Agentic Tool Use'],
  },
  {
    name: 'Multi-Agent Research Assistant',
    tag: 'Multi-Agent Systems',
    description:
      'Autonomous research agent built with LangGraph. Multiple specialised agents collaborate to search the web, synthesise findings, and produce a structured report.',
    stack: ['LangGraph', 'Multi-Agent Orchestration', 'State Management'],
  },
  {
    name: 'AI Job Application Copilot',
    tag: 'LLM Chaining',
    description:
      'LLM-powered tool that takes a job description and resume as inputs and generates tailored resume bullet points, a custom cover letter, and role-specific interview prep questions.',
    stack: ['Multi-step LLM Chaining', 'Prompt Engineering'],
  },
]

export const clientProjects = [
  {
    name: 'Synchrony eCarts – Shopify',
    period: 'Jan 2025 – Present',
    points: [
      'Designed and implemented an iFrame-based Common UI for consistent configuration management across both Marketing & Payment UI apps.',
      'Developed and optimised backend APIs for widget placements and payment configurations.',
      'Refactored legacy components and improved application performance and reliability.',
    ],
  },
  {
    name: 'Electronic Records Management (ERM) – Cleanup Crew',
    period: 'Jul 2023 – Dec 2024',
    points: [
      "Migrated the entire Admin UI from Vanilla React to Liberty Mutual's design system (LMDS).",
      'Built a module to automate JIRA Service Desk ticket creation and reflect ticket status in the UI.',
      'Led migration of the application from legacy React patterns to Next.js 14 App Router architecture.',
    ],
  },
  {
    name: 'TransUnion CIBIL – ATLAS',
    period: 'Sep 2021 – May 2023',
    points: [
      'Implemented various async patterns (Promise chaining, async/await, Axios, Fetch API) for external API integrations.',
      'Improved application performance using lazy loading, code splitting, and memoisation techniques.',
      'Implemented Redux and Redux-Thunk for complex state management across the application.',
    ],
  },
  {
    name: 'Workruit – Job Search Platform',
    period: 'Mar 2020 – Sep 2021',
    points: [
      'Implemented secure user authentication using JWT and bcrypt.',
      'Built custom middleware ensuring only authenticated and authorised users could access protected routes.',
      'Developed and fine-tuned search algorithms matching user queries with job postings.',
    ],
  },
]

export const certifications = [
  {
    name: 'AWS Certified Developer Associate',
    period: 'Jun 2020 – Jun 2023 (Renewal planned)',
  },
]
