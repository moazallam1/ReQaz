import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = '';
  email = '';
  subject = '';
  message = '';

  onSubmit(): void {
    console.log('Contact submitted', { name: this.name, email: this.email, subject: this.subject, message: this.message });
  }
}
