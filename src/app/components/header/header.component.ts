import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  router = new Router();
  constructor(private route: ActivatedRoute) {}
  products: Product[] = [];
  searchText: any;
  searchForm = new FormGroup({
    keywords: new FormControl(''),
  });
  ngOnInit(): void {
    axios.get(`http://localhost:3000/product`).then((data) => {
      this.products = data.data;
    });
    const keywords = this.route.snapshot.queryParams['keywords'];
    console.log(keywords);
  }
  onSearch = () => {
    const keywords = this.searchForm.controls.keywords.value;
    this.router.navigate(['search'], {
      queryParams: {
        keywords: keywords,
      },
    });
  };
}
