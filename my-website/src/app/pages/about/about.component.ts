import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

 showResumePreview = false;
  isLoading = true;

  openResumePreview() {
    this.showResumePreview = true;
    this.isLoading = true;
    // 🔥 Disable background scroll
    document.body.style.overflow = 'hidden';
  }

  closeResumePreview() {
    this.showResumePreview = false;
    // 🔥 Restore scroll
    document.body.style.overflow = 'auto';
  }

  onPdfLoad() {
    this.isLoading = false;
  }
}
