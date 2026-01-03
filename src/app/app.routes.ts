import { Routes } from '@angular/router';
import { PublicLayout } from './LAYOUTS/public-layout/public-layout';
import { UserLayout } from './LAYOUTS/user-layout/user-layout';
import { AdminLayout } from './LAYOUTS/admin-layout/admin-layout';
import { authGuard } from './CORE/guards/auth.guard';
import { adminGuard } from './CORE/guards/admin.guard';
import { Home } from './PAGES/home/home';
import { Features } from './PAGES/features/features';
import { Pricing } from './PAGES/pricing/pricing';
import { Contact } from './PAGES/contact/contact';
import { Login } from './PAGES/login/login';
import { SignUp } from './PAGES/sign-up/sign-up';
import { ForgotPassword } from './PAGES/forgot-password/forgot-password';
import { UserDashboard } from './LAYOUTS/user-dashboard/user-dashboard';
import { AdminDashboard } from './LAYOUTS/admin-dashboard/admin-dashboard';
import { ProfileComponent } from './PAGES/user/profile/profile';
import { OrdersComponent } from './PAGES/user/orders/orders';
import { ServicesComponent } from './PAGES/user/services/services';
import { NotificationsComponent } from './PAGES/user/notifications/notifications';
import { ServicesManagementComponent } from './PAGES/admin/services-management/services-management';
import { OrdersManagementComponent } from './PAGES/admin/orders-management/orders-management';
import { UsersManagementComponent } from './PAGES/admin/users-management/users-management';
import { DiscountsManagementComponent } from './PAGES/admin/discounts-management/discounts-management';

export const routes: Routes = [
  // ============ PUBLIC ROUTES ============
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'features', component: Features },
      { path: 'pricing', component: Pricing },
      { path: 'contact', component: Contact },
      { path: 'login', component: Login },
      { path: 'sign-up', component: SignUp },
      { path: 'forgot-password', component: ForgotPassword },
    ],
  },

  // ============ USER PROTECTED ROUTES ============
  {
    path: 'user',
    component: UserLayout,
    canActivate: [authGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'notifications', component: NotificationsComponent },
    ],
  },

  // User Dashboard
  {
    path: 'dashboard',
    component: UserLayout,
    canActivate: [authGuard],
    children: [
      { path: 'user', component: UserDashboard },
    ],
  },

  // ============ ADMIN PROTECTED ROUTES ============
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [authGuard, adminGuard],
    children: [
      { path: 'services', component: ServicesManagementComponent },
      { path: 'orders', component: OrdersManagementComponent },
      { path: 'users', component: UsersManagementComponent },
      { path: 'discounts', component: DiscountsManagementComponent },
    ],
  },

  // Admin Dashboard
  {
    path: 'dashboard',
    component: AdminLayout,
    canActivate: [authGuard, adminGuard],
    children: [
      { path: 'admin', component: AdminDashboard },
    ],
  },

  // Wildcard Route
  { path: '**', redirectTo: '' },
];
