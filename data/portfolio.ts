export const personalInfo = {
  name: "Mohammed Ismail",
  title: "Backend Software Engineer",
  recruiterSummary: "Backend-focused engineer specializing in Java, Spring Boot, and enterprise microservices. Currently at Accelya modernizing aviation systems. Proven track record migrating legacy applications to scalable Spring Boot architectures (~40% performance improvement), building secure REST APIs, and delivering production-ready backend systems integrated with Oracle/PostgreSQL. Strong expertise in OAuth2, JWT, RBAC, and clean architecture. Seeking backend or backend-focused full-stack roles in UAE. Immediately available for relocation.",
  summary: "Backend-focused Software Engineer with professional experience building and modernizing enterprise-grade systems using Java and Spring Boot at Accelya. Specialized in designing scalable microservices architectures, RESTful APIs, and database-driven backend services for business-critical operations.\n\nProven expertise in legacy system modernization, having migrated C#/.NET applications to Spring Boot microservices with measurable performance improvements. Strong background in implementing secure authentication systems (OAuth2, OIDC, JWT, RBAC) and building maintainable backend solutions following clean architecture principles.\n\nExperienced in full-stack development with backend focus, having contributed to internal enterprise frontend platforms using Next.js and React to standardize development and improve team productivity.\n\nActively seeking backend or backend-focused full-stack software engineering roles in the UAE (Dubai, Abu Dhabi, Sharjah). Immediately available for relocation with valid passport. Open to visa sponsorship. Available for remote or in-person interviews. Targeting opportunities within enterprise, fintech, aviation, SaaS, and product-driven organizations across the GCC region.",
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
    title: "Accelya Next.js Framework (ANF)",
    subtitle: "Internal Enterprise Platform | Non-Public",
    category: "Enterprise Backend & Platform Engineering",
    description: "Enterprise-grade internal frontend framework built to standardize UI development, enhance security, and accelerate delivery across distributed engineering teams at Accelya. Led backend integration architecture including authentication, authorization, and core master utilities.",
    problem: "Multiple teams were building frontend applications independently with inconsistent patterns, duplicated authentication logic, and varying security implementations. This resulted in slow development cycles, security inconsistencies, and high maintenance overhead.",
    solution: "Architected and built a centralized Next.js/React/TypeScript framework with reusable templates, standardized authentication flows using OAuth2/OIDC, JWT-based session management, and role-based UI access control (RBAC). Designed core backend integration utilities and API client patterns for seamless microservices communication.",
    impact: "Reduced frontend development effort by approximately 70% across teams. Standardized security implementation organization-wide. Enabled faster time-to-market for new internal applications. Framework adopted as official standard for new frontend projects.",
    technologies: {
      backend: ["OAuth2 / OpenID Connect (OIDC)", "JWT Token Management", "Role-Based Access Control (RBAC)", "Spring Boot Integration"],
      frontend: ["Next.js", "React", "TypeScript", "Reusable Component Library"],
      security: ["Authentication Architecture", "Authorization Middleware", "Session Management", "Token Validation"]
    },
    features: [
      "Centralized OAuth2/OIDC authentication with enterprise SSO integration",
      "JWT-based session management with automatic token refresh",
      "Fine-grained role-based access control (RBAC) at UI level",
      "Reusable master utilities for API communication and data handling",
      "Standardized templates for rapid application scaffolding",
      "~70% reduction in frontend development time for internal tools"
    ],
    liveLink: null,
    isInternal: true
  },
  {
    title: "Legacy System Migration to Spring Boot Microservices",
    subtitle: "Enterprise Modernization Project | Non-Public",
    category: "Enterprise Backend Engineering",
    description: "Led the migration of legacy C#/.NET monolithic applications to modern Spring Boot-based microservices architecture, improving performance, scalability, and maintainability for business-critical airline systems at Accelya.",
    problem: "Legacy C#/.NET monolithic systems were difficult to scale, causing performance bottlenecks under high load. Tight coupling made maintenance challenging and slowed down feature delivery. Technical debt accumulated over years hindered innovation.",
    solution: "Designed and implemented Spring Boot microservices architecture with clean separation of concerns. Migrated core business logic to Java, integrated with Oracle and PostgreSQL databases using Spring Data JPA. Built RESTful APIs following enterprise best practices. Implemented comprehensive testing and gradual rollout strategy.",
    impact: "Achieved approximately 40% performance improvement under peak load. Enhanced system scalability to handle growing transaction volumes. Reduced technical debt and improved code maintainability. Enabled faster feature development with independent service deployment.",
    technologies: {
      backend: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Microservices Architecture"],
      databases: ["Oracle", "PostgreSQL"],
      apis: ["RESTful API Design", "API Versioning", "Error Handling"],
      architecture: ["Clean Architecture", "Domain-Driven Design", "Service Decomposition"]
    },
    features: [
      "Migrated monolithic C#/.NET applications to Spring Boot microservices",
      "~40% performance improvement through optimized architecture",
      "Scalable REST API design with versioning and comprehensive error handling",
      "Database integration with Oracle and PostgreSQL using Spring Data JPA",
      "Clean architecture with clear separation of concerns",
      "Reduced technical debt and improved maintainability"
    ],
    liveLink: null,
    isInternal: true
  },
  {
    title: "Enterprise Backend Services with Spring Boot",
    subtitle: "Production Systems | Non-Public",
    category: "Enterprise Backend Engineering",
    description: "Designed and developed multiple scalable backend services using Java and Spring Boot, integrated with enterprise databases (Oracle, PostgreSQL) and secured with OAuth2/JWT authentication for business-critical operations at Accelya.",
    problem: "Business teams required new backend services to support airline operations, revenue management, and partner integrations. Services needed to be secure, performant, and maintainable while handling high-volume transactions.",
    solution: "Built production-ready Spring Boot backend services following clean architecture principles. Implemented secure RESTful APIs with OAuth2/OIDC authentication, JWT validation, and fine-grained RBAC. Integrated with Oracle and PostgreSQL databases. Designed for horizontal scalability and high availability.",
    impact: "Delivered multiple production services supporting critical airline operations. Ensured enterprise-grade security and compliance. Maintained high service availability and performance. Enabled seamless integration with partner systems.",
    technologies: {
      backend: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs"],
      databases: ["Oracle Database", "PostgreSQL"],
      security: ["OAuth2", "JWT", "RBAC", "API Security"],
      tools: ["Maven", "Git", "IntelliJ IDEA"]
    },
    features: [
      "Production-ready Spring Boot backend services for airline operations",
      "Secure REST API implementation with OAuth2/JWT authentication",
      "Fine-grained role-based access control (RBAC)",
      "Enterprise database integration (Oracle, PostgreSQL)",
      "Clean architecture with testable, maintainable code",
      "High availability and horizontal scalability design"
    ],
    liveLink: null,
    isInternal: true
  },
  {
    title: "DETR - Pest Detection & Prediction System",
    subtitle: "Full-Stack AI/ML Application | Live Demo",
    category: "AI/ML & Full-Stack Development",
    description: "Full-stack AI-powered web application for agricultural pest detection and prediction, featuring real-time object detection using YOLO models and predictive analytics. Demonstrates backend API design and ML model integration skills.",
    problem: "Agricultural professionals needed an accessible tool for early pest detection and outbreak prediction to prevent crop damage and optimize intervention timing.",
    solution: "Built full-stack application with Flask backend serving YOLO-based object detection model and scikit-learn prediction engine. Designed RESTful APIs for image processing and prediction. Developed responsive Next.js frontend with real-time visualizations.",
    impact: "Achieved 90%+ detection accuracy. Enabled farmers to identify pest threats early. Provided data-driven forecasting for intervention planning. Demonstrates ability to integrate ML models with production-ready backend APIs.",
    liveLink: "https://detr-pest-prediction.vercel.app/",
    technologies: {
      frontend: ["Next.js 14.2.5", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Flask 3.1.2", "Python", "RESTful APIs"],
      ml: ["YOLO (Ultralytics)", "scikit-learn", "OpenCV", "Computer Vision"]
    },
    features: [
      "Real-time AI-powered pest detection using YOLO (90%+ accuracy)",
      "Predictive analytics for pest outbreak forecasting",
      "Scalable REST API for ML model serving",
      "Responsive frontend with data visualizations",
      "Image processing pipeline with annotated results"
    ],
    isInternal: false
  },
  {
    title: "TalentInsight AI - Recruitment Intelligence Platform",
    subtitle: "NLP & Backend System | Live Demo",
    category: "AI/ML & Backend Development",
    description: "AI-powered resume analysis platform with advanced NLP for entity extraction, skills assessment, and candidate matching. Showcases backend API design, data processing, and NLP integration capabilities.",
    problem: "Recruitment teams needed automated tools to process high volumes of resumes, extract relevant information, and match candidates to job requirements efficiently.",
    solution: "Built Flask-based backend with spaCy NLP pipeline for entity extraction and skills assessment. Implemented cosine similarity algorithm for candidate matching. Designed data processing workflows for PDF parsing and text analysis. Created analytics dashboard for insights visualization.",
    impact: "Automated resume screening process. Enabled bulk processing for high-volume recruitment. Provided data-driven candidate recommendations. Demonstrates expertise in backend data processing and NLP integration.",
    liveLink: "https://talentinsightai.up.railway.app/",
    technologies: {
      backend: ["Flask", "Python", "RESTful APIs", "Gunicorn"],
      nlp: ["spaCy", "NLP Pipeline", "Entity Extraction", "Cosine Similarity"],
      dataProcessing: ["pandas", "PyPDF2", "Text Processing"],
      frontend: ["Tailwind CSS", "Alpine.js", "Data Visualization"]
    },
    features: [
      "Automated PDF processing and intelligent text extraction",
      "Advanced NLP-based entity extraction (names, organizations, skills)",
      "Skills assessment with scoring algorithms",
      "AI-powered candidate matching using cosine similarity",
      "Analytics dashboard with comprehensive visualizations",
      "Bulk resume processing capability"
    ],
    isInternal: false
  },
  {
    title: "Bloggy - Full-Stack Content Management Platform",
    subtitle: "MERN Stack Application | Live Demo",
    category: "Full-Stack Web Development",
    description: "Full-stack blog platform built with MERN stack, demonstrating secure authentication, RESTful API design, and database-driven backend development with Node.js and MongoDB.",
    problem: "Needed to demonstrate full-stack capabilities including backend API development, secure authentication, database design, and modern frontend integration.",
    solution: "Built MERN stack application with Express.js backend and MongoDB database. Implemented secure authentication with bcrypt password hashing. Designed RESTful APIs for content management, user profiles, and media uploads. Created React frontend with routing and state management.",
    impact: "Production-ready full-stack application demonstrating backend API design, database modeling, authentication systems, and modern web development practices.",
    liveLink: "https://bloggy-live-app.onrender.com/",
    technologies: {
      frontend: ["React 18.2.0", "React Router DOM", "Axios", "CSS3"],
      backend: ["Node.js", "Express.js", "REST APIs", "Multer"],
      database: ["MongoDB", "Mongoose"],
      security: ["bcrypt Password Hashing", "Session Management"]
    },
    features: [
      "Secure user authentication with bcrypt and session management",
      "RESTful API design for content management",
      "MongoDB database with Mongoose ODM",
      "Image upload and media management system",
      "Category-based content organization",
      "User profiles and role-based access control"
    ],
    isInternal: false
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
