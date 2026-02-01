import { Injectable } from '@angular/core';
export interface Project {
  id: number;
  slug: string;

  // Card content
  title: string;
  shortDescription: string;
  imageGradient: string;
  buttonColor: string;
  icon: String;

  // Detail page content
  longDescription: string;
  problemStatement: string;
  approach: string;
  dataUsed: string;
  tools: string[];
  techniques: string[];
  results: string[];

  // Links
  githubUrl?: string;
  paperUrl?: string;
  demoUrl?: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  private projects: Project[] = [
    {
      id: 1,
      slug: 'drone-vs-bird',

      title: 'Drone vs Bird Classification',
      shortDescription:
        'Deep learning–based aerial object classification using CNN and transfer learning models.',
      imageGradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      buttonColor: 'linear-gradient(135deg, #75eda7ff, #4f46e5)',
      icon: "git.png",
      longDescription:
        'This project focuses on accurately distinguishing drones from birds in aerial imagery, a critical task for airspace monitoring and security applications. Multiple deep learning architectures were evaluated to achieve high accuracy and real-time feasibility.',

      problemStatement:
        'Misclassification between drones and birds in aerial surveillance can lead to false alarms or missed threats. The goal was to build a robust classification model capable of handling visual similarity and background noise.',

      approach:
        'Implemented CNN-based models and fine-tuned pre-trained architectures such as ResNet. The models were trained and evaluated on labeled aerial image datasets with data augmentation techniques.',

      dataUsed:
        'Labeled aerial image dataset containing drone and bird classes collected from public repositories.',

      tools: ['Python', 'PyTorch', 'OpenCV', 'Google Colab'],
      techniques: ['CNN', 'Transfer Learning', 'Fine-tuning', 'Data Augmentation'],

      results: [
        'Achieved 99% classification accuracy using ResNet18',
        'Reduced false positives compared to baseline CNN',
        'Demonstrated fast inference suitable for real-time use'
      ],

      githubUrl: 'https://github.com/your-username/drone-vs-bird'
    },

    {
      id: 2,
      slug: 'ai-art-detection',

      title: 'AI vs Human Art Detection',
      shortDescription:
        'Binary image classification system to identify AI-generated and human-created artwork.',
      imageGradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      buttonColor: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      icon: "git.png",

      longDescription:
        'This project investigates the challenge of distinguishing AI-generated artwork from human-created art using both classical and deep learning approaches.',

      problemStatement:
        'The rapid growth of generative AI has raised concerns around authenticity, copyright, and misinformation in digital art.',

      approach:
        'Extracted visual features and trained deep learning models including CNNs and Vision Transformers to perform binary classification.',

      dataUsed:
        'Balanced dataset of AI-generated and human-created art images sourced from public datasets.',

      tools: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
      techniques: ['CNN', 'Vision Transformer (ViT)', 'Binary Classification'],

      results: [
        'ViT model outperformed CNN baselines',
        'Improved generalization on unseen AI-generated images'
      ],

      githubUrl: 'https://github.com/your-username/ai-art-detection',
      paperUrl: 'https://ieeexplore.ieee.org/'
    },

    {
      id: 3,
      slug: 'data-analysis-dashboard',

      title: 'Data Analysis Dashboard',
      shortDescription:
        'Interactive data analytics dashboard for visual exploration and insight generation.',
      imageGradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      buttonColor: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      icon: "image.png",

      longDescription:
        'An end-to-end exploratory data analysis project with interactive visualizations to uncover trends and patterns in structured datasets.',

      problemStatement:
        'Raw datasets often fail to provide insights without proper visualization and analysis.',

      approach:
        'Performed data cleaning, EDA, and created meaningful plots and dashboards to communicate insights clearly.',

      dataUsed:
        'Structured tabular datasets from public data sources.',

      tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      techniques: ['EDA', 'Data Visualization', 'Statistical Analysis'],

      results: [
        'Identified key trends and anomalies',
        'Improved interpretability for non-technical users'
      ],

      githubUrl: 'https://github.com/your-username/data-analysis-dashboard'
    },

    {
      id: 4,
      slug: 'loan-approval-system',

      title: 'Loan Approval Prediction System',
      shortDescription:
        'End-to-end machine learning system for predicting loan approval using credit risk analysis.',

      imageGradient: 'linear-gradient(135deg, #0f766e, #14b8a6)',
      buttonColor: 'linear-gradient(135deg, #5eead4, #14b8a6)',
      icon: 'LoanApproval.PNG',

      longDescription: `This project focuses on building an intelligent loan approval system that helps
                        banks and financial institutions make accurate, data-driven lending decisions. 
                        By analyzing applicant demographics, income, credit history, and previous default behavior, 
                        the system predicts whether a loan application should be approved or rejected. 
                        The project emphasizes minimizing financial risk while ensuring fair opportunities 
                        for eligible applicants.

                        Through detailed exploratory analysis, feature engineering, and model comparison, 
                        multiple machine learning models were evaluated using ROC-AUC, recall, and confusion matrices. 
                        The final solution enables financial organizations to automate risk assessment, 
                        reduce human bias, and improve operational efficiency. This system demonstrates 
                        how machine learning can support responsible lending practices and strengthen credit 
                        portfolio management in modern FinTech environments.`,
      problemStatement:
        'Manual loan evaluation processes are time-consuming and prone to human bias. The goal was to automate risk assessment while minimizing defaults and ensuring fair approval for eligible applicants.',

      approach:
        'Performed extensive EDA, handled class imbalance, applied feature engineering, and built ML pipelines using Logistic Regression, Random Forest, and Gradient Boosting. Models were evaluated using ROC-AUC, recall, and confusion matrices.',

      dataUsed:
        'Large-scale financial dataset containing 45,000+ loan applications with demographic, income, and credit history attributes.',

      tools: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Streamlit',
        'Matplotlib',
        'Seaborn'
      ],

      techniques: [
        'Classification',
        'Imbalanced Data Handling',
        'Feature Engineering',
        'ROC-AUC Optimization',
        'Pipeline Modeling'
      ],

      results: [
        'Achieved ROC-AUC score up to 0.975 using Gradient Boosting',
        'Maintained high recall for approved applicants',
        'Reduced false approvals through threshold tuning',
        'Deployed real-time prediction dashboard'
      ],

      githubUrl: 'https://github.com/sai-govinda-rao/Loan-Approval-Prediction-System',
      demoUrl: 'https://loan-approval-prediction-system1.streamlit.app/'
    },

    {
      id: 5,
      slug: 'ai-vs-human-text',

      title: 'AI vs Human Text Classification',
      shortDescription:
        'NLP-based system to detect whether text is AI-generated or human-written.',

      imageGradient: 'linear-gradient(135deg, #7c3aed, #6366f1)',
      buttonColor: 'linear-gradient(135deg, #a78bfa, #6366f1)',
      icon: 'nlp.png',

      longDescription: `This project addresses the growing challenge of distinguishing between human-written and AI-generated content in the digital era. With the rapid adoption of large language models, verifying content authenticity has become critical for education, journalism, and online platforms. This system uses Natural Language Processing techniques and machine learning models to classify text accurately.

                        The project includes text cleaning, feature extraction using TF-IDF, and training multiple classification algorithms. Performance was evaluated through accuracy and comparative analysis. The deployed Streamlit application allows users to test content in real time. This solution demonstrates how data-driven approaches can help detect AI-generated content, promote transparency, and support responsible use of artificial intelligence in content creation.`,

      problemStatement:
        'The rise of AI-generated content makes it difficult to verify authorship. The objective was to build a reliable detection system for distinguishing human and AI-generated text.',

      approach:
        'Cleaned and preprocessed text data, extracted TF-IDF features, and trained multiple classification models including Logistic Regression, Naive Bayes, and Linear SVM.',

      dataUsed:
        'Balanced text dataset containing human-written and AI-generated samples from multiple sources.',

      tools: [
        'Python',
        'Scikit-learn',
        'Pandas',
        'Matplotlib',
        'Streamlit'
      ],

      techniques: [
        'Text Preprocessing',
        'TF-IDF Vectorization',
        'NLP Classification',
        'Model Evaluation',
        'Pipeline Deployment'
      ],

      results: [
        'Achieved up to 77% accuracy using Linear SVM',
        'Built real-time prediction web application',
        'Improved generalization through feature tuning',
        'Successfully deployed on cloud'
      ],

      githubUrl: 'https://github.com/sai-govinda-rao/Ai-vs-Human-Generated-Text-Classification',
      demoUrl: 'https://llm-generated-vs-human-text-classification-appapp-zfkp3b.streamlit.app/'
    },

    {
      id: 6,
      slug: 'air-quality-classification',

      title: 'Air Quality Classification System',
      shortDescription:
        'Machine learning application to classify air quality levels using pollution data.',

      imageGradient: 'linear-gradient(135deg, #0284c7, #0ea5e9)',
      buttonColor: 'linear-gradient(135deg, #7dd3fc, #0ea5e9)',
      icon: 'air.png',

      longDescription: `This project aims to analyze environmental pollution data and classify air quality levels into Good, Moderate, Poor, and Hazardous categories. Air pollution is a major public health concern, and timely monitoring is essential for governments and urban planners. By leveraging machine learning, this system provides automated air quality assessment based on pollutant concentrations and climatic factors.

                        The project involves detailed exploratory analysis, correlation studies, and feature engineering to understand pollution patterns. Multiple classification models were trained and compared, with Random Forest achieving the best performance. The deployed Streamlit application enables real-time prediction and visualization. This system demonstrates how data science can support environmental monitoring, public health planning, and smart city initiatives.`,

      problemStatement:
        'Air pollution poses major health risks, and accurate classification is required for early warning and policy planning.',

      approach:
        'Performed EDA on pollutant data, engineered features, and trained multiple ML models. Random Forest was selected as the best-performing model.',

      dataUsed:
        'Environmental dataset containing temperature, humidity, PM2.5, PM10, and gas concentration records.',

      tools: [
        'Python',
        'Pandas',
        'NumPy',
        'Seaborn',
        'Matplotlib',
        'Scikit-learn',
        'Streamlit'
      ],

      techniques: [
        'Multiclass Classification',
        'Correlation Analysis',
        'Model Comparison',
        'Feature Engineering',
        'Deployment'
      ],

      results: [
        'Random Forest achieved 95% accuracy',
        'Identified particulate matter as main pollution driver',
        'Developed interactive monitoring dashboard',
        'Enabled real-time air quality prediction'
      ],

      githubUrl: 'https://github.com/sai-govinda-rao/Air-Pollution-Analysis-Classification-',
      demoUrl: 'https://air-pollution-analysis-classification.streamlit.app/'
    },

    {
      id: 4,
      slug: 'ai-assistant-analytics',

      title: 'AI Assistant Usage Analytics & Retention Prediction',
      shortDescription:
        'Data science system to analyze AI usage behavior and predict user retention.',

      imageGradient: 'linear-gradient(135deg, #9333ea, #ec4899)',
      buttonColor: 'linear-gradient(135deg, #f9a8d4, #ec4899)',
      icon: 'education.png',

     longDescription: `This project analyzes how students interact with AI-powered learning assistants and predicts whether they are likely to continue using these tools. With AI becoming an integral part of education, understanding user engagement and satisfaction is essential for improving learning platforms. This system applies behavioral analytics and machine learning to study interaction patterns.

                      Using a realistic synthetic dataset, the project performs in-depth exploratory analysis and feature engineering to capture engagement behavior, task context, and satisfaction levels. Multiple classification models were trained and evaluated to predict reuse probability. The deployed dashboard provides interactive insights and predictions. This solution demonstrates how data science can enhance user experience, optimize EdTech products, and support data-driven decision-making in digital education.`,
                        
      problemStatement:
        'Understanding AI engagement patterns is crucial for improving user experience and retention in educational platforms.',

      approach:
        'Performed behavioral EDA, engineered engagement features, and trained classification models with proper preprocessing pipelines.',

      dataUsed:
        'Synthetic dataset of 10,000 AI-student interaction sessions with behavioral and contextual features.',

      tools: [
        'Python',
        'Pandas',
        'NumPy',
        'Seaborn',
        'Matplotlib',
        'Scikit-learn',
        'Streamlit'
      ],

      techniques: [
        'Behavioral Analytics',
        'Feature Engineering',
        'Classification',
        'Pipeline Modeling',
        'Cloud Deployment'
      ],

      results: [
        'Identified satisfaction as strongest retention factor',
        'Improved reuse prediction accuracy',
        'Built production-ready analytics dashboard',
        'Deployed scalable cloud application'
      ],

      githubUrl: 'https://github.com/sai-govinda-rao/AI-Student-Interaction-Analytics',
      demoUrl: 'https://ai-student-interaction-analytics.streamlit.app/'
    }

  ];

  getProjects(): Project[] {
    return this.projects;
  }

  /** Used by Project Details page */
  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(project => project.slug === slug);
  }
}
