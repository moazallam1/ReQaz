import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../../../SHARED/components/empty-state/empty-state.component';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'order' | 'message' | 'system' | 'promo';
  createdAt: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  imports: [CommonModule, EmptyStateComponent],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class NotificationsComponent {
  notifications: Notification[] = [
    { id: '1', title: 'تم تسليم طلبك', message: 'تم تسليم طلب تصميم الشعار بنجاح', type: 'order', createdAt: '2024-01-19', read: false },
    { id: '2', title: 'رسالة جديدة', message: 'لديك رسالة جديدة من الدعم الفني', type: 'message', createdAt: '2024-01-18', read: false },
    { id: '3', title: 'عرض خاص', message: 'احصل على خصم 20% على جميع الخدمات', type: 'promo', createdAt: '2024-01-17', read: true },
  ];

  getNotificationIcon(type: string): string {
    const icons: { [key: string]: string } = {
      order: '📦',
      message: '💬',
      system: '⚙️',
      promo: '🎉',
    };
    return icons[type] || '📢';
  }

  getNotificationColor(type: string): string {
    const colors: { [key: string]: string } = {
      order: 'border-blue-200 bg-blue-50',
      message: 'border-purple-200 bg-purple-50',
      system: 'border-gray-200 bg-gray-50',
      promo: 'border-yellow-200 bg-yellow-50',
    };
    return colors[type] || 'border-gray-200 bg-gray-50';
  }

  markAsRead(id: string): void {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) notification.read = true;
  }
}
