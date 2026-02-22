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
      slug: 'ai-vs-real-image-detection',

      title: 'AI-Generated vs Real Image Detection',
      shortDescription:
        'classify AI-generated images and real photographs using CNN and transfer learning.',

      imageGradient: 'linear-gradient(135deg, #6366f1, #06b6d4)',
      buttonColor: 'linear-gradient(135deg, #a5b4fc, #22d3ee)',
      icon: 'AivsReal.JPG',

      longDescription:
        `This project focuses on detecting AI-generated images versus authentic photographs using advanced 
        deep learning and computer vision techniques. With the rapid rise of generative AI tools, verifying 
        visual authenticity has become critical for media platforms, security systems, and digital ecosystems.
        The project implements an end-to-end pipeline that compares a custom Convolutional Neural Network 
        with a transfer learning approach using EfficientNetB0 pretrained on ImageNet. Extensive preprocessing,
        normalization, and optimization were applied to improve generalization and inference reliability. 
        The pretrained model significantly outperformed the custom architecture, demonstrating the 
        effectiveness of transfer learning for complex visual tasks with limited data. The system supports 
        real-time prediction on user-uploaded images and highlights subtle patterns that differentiate 
        synthetic content from real-world photographs. This project showcases practical skills in deep learning
        model design, evaluation, and deployment considerations for real-world AI detection systems.`,

      problemStatement:
        'The rapid proliferation of generative AI tools has made it increasingly difficult to distinguish synthetic images from authentic photographs, posing risks to media integrity, security, and public trust.',

      approach:
        'Collected labeled datasets of AI-generated and real images, applied preprocessing and augmentation, trained a custom CNN model, implemented transfer learning with EfficientNetB0, and evaluated performance using classification metrics.',

      dataUsed:
        'Mixed dataset of AI-generated images from generative models and real-world photographs sourced from public image repositories.',

      tools: [
        'Python',
        'TensorFlow',
        'Keras',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Google Colab'
      ],

      techniques: [
        'Convolutional Neural Networks',
        'Transfer Learning',
        'Fine-Tuning',
        'Image Preprocessing',
        'Data Augmentation',
        'Model Evaluation',
        'GPU Acceleration'
      ],

      results: [
        'Achieved ~80% accuracy with custom CNN model',
        'Improved accuracy to ~91.6% using EfficientNetB0 transfer learning',
        'Demonstrated strong precision and recall across classes',
        'Built real-time prediction pipeline for image uploads',
        'Validated effectiveness of pretrained models for synthetic media detection'
      ],

      githubUrl: '',
      demoUrl: ''
    },

    {
      id: 3,
      slug: 'gold-silver-price-dashboard',

      title: 'Gold & Silver Price Analysis Dashboard',
      shortDescription:
        'Interactive data analytics dashboard to analyze long-term gold and silver price trends.',

      imageGradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      buttonColor: 'linear-gradient(135deg, #fde68a, #f59e0b)',
      icon: 'Dashboard.png',

      longDescription:
        `This project focuses on building an interactive analytics dashboard to study long-term trends,
         volatility, and risk patterns in gold and silver markets using more than 40 years of historical 
         data (1985–2025). The dashboard enables users to explore price movements, returns, and market 
         behavior under different economic and geopolitical conditions. Through detailed exploratory 
         analysis, moving averages, and volatility modeling, the system provides valuable insights into 
         safe-haven asset behavior and currency influence on pricing. A SARIMA-based forecasting model 
         was implemented and critically evaluated to understand its practical limitations. The application 
         also supports USD to INR conversion, making it relevant for Indian investors. Built using Python 
         and Streamlit, this project demonstrates strong skills in financial analytics, time series analysis, 
         and data-driven decision support systems.`,

      problemStatement:
        'Investors and analysts often struggle to interpret long-term precious metal trends and assess market risk using raw historical data. There was a need for a centralized analytical platform to visualize and interpret these patterns effectively.',

      approach:
        'Collected and cleaned historical price data, performed exploratory analysis, calculated returns and volatility metrics, implemented moving averages, developed SARIMA forecasting models, and designed an interactive Streamlit dashboard.',

      dataUsed:
        'Historical gold and silver price data from 1985 to 2025, including daily and monthly market records and currency exchange rates.',

      tools: [
        'Python',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Streamlit',
        'Time Series Analysis',
        'GitHub'
      ],

      techniques: [
        'Exploratory Data Analysis',
        'Time Series Modeling',
        'Moving Averages',
        'Volatility Analysis',
        'Return Distribution Analysis',
        'SARIMA Forecasting',
        'Data Visualization'
      ],

      results: [
        'Identified long-term upward trends in precious metal prices',
        'Analyzed volatility patterns during economic crises',
        'Demonstrated safe-haven behavior of gold during uncertainty',
        'Built interactive financial analytics dashboard',
        'Enabled currency-adjusted market analysis for Indian investors'
      ],

      githubUrl: 'https://lnkd.in/gDFw5zS8',
      demoUrl: 'https://lnkd.in/gK6iTux9'
    },


    {
      id: 4,
      slug: 'loan-approval-system',

      title: 'Loan Approval Prediction System',
      shortDescription:
        'Machine learning system for predicting loan approval using credit risk analysis.',

      imageGradient: 'linear-gradient(135deg, #0f766e, #14b8a6)',
      buttonColor: 'linear-gradient(135deg, #5eead4, #14b8a6)',
      icon: 'LoanApproval.png',

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

      longDescription: `This project aims to analyze environmental pollution data and classify air quality 
                        levels into Good, Moderate, Poor, and Hazardous categories. Air pollution is 
                        a major public health concern, and timely monitoring is essential for governments 
                        and urban planners. By leveraging machine learning, this system provides automated
                        air quality assessment based on pollutant concentrations and climatic factors.

                        The project involves detailed exploratory analysis, correlation studies, and feature 
                        engineering to understand pollution patterns. Multiple classification models were 
                        trained and compared, with Random Forest achieving the best performance. The deployed 
                        Streamlit application enables real-time prediction and visualization. This system 
                        demonstrates how data science can support environmental monitoring, public health 
                        planning, and smart city initiatives.`,

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

     longDescription: `This project analyzes how students interact with AI-powered learning assistants
                       and predicts whether they are likely to continue using these tools. With AI becoming 
                       an integral part of education, understanding user engagement and satisfaction is 
                       essential for improving learning platforms. This system applies behavioral analytics 
                       and machine learning to study interaction patterns.

                      Using a realistic synthetic dataset, the project performs in-depth exploratory analysis
                      and feature engineering to capture engagement behavior, task context, and satisfaction 
                      levels. Multiple classification models were trained and evaluated to predict reuse 
                      probability. The deployed dashboard provides interactive insights and predictions. 
                      This solution demonstrates how data science can enhance user experience, optimize 
                      EdTech products, and support data-driven decision-making in digital education.`,
                        
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
    },

    {
      id: 5,
      slug: 'personal-portfolio-website',

      title: 'Personal Portfolio Website (Angular)',
      shortDescription:
        'Responsive personal portfolio website built using Angular to showcase projects and skills.',

      imageGradient: 'linear-gradient(135deg, #0f172a, #2563eb)',
      buttonColor: 'linear-gradient(135deg, #60a5fa, #2563eb)',
      icon: 'Portfolio.png',

      longDescription:
        `This project focuses on designing and developing a modern, responsive personal portfolio 
        website using Angular. The platform highlights my machine learning, data science, and software 
        development projects through an interactive and user-friendly interface. It features dynamic 
        routing, reusable components, and service-based data management for scalable content updates. 
        The website is optimized for performance, accessibility, and mobile responsiveness. By deploying 
        the application on GitHub Pages, this project demonstrates real-world frontend development 
        practices, version control, and cloud-based hosting. It serves as a centralized professional 
        platform for recruiters and collaborators to explore my technical expertise and project portfolio.`,

      problemStatement:
        'Presenting technical projects in a clear and professional manner is essential for attracting recruiters and collaborators. Static resumes often fail to demonstrate practical skills and project depth.',

      approach:
        'Designed reusable Angular components, implemented service-based data binding for project management, and used routing for dynamic navigation. Applied responsive design principles and deployed the application using GitHub Pages.',

      dataUsed:
        'Project metadata including descriptions, technologies, links, and deployment URLs stored in Angular services.',

      tools: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'GitHub',
        'GitHub Pages'
      ],

      techniques: [
        'Component-Based Architecture',
        'Service-Based Data Management',
        'Routing',
        'Responsive Design',
        'Cloud Deployment'
      ],

      results: [
        'Developed a fully responsive and scalable portfolio platform',
        'Enabled dynamic project updates through centralized services',
        'Improved online professional presence',
        'Successfully deployed and maintained using GitHub Pages'
      ],

      githubUrl: 'https://github.com/sai-govinda-rao/My-Portfolio-',
      demoUrl: 'https://your-username.github.io/portfolio'
    },

    {
      id: 5,
      slug: 'mind-craft-learning-app',

      title: 'Mind-Craft: Building Minds Through Fun',
      shortDescription:
        'An interactive app that combines learning, creativity, and entertainment for users of all ages.',

      imageGradient: 'linear-gradient(135deg, #0ea5e9, #22c55e)',
      buttonColor: 'linear-gradient(135deg, #86efac, #0ea5e9)',
      icon: 'MindCraft.png',

      longDescription:
        `Mind-Craft: Building Minds Through Fun is my Master’s final year individual project and 
        one of my greatest academic achievements. This multifunctional learning platform was designed 
        to enhance cognitive skills, creativity, and digital literacy through an engaging and 
        user-friendly interface. The application integrates multiple educational modules, including 
        a calculator, English stories, dictionary, language translator, map exploration, spelling 
        correction, and interactive games such as Hangman. Built using Python and KivyMD with MySQL 
        backend support, the system provides secure authentication, guest access, and personalized user 
        profiles. The project followed a complete software engineering lifecycle, including requirement 
        analysis, UML design, database normalization, testing, and deployment planning. By combining 
        education with gamification, Mind-Craft promotes self-learning and curiosity among students and 
        children. This project strengthened my skills in full-stack application development, system 
        architecture, UI/UX design, and database management, and reflects my ability to deliver scalable, 
        real-world digital solutions.`,

      problemStatement:
        'Traditional learning tools often fail to engage students effectively, leading to reduced motivation and skill development. There was a need for a holistic platform that combines education and entertainment in a secure and interactive environment.',

      approach:
        'Designed modular architecture using Python and KivyMD, implemented secure authentication with MySQL, integrated external APIs for maps and dictionary, and developed multiple educational modules with usability-focused UI design.',

      dataUsed:
        'User authentication data, educational content datasets, story repositories, dictionary APIs, and geographical mapping services.',

      tools: [
        'Python',
        'KivyMD',
        'MySQL',
        'SQLAlchemy',
        'REST APIs',
        'Git',
        'PyCharm'
      ],

      techniques: [
        'Modular Application Design',
        'User Authentication',
        'Database Normalization',
        'UML Modeling',
        'API Integration',
        'UI/UX Design',
        'Software Testing'
      ],

      results: [
        'Developed a fully functional multi-module educational application',
        'Implemented secure login and guest access system',
        'Improved user engagement through gamified learning',
        'Achieved high usability and system reliability',
        'Successfully completed MCA final year project with strong academic evaluation'
      ],

      githubUrl: 'https://github.com/sai-govinda-rao/Mind-Craft-Application',
      demoUrl: ''
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
