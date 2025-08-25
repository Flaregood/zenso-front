import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./registration-page/registration-page.component').then(
        (m) => m.RegistrationPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
