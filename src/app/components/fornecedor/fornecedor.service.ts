import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private baseUrl = 'http://localhost:8080/fornecedor';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  create(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.baseUrl, fornecedor);
  }
}
