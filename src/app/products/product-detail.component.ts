import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from "./product.bean";
import { ProductService } from "../services/product.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _productService: ProductService,
              private _router: Router) { }

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProductByID(id)
        .subscribe(product => this.product = product, 
                    error => this.errorMessage = <any>error);
  }

  onBackButtonClicked(): void {
    this._router.navigate(['/products']);
  }

}
