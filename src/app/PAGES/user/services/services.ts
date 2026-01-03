import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent {
  selectedService: Service | null = null;
  discountCode = '';
  quantity = 1;

  services: Service[] = [
    { id: '1', name: 'تصميم شعار', description: 'تصميم شعار احترافي', price: 500, category: 'تصميم' },
    { id: '2', name: 'كتابة محتوى', description: 'كتابة محتوى عالي الجودة', price: 1000, category: 'محتوى' },
    { id: '3', name: 'تطوير موقع', description: 'تطوير موقع متجاوب', price: 5000, category: 'تطوير' },
    { id: '4', name: 'إدارة وسائل التواصل', description: 'إدارة شاملة لحساباتك', price: 2000, category: 'تسويق' },
  ];

  selectService(service: Service): void {
    this.selectedService = service;
    this.quantity = 1;
    this.discountCode = '';
  }

  getTotal(): number {
    if (!this.selectedService) return 0;
    return this.selectedService.price * this.quantity;
  }

  onPlaceOrder(): void {
    // TODO: Connect to order creation API
    console.log('Order placed:', {
      service: this.selectedService,
      quantity: this.quantity,
      discountCode: this.discountCode,
      total: this.getTotal(),
    });
  }
}
