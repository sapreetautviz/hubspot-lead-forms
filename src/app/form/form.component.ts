import { Component, ViewChild } from '@angular/core';
import { ApisService, HubSpotLead } from '../services/apis.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @ViewChild('leadForm') leadForm!: NgForm; 
  
  constructor(private apiService: ApisService) {}

  onSubmit(form: any) {
    debugger
    if (form.valid) {
      const lead: HubSpotLead = {
        id: 0,
        date: new Date(),
        firstName: form.value.name,
        lastName: form.value.surname ,
        phoneNumber: form.value.phoneNumber,
        email: form.value.emailAddress,
        category: 'Unknown', 
        budget: 0, 
        discrption: form.value.message,
      };

      this.apiService.addLead(lead).subscribe({
        next: (response) => {
          console.log('Lead added successfully:', response);
          alert('Lead added successfully!');
        },
        error: (err) => {
          console.error('Error adding lead:', err);
          alert('Error adding lead.');
        },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
