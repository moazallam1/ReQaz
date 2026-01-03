import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../../SHARED/components/badge/badge.component';
import { EmptyStateComponent } from '../../../SHARED/components/empty-state/empty-state.component';

interface Order {
  id: string;
  serviceName: string;
  price: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

@Component({
  selector: 'app-orders',
  imports: [CommonModule, FormsModule, BadgeComponent, EmptyStateComponent],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class OrdersComponent {
  statusFilter = 'all';

  orders: Order[] = [
    { id: '#1001', serviceName: 'تصميم شعار', price: 500, status: 'completed', createdAt: '2024-01-15' },
    { id: '#1002', serviceName: 'كتابة محتوى', price: 1000, status: 'processing', createdAt: '2024-01-16' },
    { id: '#1003', serviceName: 'تطوير موقع', price: 5000, status: 'pending', createdAt: '2024-01-17' },
  ];

  get filteredOrders(): Order[] {
    if (this.statusFilter === 'all') return this.orders;
    return this.orders.filter(o => o.status === this.statusFilter);
  }

  getStatusBadgeType(status: string): 'success' | 'warning' | 'error' | 'info' | 'default' {
    const mapping: { [key: string]: any } = {
      pending: 'warning',
      processing: 'info',
      completed: 'success',
      cancelled: 'error',
    };
    return mapping[status] || 'default';
  }

  getStatusLabel(status: string): string {
    const mapping: { [key: string]: string } = {
      pending: 'قيد الانتظار',
      processing: 'قيد المعالجة',
      completed: 'مكتملة',
      cancelled: 'ملغاة',
    };
    return mapping[status] || status;
  }
}
