import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.css',
})
export class DasboardComponent {
  productData: any;
  categoryData: any;
  searchText: any;
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    img: new FormControl(''),
  });
  url: string = 'http://localhost:3000/product';
  constructor(private http: HttpClient) {}
  async ngOnInit() {
    this.http.get(this.url).subscribe((data) => {
      this.productData = data;
    });
    this.http.get('http://localhost:3000/categories').subscribe((data) => {
      this.categoryData = data;
    });
  }
  onDel = (id: any) => {
    const conFirm = confirm('Are you sure?');
    if (conFirm) {
      axios.delete(`http://localhost:3000/product/${id}`).then((data) => {
        console.log(data);
      });
    }
  };
  onDelCate = (id: any) => {
    const conFirm = confirm('Are you sure?');
    if (conFirm) {
      axios.delete(`http://localhost:3000/categories/${id}`).then((data) => {
        console.log(data);
      });
    }
  };
  refresh(): void {
    window.location.reload();
  }
  router = new Router();
  removeToken = () => {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  };
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
  }
}
