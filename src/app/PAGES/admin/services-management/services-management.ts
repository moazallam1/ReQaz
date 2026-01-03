import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../../SHARED/components/badge/badge.component';
import { ModalComponent } from '../../../SHARED/components/modal/modal.component';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-services-management',
  imports: [CommonModule, FormsModule, BadgeComponent, ModalComponent],
  templateUrl: './services-management.html',
  styleUrl: './services-management.css',
})
export class ServicesManagementComponent {
  showModal = false;
  isEditing = false;

  formData: Partial<Service> = {};

  services: Service[] = [
    { id: '1', name: 'تصميم شعار', description: 'تصميم شعار احترافي', price: 500, category: 'تصميم', status: 'active' },
    { id: '2', name: 'كتابة محتوى', description: 'كتابة محتوى عالي الجودة', price: 1000, category: 'محتوى', status: 'active' },
    { id: '3', name: 'تطوير موقع', description: 'تطوير موقع متجاوب', price: 5000, category: 'تطوير', status: 'inactive' },
  ];

  openAddModal(): void {
    this.isEditing = false;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(service: Service): void {
    this.isEditing = true;
    this.formData = { ...service };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSaveService(): void {
    // TODO: Connect to API
    console.log('Service saved:', this.formData);
    this.closeModal();
  }

  deleteService(id: string): void {
    // TODO: Connect to API
    this.services = this.services.filter(s => s.id !== id);
  }
}
