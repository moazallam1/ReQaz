import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  summaryCards = [
    { label: 'إجمالي الطلبات', value: '156', icon: '📋', color: 'bg-blue-50' },
    { label: 'الطلبات المدفوعة', value: '142', icon: '💰', color: 'bg-green-50' },
    { label: 'الطلبات لم يتم تسليمها', value: '8', icon: '⚠️', color: 'bg-red-50' },
    { label: 'عدد الخدمات', value: '32', icon: '🔧', color: 'bg-purple-50' },
    { label: 'عدد المسوقين', value: '12', icon: '👥', color: 'bg-indigo-50' },
  ];

  recentOrders = [
    { id: '#1001', user: 'أحمد محمد', service: 'تصميم شعار', status: 'تم التسليم', date: '2024-01-15', statusType: 'completed' },
    { id: '#1002', user: 'فاطمة علي', service: 'كتابة محتوى', status: 'لم يتم التسليم', date: '2024-01-16', statusType: 'pending' },
    { id: '#1003', user: 'محمد إبراهيم', service: 'إدارة وسائل التواصل', status: 'تم التسليم', date: '2024-01-17', statusType: 'completed' },
    { id: '#1004', user: 'ليلى حسن', service: 'تطوير موقع', status: 'تم التسليم', date: '2024-01-18', statusType: 'completed' },
    { id: '#1005', user: 'عمر خالد', service: 'تحسين SEO', status: 'لم يتم التسليم', date: '2024-01-19', statusType: 'pending' },
  ];

  marketers = [
    { name: 'سارة أحمد', code: 'SARAH2024', sales: '45', profit: '4,500 ر.س', lastDate: '2024-01-19' },
    { name: 'محمود علي', code: 'MAHMOUD10', sales: '38', profit: '3,800 ر.س', lastDate: '2024-01-18' },
    { name: 'نور فاطمة', code: 'NOOR25', sales: '52', profit: '5,200 ر.س', lastDate: '2024-01-19' },
    { name: 'خالد سالم', code: 'KHALED15', sales: '31', profit: '3,100 ر.س', lastDate: '2024-01-17' },
  ];

  systemActivity = [
    { action: 'طلب جديد', description: 'تم استقبال طلب جديد من أحمد محمد', time: 'منذ 5 دقائق', icon: '📝' },
    { action: 'إضافة خدمة', description: 'تم إضافة خدمة جديدة: استشارات تسويقية', time: 'منذ ساعة', icon: '➕' },
    { action: 'استخدام كود خصم', description: 'تم استخدام الكود NOOR25 5 مرات', time: 'منذ ساعتين', icon: '🎟️' },
  ];

  getStatusClass(statusType: string): string {
    const classes: { [key: string]: string } = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-red-100 text-red-800',
    };
    return classes[statusType] || 'bg-gray-100 text-gray-800';
  }
}
