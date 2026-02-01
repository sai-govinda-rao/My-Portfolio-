import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'my-website';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          // Delay to ensure page is rendered
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 100);
        }
      }
    });
  }

  cursor!: HTMLElement;
  glow!: HTMLElement;

  ngAfterViewInit() {
    this.cursor = document.querySelector('.custom-cursor')!;
    this.glow = document.querySelector('.custom-cursor-glow')!;
  }

  // 🖱 Mouse Move
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {

    if (!this.cursor || !this.glow) return;

    let x = e.clientX;
    let y = e.clientY;

    const elements = document.querySelectorAll(
      'a, button, .magnetic'
    ) as NodeListOf<HTMLElement>;

    let closest: HTMLElement | null = null;
    let minDistance = Infinity;

    elements.forEach((el: HTMLElement) => {

      const rect = el.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = centerX - x;
      const dy = centerY - y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < minDistance) {
        minDistance = distance;
        closest = el;
      }
    });

    const radius = 90;

    if (closest && minDistance < radius) {

      const rect = (closest as HTMLElement).getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x += (centerX - x) * 0.15;
      y += (centerY - y) * 0.15;
    }

    this.cursor.style.left = x + 'px';
    this.cursor.style.top = y + 'px';

    this.glow.style.left = e.clientX + 'px';
    this.glow.style.top = e.clientY + 'px';
  }





  // 🧲 Smart Magnetic Detection
  @HostListener('document:mouseover', ['$event'])
  onHover(e: MouseEvent) {

    const target = e.target as HTMLElement;

    if (
      target.closest('a') ||
      target.closest('button') ||
      target.closest('.nav-links li') ||
      target.closest('.mobile-links li') ||
      target.closest('.profile-photo') ||
      target.classList.contains('magnetic')
    ) {
      this.cursor.classList.add('active');
    }
  }

  @HostListener('document:mouseout', ['$event'])
  onLeave() {
    this.cursor.classList.remove('active');
  }

}
