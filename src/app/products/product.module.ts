import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "./product-list.component";
import { ConvertToSpacePipe } from "../shared/convert-to-space.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductGuardService } from "../services/product-guard.service";
import { ProductService } from "../services/product.service";
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
