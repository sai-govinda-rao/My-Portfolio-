import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MyNetworkComponent } from '../my-network/my-network.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, MyNetworkComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  
  jobTitle = "I'm an Associate Data Scientist";

  ngAfterViewInit(): void {
    const typewriterElement = document.querySelector('.typewriter') as HTMLElement;
    if (typewriterElement) {
      this.typeWriter(this.jobTitle, typewriterElement);
    }
  }

  typeWriter(text: string, element: HTMLElement, delay = 100) {
    let i = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting && i < text.length) {
        element.textContent += text.charAt(i++);
        setTimeout(type, delay);
      } else if (!isDeleting && i === text.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && i > 0) {
        element.textContent = text.substring(0, i - 1);
        i--;
        setTimeout(type, 50);
      } else if (isDeleting && i === 0) {
        isDeleting = false;
        setTimeout(type, 500);
      }
    };

    setTimeout(type, 1000);
  }
  
}
