import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../../SHARED/components/badge/badge.component';
import { ModalComponent } from '../../../SHARED/components/modal/modal.component';
import { EmptyStateComponent } from '../../../SHARED/components/empty-state/empty-state.component';

interface Discount {
  id: string;
  code: string;
  percentage: number;
  maxUses: number;
  usedCount: number;
  expiryDate: string;
  status: 'active' | 'expired';
}

@Component({
  selector: 'app-discounts-management',
  imports: [CommonModule, FormsModule, BadgeComponent, ModalComponent, EmptyStateComponent],
  templateUrl: './discounts-management.html',
  styleUrl: './discounts-management.css',
})
export class DiscountsManagementComponent {
  showModal = false;
  isEditing = false;

  formData: Partial<Discount> = {};

  discounts: Discount[] = [
    { id: '1', code: 'SAVE20', percentage: 20, maxUses: 100, usedCount: 45, expiryDate: '2024-12-31', status: 'active' },
    { id: '2', code: 'NEWYEAR', percentage: 30, maxUses: 50, usedCount: 50, expiryDate: '2024-01-31', status: 'expired' },
    { id: '3', code: 'WELCOME10', percentage: 10, maxUses: 1000, usedCount: 234, expiryDate: '2024-06-30', status: 'active' },
  ];

  openAddModal(): void {
    this.isEditing = false;
    this.formData = {};
    this.showModal = true;
  }

  openEditModal(discount: Discount): void {
    this.isEditing = true;
    this.formData = { ...discount };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSaveDiscount(): void {
    // TODO: Connect to API
    console.log('Discount saved:', this.formData);
    this.closeModal();
  }

  deleteDiscount(id: string): void {
    this.discounts = this.discounts.filter(d => d.id !== id);
  }

  getRemainingUses(discount: Discount): number {
    return discount.maxUses - discount.usedCount;
  }
}
