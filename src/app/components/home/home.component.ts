import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productData: any;
  categoryData: any;
  searchText: any;
  url: string = 'http://localhost:3000/product';
  constructor(private http: HttpClient, private router: ActivatedRoute) {}
  async ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.productData = data;
      this.http.get('http://localhost:3000/categories').subscribe((data) => {
        this.categoryData = data;
      });
    });
  }
  getById = async (id: number) => {
    const { data } = await axios.get(`http://localhost:3000/product/${id}`);
    return data;
  };
}
