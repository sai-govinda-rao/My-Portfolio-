import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { MyNetworkComponent } from './pages/my-network/my-network.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectCardComponent },
    { path: 'mynetwork', component: MyNetworkComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
