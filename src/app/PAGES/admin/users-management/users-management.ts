import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../../SHARED/components/badge/badge.component';
import { EmptyStateComponent } from '../../../SHARED/components/empty-state/empty-state.component';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  joinDate: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-users-management',
  imports: [CommonModule, FormsModule, BadgeComponent, EmptyStateComponent],
  templateUrl: './users-management.html',
  styleUrl: './users-management.css',
})
export class UsersManagementComponent {
  searchTerm = '';
  roleFilter = 'all';

  users: User[] = [
    { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', role: 'user', joinDate: '2024-01-10', status: 'active' },
    { id: '2', name: 'محمد الإداري', email: 'admin@example.com', role: 'admin', joinDate: '2024-01-01', status: 'active' },
    { id: '3', name: 'فاطمة علي', email: 'fatima@example.com', role: 'user', joinDate: '2024-01-15', status: 'active' },
    { id: '4', name: 'علي محمود', email: 'ali@example.com', role: 'user', joinDate: '2024-01-12', status: 'inactive' },
  ];

  get filteredUsers(): User[] {
    return this.users.filter(u => {
      const matchesSearch = u.name.includes(this.searchTerm) || u.email.includes(this.searchTerm);
      const matchesRole = this.roleFilter === 'all' || u.role === this.roleFilter;
      return matchesSearch && matchesRole;
    });
  }

  toggleUserStatus(userId: string): void {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.status = user.status === 'active' ? 'inactive' : 'active';
    }
  }

  deleteUser(userId: string): void {
    this.users = this.users.filter(u => u.id !== userId);
  }
}
