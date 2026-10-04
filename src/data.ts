export const profile = {
  name: "Muhammad Ali Zaib",
  email: "muhammad.alizaib32@gmail.com",
  phone: "+92 371 3883537",
  phoneHref: "tel:+923713883537",
  linkedin: "https://www.linkedin.com/in/muhammad-ali-zaib-b0bb64287",
  linkedinLabel: "linkedin.com/in/muhammad-ali-zaib-b0bb64287",
  github: "https://github.com/alizaib84876",
  resume: "/Muhammad-Ali-Zaib-Resume.pdf",
  roles: ["AI/ML Engineer"],
};

export type CaseStudy = {
  slug: string;
  kicker: string;
  lede: string;
  stack: string[];
  pipeline: string[];
  pipelineNote: string;
  metrics: { value: string; label: string }[];
  sections: { title: string; paragraphs: string[] }[];
  note: string;
};

export type Project = {
  title: string;
  href: string;
  context: string;
  summary: string;
  points: string[];
  tags: string[];
  stat?: { value: string; label: string };
  demo?: string;
  caseStudy?: CaseStudy;
};

/**
 * Selected work shown on the site.
 * Add a project by appending an object to this array.
 */
export type Role = {
  title: string;
  org: string;
  dates: string;
  meta: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: "Data Analyst & Developer",
    org: "Al-Hafiz Protein Farms",
    dates: "Jul 2026 — Present",
    meta: "Part-time · Hybrid · Sargodha",
    points: [
      "Analyzed shed workflows and record-keeping, and found missed daily logs, no audit trail, and weak batch economics in paper and notepad tracking.",
      "Building FlockOps, the operations platform for a multi-farm broiler business: farms, sheds, batches, daily logs, expenses, and weigh-bridge sales across the 35–45 day cycle.",
      "Designed the data model so each shed has one active flock, daily numbers are unique per flock and date, and every correction stores who changed what, when, and why.",
      "Built a mobile-first offline PWA in Next.js, Supabase, and Vercel so shed staff can log mortality, sick birds, feed, and water without signal, then sync when the network returns.",
      "Set role-based access for owner, supervisor, and worker, with team invites and owner-level profit and loss kept off field-staff screens.",
    ],
  },
  {
    title: "Data Science & Analytics Intern",
    org: "DevelopersHub Corporation",
    dates: "May 2025 — Jul 2025",
    meta: "Internship · Remote · Islamabad",
    points: [
      "Built classification and prediction models in Python with Pandas, Scikit-learn, Matplotlib, and Seaborn.",
      "Trained a customer-churn model with random forest, including preprocessing, feature importance, and evaluation.",
      "Compared logistic regression and a decision tree for loan-approval prediction, after cleaning, transforming, and visualizing the data.",
      "Ran exploratory analysis across several datasets to find patterns and the features that mattered.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "DyslexAI",
    href: "https://github.com/alizaib84876/DyslexAI",
    demo: "https://dyslexai-app.netlify.app/",
    context: "Degree project",
    summary:
      "An AI literacy platform for dyslexic learners, from handwriting recognition to adaptive practice.",
    points: [
      "Built a three-stage handwriting OCR pipeline with DocTR, TrOCR, and LLM post-correction.",
      "Designed adaptive exercises from real-time performance signals, with dynamic skill progression and LLM feedback.",
      "Shipped the platform in FastAPI, React, TypeScript, PostgreSQL, and Supabase, with teacher dashboards and gamified daily practice.",
      "Presented at the FAST–NUCES job fair.",
    ],
    tags: ["Computer vision", "NLP", "FastAPI", "React", "TypeScript", "PostgreSQL"],
    stat: { value: "3-stage", label: "OCR pipeline" },
    caseStudy: {
      slug: "dyslexai",
      kicker: "Final year project · BSc Data Science, FAST–NUCES",
      lede:
        "A learning-support platform that reads handwritten work and uses a learner’s mistakes to choose the next practice. It is an academic project, not a diagnostic tool.",
      stack: [
        "React",
        "FastAPI",
        "Python",
        "DocTR",
        "TrOCR",
        "LLM",
        "SQLAlchemy",
        "Supabase",
      ],
      pipeline: ["Handwritten page", "DocTR", "TrOCR", "LLM", "Digital text"],
      pipelineNote:
        "TrOCR is built for a line of handwriting, not a full page. DocTR splits the page into text regions first. An LLM then corrects the recognized text using the surrounding context.",
      metrics: [
        { value: "0.270", label: "Word error rate" },
        { value: "0.175", label: "Character error rate" },
      ],
      sections: [
        {
          title: "Handwriting recognition",
          paragraphs: [
            "The recognition path is three stages: segment the page, read each region, then correct the text.",
            "DocTR finds the handwritten regions. TrOCR reads them. The LLM does contextual post-correction, so a mistake that is obvious from the sentence can be fixed after recognition.",
            "I evaluated the recognizer with word error rate and character error rate. The best recorded results were a WER of 0.270 and a CER of 0.175.",
          ],
        },
        {
          title: "Adaptive practice",
          paragraphs: [
            "The same exercises for every learner miss the point. DyslexAI looks at attempts and mistakes, finds the weak areas, and uses that to set the next practice.",
            "The loop is attempt, analyze the mistakes, name the weak area, then give targeted practice. Performance changes what comes next, instead of a fixed lesson order.",
          ],
        },
        {
          title: "The application",
          paragraphs: [
            "Both pieces sit in one product. The interface is React. The API is FastAPI. Learner data lives in Supabase, with SQLAlchemy on the backend. The models are DocTR, TrOCR, and an LLM.",
            "The work was not only training a recognizer. The pipeline had to connect to accounts, stored attempts, and the screens a learner and a teacher actually use, including dashboards and daily practice.",
          ],
        },
        {
          title: "What I learned",
          paragraphs: [
            "A single handwriting model was the wrong unit of work. Splitting the job into segmentation, recognition, and correction made the limits of each model explicit and easier to improve.",
            "The adaptive system also had to use interaction data, not only a model score. That is what turns an experiment into an application that can change the next exercise.",
          ],
        },
      ],
      note: "Next I would test the adaptive loop with learners and educators, improve recognition of highly irregular handwriting, and add more languages. Presented at the FAST–NUCES job fair.",
    },
  },
  {
    title: "Fraud Detection MLOps",
    href: "https://github.com/alizaib84876/Fraud-Detection-MLOps-Platform-with-Adaptive-Drift-Monitoring",
    context: "MLOps",
    summary:
      "A fraud-detection pipeline that monitors data drift and retrains when the signal actually changes.",
    points: [
      "Trained a weighted XGBoost, LightGBM, and random forest ensemble on 284K IEEE-CIS transactions, using SMOTE and class weighting to prioritize recall.",
      "Built a drift detector from a KS-test, PSI, and ADWIN that down-weights high false-positive detectors, so retraining is not triggered unnecessarily.",
      "Automated the retraining lifecycle with GitHub Actions from live drift signals, and tracked it with Prometheus, Grafana, and MLflow.",
    ],
    tags: ["XGBoost", "Drift monitoring", "MLflow", "GitHub Actions", "Docker"],
    stat: { value: "284K", label: "Transactions modeled" },
  },
  {
    title: "Capability-Aware Verification",
    href: "https://github.com/alizaib84876/CAV-heterogeneous-llm-verification",
    context: "Multi-agent LLMs",
    summary:
      "A heterogeneous multi-agent framework that weights each model's answer by an estimate of its capability.",
    points: [
      "Designed reliability-weighted aggregation from calibration quality — accuracy, ECE, and confidence gap — plus paraphrase consistency.",
      "Benchmarked four strategies on GSM8K, MMLU, and TruthfulQA. CAV beat majority voting on MMLU (90.00% vs. 89.25%) and on the overall average (89.08% vs. 88.92%).",
      "Ablations showed the two signals are complementary: full CAV reached 91.5% on MMLU, against 84.0% for calibration only and 83.5% for consistency only.",
    ],
    tags: ["LLMs", "Evaluation", "Calibration", "Python"],
    stat: { value: "90.00%", label: "MMLU accuracy" },
  },
  {
    title: "FlockOps",
    href: "https://github.com/alizaib84876/FlockOps",
    demo: "https://flock-ops-theta.vercel.app",
    context: "Al-Hafiz Protein Farms",
    summary:
      "Operations platform for a multi-farm broiler business: sheds, flocks, daily logs, expenses, and sales.",
    points: [
      "Replaced paper and notepad tracking, where daily logs were missed and a batch had no audit trail.",
      "Designed the data model so each shed has one active flock, daily numbers are unique per flock and date, and every correction records who changed what, when, and why.",
      "Built a mobile-first offline PWA in Next.js, Supabase, and Vercel. Shed staff log mortality, sick birds, feed, and water without signal, and entries sync when the network returns.",
      "Added owner, supervisor, and worker access, with team invites and owner-level profit and loss hidden from field staff.",
    ],
    tags: ["Next.js", "Supabase", "PostgreSQL", "PWA"],
    stat: { value: "35–45", label: "Day flock cycle" },
  },
  {
    title: "Real-Time Retail Data Warehouse",
    href: "https://github.com/alizaib84876/Real-Time-Retail-Data-Warehouse",
    context: "Data engineering",
    summary:
      "A near-real-time retail warehouse that enriches a transaction stream and loads it into a star schema.",
    points: [
      "Implemented HYBRIDJOIN in Python to join a continuous transaction stream with large, disk-based customer and product master data.",
      "Built a multi-threaded ETL pipeline that enriches each sale and loads it into fact and dimension tables.",
      "Modeled sales on a star schema, with fact_sales linked to customer, product, and date dimensions, and wrote 20 SQL queries for slicing, drill-down, and trend analysis.",
    ],
    tags: ["Python", "ETL", "SQL", "Star schema"],
    stat: { value: "20", label: "Analytical SQL queries" },
  },
  {
    title: "Electric Load Forecasting",
    href: "https://github.com/alizaib84876/electricity-load-predictor",
    context: "Forecasting",
    summary:
      "Hourly electricity-demand forecasts across 10 U.S. cities, from raw weather data to a small web app.",
    points: [
      "Built an end-to-end pipeline with random forest and XGBoost on weather and consumption data.",
      "Applied K-means, hierarchical clustering, and PCA to study demand patterns before modeling.",
      "Deployed the result as a Flask app with dynamic visualizations.",
    ],
    tags: ["XGBoost", "Clustering", "PCA", "Flask"],
    stat: { value: "10", label: "Cities forecast" },
  },
  {
    title: "ArtSight",
    href: "https://github.com/alizaib84876/ArtSight",
    context: "Computer vision",
    summary:
      "Art-style classification and neural style transfer, packaged as an interactive Flask app.",
    points: [
      "Fine-tuned MobileNetV2 with transfer learning across 10 art-style categories.",
      "Integrated TensorFlow Hub's arbitrary neural style transfer model for interactive stylization.",
      "Built a Flask app that accepts a custom image and applies a chosen style.",
    ],
    tags: ["TensorFlow", "Transfer learning", "Flask"],
    stat: { value: "10", label: "Style classes" },
  },
];

export const education = [
  {
    school: "FAST National University of Computer & Emerging Sciences",
    credential: "BSc Data Science",
    dates: "Aug 2022 — Jun 2026",
    detail: "Graduated",
    courses: [
      "Artificial Intelligence",
      "Deep Learning for Perception",
      "Digital Image Processing",
      "Data Mining",
      "MLOps",
      "Agentic AI",
      "Parallel & Distributed Computing",
    ],
  },
  {
    school: "Forman Christian College (A Chartered University)",
    credential: "FSc Pre-Engineering",
    dates: "Aug 2019 — May 2021",
    detail: "",
    courses: [],
  },
];

export const certifications = [
  {
    name: "Supervised Machine Learning",
    issuer: "DeepLearning.ai · Coursera",
    date: "Jan 2025",
  },
  {
    name: "Advanced Learning Algorithms",
    issuer: "DeepLearning.ai · Coursera",
    date: "Mar 2025",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    label: "Machine learning",
    items: [
      "Supervised and unsupervised learning",
      "Deep learning",
      "NLP",
      "Computer vision",
      "Transfer learning",
      "LLMs",
      "Agentic workflows",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
    ],
  },
  {
    label: "Data & libraries",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Librosa",
      "PostgreSQL",
      "Supabase",
      "SQLAlchemy",
      "Hadoop",
      "Tableau",
    ],
  },
  {
    label: "MLOps & engineering",
    items: [
      "Docker",
      "MLflow",
      "Kubeflow",
      "GitHub Actions",
      "Git",
      "FastAPI",
      "Flask",
      "React",
      "Next.js",
    ],
  },
];
