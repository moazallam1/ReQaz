import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  template: `
    @if (isOpen) {
      <div class="fixed inset-0 bg-black bg-opacity-50 z-40" (click)="close()"></div>
      <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 w-full max-w-md" dir="rtl">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 class="text-xl font-bold text-gray-900">{{ title }}</h2>
          <button (click)="close()" class="text-gray-500 hover:text-gray-700 transition text-2xl">×</button>
        </div>

        <!-- Content -->
        <div class="p-6">
          <ng-content></ng-content>
        </div>

        <!-- Footer -->
        <div class="p-6 border-t border-gray-200 flex gap-4 justify-end">
          <button (click)="close()" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium">
            {{ cancelLabel }}
          </button>
          <button (click)="confirm()" class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium">
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    }
  `,
  styles: []
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = 'تأكيد';
  @Input() confirmLabel = 'تأكيد';
  @Input() cancelLabel = 'إلغاء';
  @Output() onConfirm = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  close(): void {
    this.onClose.emit();
  }

  confirm(): void {
    this.onConfirm.emit();
    this.close();
  }
}
