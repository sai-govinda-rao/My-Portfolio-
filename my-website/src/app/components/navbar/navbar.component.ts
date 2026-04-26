import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  brandName = 'KORNU SAI GOVINDA RAO';
  menuOpen = false;
  activeSection = 'home';

  sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'myNetwork', label: 'My Network' },
    { id: 'contact', label: 'Contact' }
  ];

  isMobile = false;

  ngOnInit() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
  }

  // toggleMenu() {
  //   this.menuOpen = !this.menuOpen;
  // }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
    // Freeze/unfreeze background scroll
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // scrollTo(id: string) {
  //   document.getElementById(id)?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });
  // }

  scrollTo(id: string) {
    document.body.style.overflow = ''; // ← add this line
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        },
        {
          threshold: 0   // ✅ KEY FIX
        }
      );

      this.sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) observer.observe(el);
      });
    }, 200);
  }
}
