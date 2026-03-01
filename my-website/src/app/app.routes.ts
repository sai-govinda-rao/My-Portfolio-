import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: "projects/:slug", component: ProjectDetailsComponent, data: { hideNavbar: true }},
    { path: '**', redirectTo: '' }
];
