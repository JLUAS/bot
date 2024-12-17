import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappServiceService {

  private apiUrl = 'https://bot-node-7htf.onrender.com/'; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) {}

  sendMessage(payload: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, payload, { headers });
  }}
