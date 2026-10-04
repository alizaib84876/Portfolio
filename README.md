# Muhammad Ali Zaib

Data Science graduate from FAST–NUCES. I build applied AI systems that hold up beyond the demo, from models and evaluation to the software that makes them reliable and useful.

Looking for **AI/ML Engineer** roles.

- Email: [muhammad.alizaib32@gmail.com](mailto:muhammad.alizaib32@gmail.com)
- LinkedIn: [muhammad-ali-zaib](https://www.linkedin.com/in/muhammad-ali-zaib-b0bb64287)
- GitHub: [alizaib84876](https://github.com/alizaib84876)

## Projects

### [DyslexAI](https://github.com/alizaib84876/DyslexAI)

AI literacy platform for dyslexic learners. A three-stage handwriting OCR pipeline (DocTR, TrOCR, and LLM post-correction), adaptive exercises from live performance signals, and a full-stack app with teacher dashboards. Presented at the FAST–NUCES job fair.

[Live demo](https://dyslexai-app.netlify.app/) · FastAPI, React, TypeScript, PostgreSQL, Supabase

### [Fraud Detection MLOps](https://github.com/alizaib84876/Fraud-Detection-MLOps-Platform-with-Adaptive-Drift-Monitoring)

End-to-end fraud detection on 284K IEEE-CIS transactions. A weighted XGBoost, LightGBM, and random forest ensemble, plus a drift detector (KS-test, PSI, ADWIN) that drives retraining through GitHub Actions. Tracked with Prometheus, Grafana, and MLflow.

XGBoost, MLflow, Docker, GitHub Actions

### [Capability-Aware Verification](https://github.com/alizaib84876/CAV-heterogeneous-llm-verification)

Heterogeneous multi-agent LLM framework that weights each answer by estimated agent capability, using calibration quality and paraphrase consistency. On MMLU, full CAV reached 91.5%, against 84.0% for calibration only and 83.5% for consistency only.

Python, LLMs, evaluation

### [FlockOps](https://github.com/alizaib84876/FlockOps)

Operations platform for a multi-farm broiler business: sheds, flocks, daily logs, expenses, and sales. Mobile-first offline PWA so shed staff can log without signal, with role-based access and an audit trail on every correction.

[Live app](https://flock-ops-theta.vercel.app) · Next.js, Supabase, PostgreSQL

### [Real-Time Retail Data Warehouse](https://github.com/alizaib84876/Real-Time-Retail-Data-Warehouse)

Near-real-time retail warehouse. A custom HYBRIDJOIN joins a transaction stream with disk-based customer and product master data, then a multi-threaded ETL loads a star schema. Includes 20 SQL queries for slicing, drill-down, and trend analysis.

Python, ETL, SQL

### [Electric Load Forecasting](https://github.com/alizaib84876/electricity-load-predictor)

Hourly electricity-demand forecasts for 10 U.S. cities with random forest and XGBoost, after clustering and PCA on weather and consumption data. Deployed as a Flask app.

XGBoost, clustering, Flask

### [ArtSight](https://github.com/alizaib84876/ArtSight)

Art-style classification across 10 categories with MobileNetV2 transfer learning, plus neural style transfer in a Flask app.

TensorFlow, transfer learning, Flask

## Tech stack

| Area | Tools |
| --- | --- |
| Languages | Python, C++, SQL, TypeScript |
| Machine learning | PyTorch, TensorFlow, Scikit-learn, XGBoost, LightGBM |
| Applied AI | LLMs, agentic workflows, NLP, computer vision, transfer learning |
| Data | Pandas, NumPy, PostgreSQL, Supabase, SQLAlchemy, Hadoop |
| Engineering | FastAPI, Flask, React, Next.js, Docker, MLflow, GitHub Actions |

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173). Project copy lives in `src/data.ts`.
