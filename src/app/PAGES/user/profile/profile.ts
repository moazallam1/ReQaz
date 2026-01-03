import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthStateService } from '../../../CORE/auth-state.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent {
  private authState = inject(AuthStateService);
  currentUser = this.authState.currentUser;

  formData = {
    name: this.currentUser()?.name || '',
    email: this.currentUser()?.email || '',
    phone: '',
    bio: '',
  };

  passwordData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  onSaveProfile(): void {
    // TODO: Connect to profile update API
    console.log('Profile updated:', this.formData);
  }

  onChangePassword(): void {
    // TODO: Connect to password change API
    console.log('Password change requested:', this.passwordData);
  }
}
