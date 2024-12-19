import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.dev';

export interface HubSpotLead {
  id: number;
  date: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  category: string;
  budget: number;
  discrption: string;
}

export interface LeadProperties {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  company: string;
  website: string;
  jobtitle: string;
  hsLeadStatus: string;
  lifecyclestage: string;
}

// leadDTO interface
export interface LeadDTO {
  properties: LeadProperties;
}


@Injectable({
  providedIn: 'root'
})


export class ApisService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  addLead(lead: HubSpotLead): Observable<HubSpotLead> {
    return this.http.post<HubSpotLead>(`${this.apiUrl}/api/AIAgent/HubSpot-Lead-Creating`, lead, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

   createContact(leadDTO: LeadDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/AIAgent/Contact-Creating`, leadDTO, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

}
