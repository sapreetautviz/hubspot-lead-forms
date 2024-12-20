import { Component, Injector, viewChild } from '@angular/core';
import { ApisService, LeadDTO } from '../services/apis.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ToastrModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(
    private toastr: ToastrService,
    private apiService: ApisService
  ) {
  }

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
      hsLeadStatus: 'NEW',
      lifecyclestage: 'lead',
    },
  };

  createContact(form: NgForm): void {
    if (form.valid) {
      this.apiService.createContact(this.lead).subscribe(
        (response) => {
          console.log(response);
          this.toastr.success('Contact created successfully');
        },
        (error) => {
          this.toastr.error('Error creating contact');
        }
      );
    } else {
      this.toastr.error('Please fill all required fields correctly');
    }
  }
}

