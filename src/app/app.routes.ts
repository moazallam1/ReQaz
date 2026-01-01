import { Routes } from '@angular/router';
import { LoginForm } from './COMPONENTS/login-form/login-form';
import { MainLayout } from './LAYOUTS/main-layout/main-layout';
import { Features } from './PAGES/features/features';
import { Home } from './PAGES/home/home';
import { Pricing } from './PAGES/pricing/pricing';
import { SignUp } from './PAGES/sign-up/sign-up';
import { UserDashboard } from './LAYOUTS/user-dashboard/user-dashboard';
import { AdminDashboard } from './LAYOUTS/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'features', component: Features },
      { path: 'pricing', component: Pricing },
      { path: 'login', component: LoginForm },
      { path: 'sign-up', component: SignUp },
    ],
  },
  { path: 'dashboard/user', component: UserDashboard },
  { path: 'dashboard/admin', component: AdminDashboard },
];
