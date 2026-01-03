import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <div class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
    </div>
  `,
  styles: []
})
export class LoaderComponent {
  @Input() message = 'جاري التحميل...';
}
