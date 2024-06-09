import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-editcate',
  templateUrl: './editcate.component.html',
  styleUrl: './editcate.component.css',
})
export class EditcateComponent {
  categoryData: any;

  constructor(private router: ActivatedRoute, private http: HttpClient) {}
  categoryForm = new FormGroup({
    title: new FormControl(''),
  });
  async ngOnInit() {
    const id = this.router.snapshot.params['id'];
    const product = await this.getByCateId(id);
    this.categoryForm.controls.title.setValue(product.title);
    console.log(product.title);
  }
  getByCateId = async (id: number) => {
    const { data } = await axios.get(`http://localhost:3000/categories/${id}`);
    this.http.get('http://localhost:3000/categories').subscribe((data) => {
      this.categoryData = data;
    });
    console.log(data);
    return data;
  };
  onSubmit() {
    console.log(this.categoryForm.value);
    const conFirm = confirm('Are you sure?');
    if (conFirm) {
      axios
        .put(
          `http://localhost:3000/categories/${this.router.snapshot.params['id']}`,
          this.categoryForm.value
        )
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  refresh(): void {
    window.location.href = '/admin';
  }
}
