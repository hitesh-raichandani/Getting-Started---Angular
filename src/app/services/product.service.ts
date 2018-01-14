
import { Injectable } from "@angular/core";
import { IProduct } from "../products/product.bean";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';

@Injectable()
export class ProductService {
    private _productDataUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productDataUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProductByID(id: number): Observable<IProduct> {
        return this.getProducts()
                .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}