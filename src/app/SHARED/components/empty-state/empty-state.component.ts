import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  template: `
    <div class="flex flex-col items-center justify-center py-16">
      <div class="text-6xl mb-4">{{ icon }}</div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-center max-w-md">{{ message }}</p>
    </div>
  `,
  styles: []
})
export class EmptyStateComponent {
  @Input() icon = '📭';
  @Input() title = 'لا توجد بيانات';
  @Input() message = 'لم نتمكن من العثور على أي بيانات';
}
