import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthStateService } from '../../CORE/auth-state.service';

interface SidebarItem {
  label: string;
  icon: string;
  routerLink: string;
  adminOnly?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  private authState = inject(AuthStateService);
  isAdmin = this.authState.isAdmin;

  sidebarItems: SidebarItem[] = [
    // User items
    { label: 'لوحة التحكم', icon: '📊', routerLink: '/dashboard/user' },
    { label: 'طلباتي', icon: '📋', routerLink: '/user/orders' },
    { label: 'الخدمات', icon: '🔧', routerLink: '/user/services' },
    { label: 'إخطاراتي', icon: '🔔', routerLink: '/user/notifications' },
    { label: 'ملفي الشخصي', icon: '👤', routerLink: '/user/profile' },
    // Admin items
    { label: 'لوحة التحكم', icon: '📊', routerLink: '/dashboard/admin', adminOnly: true },
    { label: 'إدارة الخدمات', icon: '⚙️', routerLink: '/admin/services', adminOnly: true },
    { label: 'إدارة الطلبات', icon: '📦', routerLink: '/admin/orders', adminOnly: true },
    { label: 'إدارة المستخدمين', icon: '👥', routerLink: '/admin/users', adminOnly: true },
    { label: 'أكواد الخصم', icon: '🎟️', routerLink: '/admin/discounts', adminOnly: true },
    // { label: 'إدارة المسوقين', icon: '📈', routerLink: '/admin/marketers', adminOnly: true },
    // { label: 'الرسائل', icon: '💬', routerLink: '/admin/messages', adminOnly: true },
  ];

  getVisibleItems(): SidebarItem[] {
    return this.sidebarItems.filter(item => {
      if (item.adminOnly && !this.isAdmin()) return false;
      return true;
    });
  }
}
