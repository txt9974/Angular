import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  constructor(private router: ActivatedRoute, private http: HttpClient) {}
  categoryData: any;
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    description: new FormControl(''),
    category: new FormControl(''),
    img: new FormControl(''),
  });

  async ngOnInit() {
    const id = this.router.snapshot.params['id'];
    const product = await this.getById(id);
    this.productForm.controls.title.setValue(product.title);
    this.productForm.controls.price.setValue(product.price);
    this.productForm.controls.description.setValue(product.description);
    this.productForm.controls.category.setValue(product.category);
    this.productForm.controls.img.setValue(product.img);
  }
  getById = async (id: number) => {
    const { data } = await axios.get(`http://localhost:3000/product/${id}`);
    this.http.get('http://localhost:3000/categories').subscribe((data) => {
      this.categoryData = data;
    });
    return data;
  };

  onSubmit() {
    console.log(this.productForm.value);
    const conFirm = confirm('Are you sure?');
    if (conFirm) {
      axios
        .put(
          `http://localhost:3000/product/${this.router.snapshot.params['id']}`,
          this.productForm.value
        )
        .then((data) => {
          console.log(data);
        });
    }
  }

  refresh(): void {
    window.location.href = '/admin';
  }
}
