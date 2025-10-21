import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Projects } from '../components/projects/projects';
import { About } from '../components/about/about';
import { MainDashboard } from '../components/main-dashboard/main-dashboard';

export const routes: Routes = [
    {
        path: '', component: MainDashboard, children: [
            { path: 'home', component: Home },
            { path: 'projects', component: Projects },
            { path: 'about', component: About },
        ]
    },
];
