import { Routes } from '@angular/router';
import { HomeComponent } from "./routes/home/home.component";
import { ProfileComponent } from "./routes/profile/profile.component";
import { SelectionComponent } from "./routes/selection/selection.component";
import { CandidatesComponent } from "./routes/candidates/candidates.component";

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full',
    },
    {
        path: 'candidates', 
        component: CandidatesComponent, 
    },
    {
        path: 'selection', 
        component: SelectionComponent, 
    },
    {
        path: ':collection/:id', 
        component: ProfileComponent, 
    },
    { 
        path: '**', 
        redirectTo: '/'
    }
];