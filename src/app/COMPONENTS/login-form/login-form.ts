import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  showPassword = signal(false);
  email = '';
  password = '';
  rememberMe = false;

  onSubmit() {
    // TODO: Connect to authentication API
    console.log('Login submitted', { email: this.email, password: this.password });
  }
}
