export const personalInfo = {
  name: "Mohammed Ismail",
  title: "Backend-Focused Full Stack Software Engineer",
  summary: "Backend-Focused Full Stack Software Engineer with 2+ years of professional experience specializing in designing, modernizing, and scaling enterprise-grade systems using Java and Spring Boot.\n\nProven expertise in building high-performance microservices architectures, RESTful APIs, scalable backend services, and database-driven applications for enterprise environments. Strong background in system design, performance optimization, and delivering maintainable solutions that support business-critical operations.\n\nExperienced in full-stack development with backend focus, having built internal enterprise frontend platforms using React and Next.js to standardize UI development, enhance security, and improve development velocity across distributed teams.\n\nSkilled in authentication and authorization systems (OAuth2, OIDC, JWT, RBAC), platform-level engineering, legacy system modernization, and cross-functional collaboration within multicultural, international teams.\n\nActively seeking backend or backend-focused full-stack software engineering roles in the UAE (Dubai, Abu Dhabi, Sharjah). Ready to relocate immediately with valid passport and open to visa sponsorship. Available for remote or in-person interviews. Targeting opportunities within enterprise, fintech, SaaS, and product-driven engineering organizations across the GCC region.",
  email: "shaikhismail1104@gmail.com",
  phone: "+91-7718088144",
  linkedin: "https://www.linkedin.com/in/mohammed-ismail-shaikh-649034213",
  github: "https://github.com/ismail-1104",
  location: "Mumbai, India | Relocating to UAE",
  availability: "Immediately available | Open to relocation to UAE/GCC | Visa sponsorship welcome"
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
    technologies: ["Java", "Spring Boot", "Microservices", "Next.js", "React", "TypeScript", "Oracle", "PostgreSQL", "OAuth2", "JWT", "RBAC"]
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
    technologies: ["Python", "TensorFlow", "PyTorch", "YOLOv8", "Machine Learning", "Deep Learning", "DeepSpeech", "Computer Vision"]
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
    technologies: ["Node.js", "MongoDB", "REST APIs", "Authentication", "Express.js", "Full Stack Development"]
  }
];

export const projects = [
  {
    title: "DETR - Enterprise Pest Detection & Prediction System",
    description: "Scalable full-stack AI/ML-powered web application for agricultural pest detection and prediction. Built with modern enterprise architecture featuring real-time object detection using YOLO deep learning models, predictive analytics based on environmental data, and responsive frontend with optimized performance. Demonstrates expertise in integrating machine learning models with production-ready backend APIs and modern frontend frameworks.",
    liveLink: "https://detr-pest-prediction.vercel.app/",
    technologies: {
      frontend: ["Next.js 14.2.5", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      backend: ["Flask 3.1.2", "Python 3.14", "YOLO (Ultralytics 8.3.235)", "scikit-learn 1.7.2", "OpenCV", "RESTful APIs"]
    },
    features: [
      "Real-time AI-powered pest detection using YOLO deep learning model with 90%+ accuracy",
      "Predictive analytics engine for pest outbreak forecasting based on environmental factors",
      "Scalable REST API architecture for seamless frontend-backend integration",
      "Weekly pest forecasts with data visualization for decision-making support",
      "Optimized image processing pipeline with annotated results"
    ],
    image: "/projects/pest-detection.jpg"
  },
  {
    title: "TalentInsight AI - Enterprise Recruitment Intelligence Platform",
    description: "Production-ready AI-powered resume analysis and candidate matching system designed for enterprise recruitment workflows. Features advanced NLP for entity extraction, intelligent skills assessment, comprehensive analytics dashboard, and AI-driven candidate recommendations. Demonstrates expertise in building scalable data processing systems with machine learning integration for business-critical applications.",
    liveLink: "https://talentinsightai.up.railway.app/",
    technologies: {
      backend: ["Flask 2.3.2", "spaCy 3.6.0 (NLP)", "pandas 2.0.3", "PyPDF2 3.0.1", "Gunicorn 21.2.0 (Production Server)"],
      frontend: ["Tailwind CSS", "Alpine.js", "Font Awesome 6", "Responsive Design"],
      ml: ["Cosine Similarity Algorithm", "spaCy NLP Pipeline", "matplotlib 3.7.2", "Data Analytics"]
    },
    features: [
      "Automated PDF processing and intelligent text extraction from resumes",
      "Advanced entity extraction using NLP (names, organizations, locations, dates)",
      "Technical and soft skills assessment with scoring algorithms",
      "Enterprise-grade analytics dashboard with 4-chart comprehensive visualizations",
      "AI-powered candidate recommendations using cosine similarity matching",
      "Bulk resume processing for high-volume recruitment scenarios"
    ],
    image: "/projects/resume-analyzer.jpg"
  },
  {
    title: "Bloggy - Full-Stack Content Management Platform",
    description: "Scalable full-stack blog platform built with MERN stack demonstrating enterprise-level authentication, data management, and modern UI/UX principles. Features secure user authentication, rich content editing, media management, and role-based content organization. Showcases expertise in building production-ready web applications with modern frontend frameworks and robust backend architecture.",
    liveLink: "https://bloggy-live-app.onrender.com/",
    technologies: {
      frontend: ["React 18.2.0", "React Router DOM 6.4.4", "Axios (HTTP Client)", "CSS3", "Responsive Design"],
      backend: ["Node.js", "Express.js 4.18.2", "MongoDB (NoSQL Database)", "Mongoose 6.7.5", "bcrypt (Password Hashing)", "Multer (File Upload)"]
    },
    features: [
      "Secure user authentication with bcrypt password hashing and session management",
      "Rich text editor for professional blog post creation and content management",
      "Scalable image upload and media management system using Multer",
      "Category-based content organization for improved discoverability",
      "Customizable user profiles with role-based access control",
      "Advanced filtering: posts by user, category, and search functionality",
      "Fully responsive design optimized for all devices"
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
