import { Component, ViewChild } from '@angular/core';
import { ApisService, HubSpotLead, LeadDTO } from '../services/apis.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  lead: LeadDTO = {
    properties: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      company: '',
      website: '',
      jobtitle: '',
      hsLeadStatus: 'NEW', // You can set the default value here
      lifecyclestage: 'lead',
    },
  };

  @ViewChild('leadForm') leadForm!: NgForm; 
  
  constructor(private apiService: ApisService) {}

  createContact(): void {
    this.apiService.createContact(this.lead).subscribe(
      (response) => {
        console.log('Contact created successfully', response);
      },
      (error) => {
        console.error('Error creating contact', error);
      }
    );
  }


  // onSubmit(form: any) {
  //   debugger
  //   if (form.valid) {
  //     const lead: HubSpotLead = {
  //       id: 0,
  //       date: new Date(),
  //       firstName: form.value.name,
  //       lastName: form.value.surname ,
  //       phoneNumber: form.value.phoneNumber,
  //       email: form.value.emailAddress,
  //       category: 'Unknown', 
  //       budget: 0, 
  //       discrption: form.value.message,
  //     };

  //     this.apiService.addLead(lead).subscribe({
  //       next: (response) => {
  //         console.log('Lead added successfully:', response);
  //         alert('Lead added successfully!');
  //       },
  //       error: (err) => {
  //         console.error('Error adding lead:', err);
  //         alert('Error adding lead.');
  //       },
  //     });
  //   } else {
  //     alert('Please fill in all required fields.');
  //   }
  // }


}
