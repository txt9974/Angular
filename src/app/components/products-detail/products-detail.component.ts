import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css',
})
export class ProductsDetailComponent {
  product: Product = {} as Product;
  route = inject(ActivatedRoute);
  name: string = '';
  price: number = 0;
  img: string = '';
  onClick = async () => {
    // alert('Clicked')
    // console.log(this.name,this.image,this.price);
    // const {data} = await axios.post('http://localhost:3000/products',
    // {
    //   name:this.name,
    //   image:this.image,
    //   price:this.price
    // })
    console.log(this.route.snapshot.params['id']);
  };
  async ngOnInit() {
    const productid = this.route.snapshot.params['id'];
    const { data } = await axios.get(
      `http://localhost:3000/product/${productid}`
    );
    // console.log(data);
    this.product = data;
  }
}
