export const personalInfo = {
  name: "Mohammed Ismail",
  title: "Backend-Focused Software Engineer",
  summary: "Backend Software Engineer with experience designing, modernizing, and scaling enterprise-grade systems using Java and Spring Boot.\n\nStrong background in microservices architecture, scalable backend services, database-driven applications, and performance-focused system design within enterprise environments.\n\nExperienced as a backend-focused full-stack engineer, having built and contributed to frontend platforms using React and Next.js to improve development velocity, consistency, and security across teams.\n\nComfortable working on platform-level engineering, system modernization, authentication/authorization (OAuth2, RBAC), and cross-functional collaboration in large, distributed teams.\n\nActively open to backend and backend-focused full-stack roles in UAE. Open to relocation to the UAE | Available for remote interviews. Interested in opportunities within enterprise, platform, or product-driven engineering teams.",
  email: "shaikhismail1104@gmail.com",
  phone: "+91-7718088144",
  linkedin: "https://www.linkedin.com/in/mohammed-ismail-shaikh-649034213",
  github: "https://github.com/ismail-1104",
  location: "Mumbai, India",
  availability: "Open to opportunities in UAE and internationally"
};

export const skills = {
  backend: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Data JPA",
    "Microservices",
    "REST APIs",
    "Spring Batch"
  ],
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
  ],
  databases: [
    "Oracle",
    "PostgreSQL",
    "MySQL",
    "MongoDB"
  ],
  security: [
    "OAuth2",
    "OpenID Connect (OIDC)",
    "JWT",
    "Role-Based Access Control (RBAC)"
  ],
  tools: [
    "Git",
    "Maven",
    "npm",
    "CI/CD",
    "Docker",
    "IntelliJ IDEA",
    "VS Code"
  ],
  machineLearning: [
    "Python",
    "TensorFlow",
    "PyTorch",
    "YOLOv8",
    "scikit-learn",
    "spaCy",
    "NLP"
  ]
};

export const experience = [
  {
    title: "Software Development Engineer",
    company: "Accelya",
    location: "Mumbai, India",
    period: "July 2024 - Present",
    description: [
      "Migrated legacy C#/.NET applications to Spring Boot microservices, improving system performance by approximately 40% and enhancing scalability",
      "Designed and developed scalable backend services using Java and Spring Boot, integrated with Oracle and PostgreSQL databases",
      "Built and maintained RESTful APIs following clean architecture principles and enterprise best practices",
      "Contributed to application security using OAuth2 / OIDC, JWT validation, and fine-grained RBAC",
      "Played a key role in building an internal enterprise frontend framework using Next.js, React, and TypeScript, reducing frontend development effort by ~70% across teams",
      "Winner – Accelya Global Ideathon, proposing a blockchain-based enterprise solution for airline clients",
      "Conducted proof-of-concepts on AI-assisted development tools including GitHub Copilot, Cursor, and Windsurf"
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "Next.js", "React", "TypeScript", "Oracle", "PostgreSQL", "OAuth2", "JWT"]
  },
  {
    title: "Python And Machine Learning Developer",
    company: "Detroids",
    location: "Mumbai, India",
    period: "October 2023 - March 2024",
    description: [
      "Designed and implemented machine learning models including Regression, Random Forest, and CNNs using TensorFlow and PyTorch",
      "Built backend-integrated ML pipelines for predictive analytics and data processing",
      "Developed AI dashboards with real-time object detection using YOLOv8 / YOLO NAS, achieving 95%+ accuracy",
      "Worked on LLM-based analytics and speech-to-text systems using DeepSpeech"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "YOLOv8", "Machine Learning", "Deep Learning", "DeepSpeech"]
  },
  {
    title: "Web Developer",
    company: "Octanet Services Pvt. Ltd.",
    location: "Mumbai, India",
    period: "February 2024 - April 2024",
    description: [
      "Developed backend functionality using Node.js and MongoDB for a job and internship portal",
      "Implemented REST APIs for user registration, authentication, admin workflows, and data management",
      "Contributed to frontend development for end-to-end feature delivery"
    ],
    technologies: ["Node.js", "MongoDB", "REST APIs", "Authentication", "Express.js"]
  }
];

export const projects = [
  {
    title: "DETR - Pest Detection & Prediction System",
    description: "A modern full-stack web application for agricultural pest detection and prediction using AI/ML models. Features real-time AI-powered pest detection using YOLO model with image upload and annotated results, pest prediction based on environmental factors, and weekly forecasts.",
    liveLink: "https://detr-pest-prediction.vercel.app/",
    technologies: {
      frontend: ["Next.js 14.2.5", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      backend: ["Flask 3.1.2", "Python 3.14", "YOLO (Ultralytics 8.3.235)", "scikit-learn 1.7.2", "OpenCV"]
    },
    features: [
      "Real-time AI-powered pest detection using YOLO model",
      "Pest outbreak prediction based on environmental factors",
      "Weekly pest forecasts",
      "Image upload and annotated results"
    ],
    image: "/projects/pest-detection.jpg"
  },
  {
    title: "Resume Analyzer - AI-Powered Recruitment Tool",
    description: "AI-powered resume analysis system with NLP, entity extraction, skills assessment, and candidate recommendations using machine learning. Features PDF processing, entity extraction, comprehensive visual analytics with 4-chart dashboard, and AI-powered candidate matching.",
    liveLink: "https://talentinsightai.up.railway.app/",
    technologies: {
      backend: ["Flask 2.3.2", "spaCy 3.6.0", "pandas 2.0.3", "PyPDF2 3.0.1", "Gunicorn 21.2.0"],
      frontend: ["Tailwind CSS", "Alpine.js", "Font Awesome 6"],
      ml: ["Cosine Similarity", "spaCy NLP", "matplotlib 3.7.2"]
    },
    features: [
      "PDF processing and text extraction",
      "Entity extraction (names, organizations, locations, dates)",
      "Technical and soft skills assessment",
      "4-chart dashboard with comprehensive visualizations",
      "AI-powered candidate recommendations using cosine similarity",
      "Bulk resume processing capabilities"
    ],
    image: "/projects/resume-analyzer.jpg"
  },
  {
    title: "Bloggy - Full-Stack Blog Platform",
    description: "A full-stack blog application built with the MERN stack allowing users to create, edit, and share blog posts. Features secure user authentication, rich text editor, image uploads, category management, and customizable user profiles with a modern, responsive UI.",
    liveLink: "https://bloggy-live-app.onrender.com/",
    technologies: {
      frontend: ["React 18.2.0", "React Router DOM 6.4.4", "Axios", "CSS3"],
      backend: ["Node.js", "Express.js 4.18.2", "MongoDB", "Mongoose 6.7.5", "bcrypt", "Multer"]
    },
    features: [
      "Secure user authentication with bcrypt password hashing",
      "Rich text editor for blog post creation",
      "Image upload and management",
      "Category-based post organization",
      "Customizable user profiles",
      "Filter posts by user or category",
      "Fully responsive design"
    ],
    image: "/projects/bloggy.jpg"
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    institution: "Rizvi College of Engineering",
    location: "Mumbai, India",
    period: "January 2021 - June 2024",
    grade: "CGPA: 9.18"
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Shri T P Bhatia Jr. College of Science",
    period: "2019 - 2020",
    grade: "Percentage: 83.23%"
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "St. Paul's High School",
    period: "2017 - 2018",
    grade: "Percentage: 95%"
  }
];

export const certifications = [
  {
    title: "Certified Scrum Master (CSM)",
    issuer: "HRDC (UAE Approved)",
    date: "2025"
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "Edureka (MERN Stack specialization)",
    date: "2022"
  },
  {
    title: "Microsoft Azure and Machine Learning Fundamentals",
    issuer: "Microsoft",
    date: "2021"
  }
];

export const achievements = [
  {
    title: "Winner – Accelya Global Ideathon",
    description: "Proposed a blockchain-based enterprise solution for airline clients",
    year: "2025"
  },
  {
    title: "40% Performance Improvement",
    description: "Achieved through migration of legacy C#/.NET applications to Spring Boot microservices",
    year: "2024"
  },
  {
    title: "70% Development Effort Reduction",
    description: "By building an internal enterprise frontend framework using Next.js, React, and TypeScript",
    year: "2025"
  }
];
