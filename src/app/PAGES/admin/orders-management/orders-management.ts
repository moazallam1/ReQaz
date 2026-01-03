import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../../SHARED/components/badge/badge.component';
import { ModalComponent } from '../../../SHARED/components/modal/modal.component';
import { EmptyStateComponent } from '../../../SHARED/components/empty-state/empty-state.component';

interface Order {
  id: string;
  clientName: string;
  serviceName: string;
  amount: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}

@Component({
  selector: 'app-orders-management',
  imports: [CommonModule, FormsModule, BadgeComponent, ModalComponent, EmptyStateComponent],
  templateUrl: './orders-management.html',
  styleUrl: './orders-management.css',
})
export class OrdersManagementComponent {
  showDeliveryModal = false;
  selectedOrder: Order | null = null;
  statusFilter = 'all';

  orders: Order[] = [
    { id: '#1001', clientName: 'أحمد محمد', serviceName: 'تصميم شعار', amount: 500, status: 'completed', createdAt: '2024-01-15' },
    { id: '#1002', clientName: 'فاطمة علي', serviceName: 'كتابة محتوى', amount: 1000, status: 'processing', createdAt: '2024-01-16' },
    { id: '#1003', clientName: 'محمد إبراهيم', serviceName: 'تطوير موقع', amount: 5000, status: 'pending', createdAt: '2024-01-17' },
    { id: '#1004', clientName: 'ليلى حسن', serviceName: 'إدارة وسائل التواصل', amount: 2000, status: 'completed', createdAt: '2024-01-18' },
  ];

  get filteredOrders(): Order[] {
    if (this.statusFilter === 'all') return this.orders;
    return this.orders.filter(o => o.status === this.statusFilter);
  }

  openDeliveryModal(order: Order): void {
    this.selectedOrder = order;
    this.showDeliveryModal = true;
  }

  closeDeliveryModal(): void {
    this.showDeliveryModal = false;
  }

  updateOrderStatus(newStatus: string): void {
    if (this.selectedOrder) {
      const order = this.orders.find(o => o.id === this.selectedOrder!.id);
      if (order) {
        order.status = newStatus as any;
      }
      this.closeDeliveryModal();
    }
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
