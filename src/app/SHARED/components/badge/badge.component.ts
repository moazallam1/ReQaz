import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeType = 'success' | 'warning' | 'error' | 'info' | 'default';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  template: `
    <span [ngClass]="getClasses()">
      {{ text }}
    </span>
  `,
  styles: []
})
export class BadgeComponent {
  @Input() text = '';
  @Input() type: BadgeType = 'default';

  getClasses(): string {
    const baseClasses = 'px-3 py-1 rounded-full text-xs font-medium';
    const typeClasses = {
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
      default: 'bg-gray-100 text-gray-800',
    };
    return `${baseClasses} ${typeClasses[this.type]}`;
  }
}
