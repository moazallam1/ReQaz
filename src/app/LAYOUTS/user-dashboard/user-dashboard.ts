import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  imports: [CommonModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {
  summaryCards = [
    { label: 'إجمالي الطلبات', value: '24', icon: '📋', color: 'bg-blue-50' },
    { label: 'الطلبات المدفوعة', value: '18', icon: '✓', color: 'bg-green-50' },
    { label: 'الطلبات قيد التنفيذ', value: '4', icon: '⚙️', color: 'bg-yellow-50' },
    { label: 'الطلبات المكتملة', value: '22', icon: '✓✓', color: 'bg-teal-50' },
  ];

  recentOrders = [
    { id: '#1001', service: 'تصميم شعار', status: 'تم التنفيذ', date: '2024-01-15', statusType: 'completed' },
    { id: '#1002', service: 'كتابة محتوى', status: 'قيد التنفيذ', date: '2024-01-16', statusType: 'inprogress' },
    { id: '#1003', service: 'إدارة وسائل التواصل', status: 'لم يتم التسليم', date: '2024-01-17', statusType: 'pending' },
    { id: '#1004', service: 'تطوير موقع', status: 'تم التنفيذ', date: '2024-01-18', statusType: 'completed' },
  ];

  serviceMessages = [
    { service: 'تصميم شعار', message: 'تم استلام طلبك بنجاح، سيتم البدء في التنفيذ خلال 24 ساعة' },
    { service: 'كتابة محتوى', message: 'تم إنجاز 50% من المحتوى المطلوب، سيتم التسليم قريباً' },
    { service: 'إدارة وسائل التواصل', message: 'يتطلب معلومات إضافية منك للمتابعة' },
  ];

  getStatusClass(statusType: string): string {
    const classes: { [key: string]: string } = {
      completed: 'bg-green-100 text-green-800',
      inprogress: 'bg-yellow-100 text-yellow-800',
      pending: 'bg-red-100 text-red-800',
    };
    return classes[statusType] || 'bg-gray-100 text-gray-800';
  }
}
