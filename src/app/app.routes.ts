import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Projects } from '../components/projects/projects';
import { About } from '../components/about/about';
import { MainDashboard } from '../components/main-dashboard/main-dashboard';
import { SocialLinks } from '../components/social-links/social-links';

export const routes: Routes = [
    {path: '', redirectTo: 'Home', pathMatch: 'full'},
    {
        path: '', component: MainDashboard, children: [
            { path: 'Home', component: Home },
            { path: 'Projects', component: Projects },
            { path: 'About', component: About },
            { path: 'Social Links', component: SocialLinks },
        ]
    },
];
