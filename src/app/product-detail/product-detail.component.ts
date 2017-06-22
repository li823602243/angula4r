import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    private productTitle: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.router.snapshot.params['title'];
  }

}
