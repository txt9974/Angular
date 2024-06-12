import { ProductsService } from './../../products.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  category: any;
  productData: any;
  categoryData: any;
  url: string = 'http://localhost:3000/product';
  id: any = this.router.snapshot.params['id'];
  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.http.get(this.url).subscribe((data) => {
      this.productData = data;
      console.log(this.category);
    });
    this.http.get('http://localhost:3000/categories').subscribe((data) => {
      this.categoryData = data;
    });

    this.router.paramMap.subscribe((params) => {
      this.category = params.get('id');
      console.log(this.category);
    });
    this.getById(this.id);
  }
  getById = async (id: any) => {
    this.ProductsService.getProductByCategory(id).subscribe((data) => {
      this.productData = data;
    });
  };
}
