import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent implements OnInit {
  products: Product[] = [];
  productData: any;
  categoryData: any;
  url: string = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    img: new FormControl(''),
  });
  async ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.productData = data;
    });
    this.http.get('http://localhost:3000/categories').subscribe((data) => {
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
      .post('http://localhost:3000/product', this.productForm.value)
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
