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
  
  // ← Put all your phrases here
  private phrases = [
    "I'm an Associate Data Scientist",
    "I'm a Full-Stack AI Developer",
    "I'm a Freelancer",
  ];

  private phraseIndex = 0;

  ngAfterViewInit(): void {
    const typewriterElement = document.querySelector('.typewriter') as HTMLElement;
    if (typewriterElement) {
      this.startTypewriter(typewriterElement);
    }
  }

  private startTypewriter(element: HTMLElement) {
    let charIndex = 0;
    let isDeleting = false;
    let currentPhrase = '';

    const type = () => {
      // Get current target phrase
      const target = this.phrases[this.phraseIndex];

      // Typing forward
      if (!isDeleting && charIndex < target.length) {
        element.textContent = target.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, 80);           // typing speed
      }
      // Finished typing → wait a bit then start deleting
      else if (!isDeleting && charIndex === target.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1800);                       // how long to show full text
      }
      // Deleting (backspace)
      else if (isDeleting && charIndex > 0) {
        element.textContent = target.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 40);           // deleting speed (usually faster)
      }
      // Finished deleting → go to next phrase
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;

        // Move to next phrase (loop around)
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;

        setTimeout(type, 500);          // small pause before typing next
      }
    };

    // Small initial delay before starting
    setTimeout(type, 1000);
  }
  
}
