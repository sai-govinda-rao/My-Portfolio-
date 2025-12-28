import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  technicalSkills = [
    { name: 'Python', level: 90, icon: "python.png" },
    { name: 'Core Java', level: 60, icon: "java.png" },
    { name: 'MySQL', level: 85, icon: "mysql.png" },
    { name: 'JavaScript', level: 80, icon: "js.png" },
    { name: 'HTML & CSS', level: 85, icon: "htmlcss.png" },
    { name: 'Data Structures & Algorithms', level: 80, icon: "dsa.png" }
  ];

  mlSkills = [
    { name: 'Machine Learning', level: 85, icon: "ml.png" },
    { name: 'Deep Learning', level: 75, icon: "dl.png" },
    { name: 'Data Analysis', level: 90, icon: "dataanalysis.png" },
    { name: 'Model Evaluation', level: 80, icon: "evaluation.png" }
  ];

  toolsSkills = [
    { name: 'VS Code', level: 90, icon: "vscode.png" },
    { name: 'PyCharm', level: 85, icon: "pycharm.png" },
    { name: 'Jupyter Notebook', level: 90, icon: "jupyter.png" },
    { name: 'Google Colab', level: 85, icon: "googlecollab.png" },
    { name: 'MySQL Workbench', level: 80, icon: "mysqlworkbench.png" },
    { name: 'MS Excel / Word / PPT', level: 85, icon: "MS.png" }
  ];

  softSkills = [
    { name: 'Analytical Thinking & Problem Solving', level: 90, icon: "analytical.png" },
    { name: 'Good Communication Skills', level: 85, icon: "communication.png" },
    { name: 'Collaboration & Teamwork', level: 85, icon: "teamwork.png" },
    { name: 'Continuous Learning Mindset', level: 95, icon: "learning.png" },
    { name: 'Content Creation', level: 75, icon: "content.png" }
  ];

}
