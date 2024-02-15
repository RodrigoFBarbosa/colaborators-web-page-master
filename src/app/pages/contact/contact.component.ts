import { Component } from '@angular/core'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  errorMessage: string = '';

  nameError: string = '';
  emailError: string = '';
  messageError: string = '';

  submitForm() {
    this.validateName();
    this.validateEmail();
    this.validateMessage();
  }

  validateName() {
    this.nameError = this.name.trim() === '' ? "Name field cannot be empty." : '';
  }

  validateEmail() {
    this.emailError = this.email.trim() === '' ? "Email field cannot be empty." : '';
  }

  validateMessage() {
    this.messageError = this.message.trim() === '' ? "Message field cannot be empty." : '';
  }
  
}
