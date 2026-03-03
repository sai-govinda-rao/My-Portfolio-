import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-network.component.html',
  styleUrl: './my-network.component.css'
})
export class MyNetworkComponent {
  
  title = 'Professional Presence & Coding Profiles';

  description =
    'I actively engage across professional and competitive coding platforms to enhance my problem-solving skills, collaborate with the tech community, and stay aligned with industry standards.';

  socials = [
    { name: 'LeetCode', url: 'https://leetcode.com/u/Sai_govinda/', icon: 'leetcode.png' },
    { name: 'GitHub', url: 'https://github.com/sai-govinda-rao', icon: 'git.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kornu-sai-govinda-rao-b077a9286/', icon: 'linkedin.png' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/kornusaigovinda1', icon: 'HackerRank.png' },
    { name: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/profile/kornusai9w5q?tab=activity', icon: 'geeks.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/its_me__sai___420?igsh=c2Fsbjdsa3J0cmRp', icon: 'insta.png' }
  ];

  
}
