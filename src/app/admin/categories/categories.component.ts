import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Product } from '../../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  products: Product[] = [];
  categoryData: any;
  url: string = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) {}
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
  });
  async ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.categoryData = data;
    });
  }
  // constructor(private http: HttpClient) {}
  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    console.log(this.productForm.value);
    axios
      .post('http://localhost:3000/categories', this.productForm.value)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    // this.http.post(this.url, this.productForm.value).subscribe((data) => {
    //   console.log(data);
    // });
  }
  onDel = (id: any) => {
    axios.delete(`http://localhost:3000/product/${id}`).then((data) => {
      console.log(data);
    });
  };
  refresh(): void {
    window.location.href = '/admin';
  }
}
