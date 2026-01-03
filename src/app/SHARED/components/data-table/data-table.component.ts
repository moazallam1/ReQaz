import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, EmptyStateComponent],
  template: `
    <div class="overflow-x-auto rounded-lg shadow-sm">
      <table class="w-full bg-white">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            @for (col of columns; track col.key) {
              <th [style.width]="col.width || 'auto'" class="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                {{ col.label }}
              </th>
            }
          </tr>
        </thead>
        <tbody>
          @if (rows.length === 0) {
            <tr>
              <td [attr.colspan]="columns.length" class="px-6 py-8 text-center">
                <app-empty-state icon="📭" title="لا توجد بيانات" message="لم نجد أي سجلات"></app-empty-state>
              </td>
            </tr>
          }

          @for (row of rows; track $index) {
            <tr class="border-b border-gray-200 hover:bg-gray-50 transition">
              @for (col of columns; track col.key) {
                <td class="px-6 py-4 text-sm text-gray-900">
                  {{ row[col.key] }}
                </td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: []
})
export class DataTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() rows: any[] = [];
}
