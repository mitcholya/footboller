import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ROUTES : Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home'}
];

 
