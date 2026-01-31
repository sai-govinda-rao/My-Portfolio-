import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pageTitle = 'Get In Touch';

  subtitle =
    "I’d love to connect with you. Whether it’s a job opportunity, collaboration, or a quick discussion around data science and technology — feel free to reach out.";

  availability = 'Available for new opportunities';

  email = 'kornusaigovinda@gmail.com';
  phone = '+91 80740 25622';
  location = 'Visakhapatnam, Andhra Pradesh, India';

  linkedinUrl = 'https://www.linkedin.com/in/kornu-sai-govinda-rao-b077a9286/';
  githubUrl = 'https://github.com/sai-govinda-rao';

  recruiterNote =
    'Recruiters and hiring managers can connect with me directly through LinkedIn for professional discussions or explore my GitHub profile to review real-world projects, clean code practices, and problem-solving skills.';
    
}
