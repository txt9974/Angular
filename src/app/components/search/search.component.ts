import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  products: Product[] = [];
  keywords: string = '';
  constructor(
    private route: ActivatedRoute,
    private searchService: ProductsService
  ) {}
  ngOnInit() {
    this.keywords = this.route.snapshot.queryParams['keywords'];
    console.log(this.keywords);

    if (this.keywords) {
      this.searchService.SearchKeyword(this.keywords).subscribe(
        (data: Product[]) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching search results', error);
        }
      );
    }
  }
}
