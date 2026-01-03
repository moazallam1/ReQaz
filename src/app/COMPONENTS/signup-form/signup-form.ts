import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignUpForm {
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  agreeToTerms = false;

  onSubmit() {
    // TODO: Connect to registration API
    console.log('Sign up submitted', { fullName: this.fullName, email: this.email });
  }
}
