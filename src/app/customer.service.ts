import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/customer';

  constructor(private http: HttpClient) { }

  createCustomer(customer: Object): Observable<Object> {
    const headers = { 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Origin': '*' };
    return this.http.post(`${this.baseUrl}`, customer, { headers });
  }

  getCustomersList(): Observable<any> {

     let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
     });
     let options = {
        headers: headers
     }

    return this.http.get(`${this.baseUrl}`, options);
  }
}
