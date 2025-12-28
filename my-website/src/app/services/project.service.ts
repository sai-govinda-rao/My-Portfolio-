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
