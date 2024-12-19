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
      // category:'',
      // budget:'',
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


}
