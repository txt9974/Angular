import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_URL = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}
  SearchKeyword(keywords: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}?title_like=${keywords}`);
  }
  getProductByCategory(category: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}?category=${category}`);
  }
}
