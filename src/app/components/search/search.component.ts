import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    axios.get('http://localhost:3000/categories');
    const keywords = this.route.snapshot.queryParams['keywords'];
    console.log(keywords);
  }
}
