import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { ProductStore } from '../storage/product-store';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  private productStore = inject(ProductStore);


  public async getAllProducts() {

// If we have the products in the global store - return them: 
   if(this.productStore.count() > 0) return this.productStore.products();


    const observable = this.http.get<ProductModel[]>(environment.productsUrl);

    //convert the observable tp promise which immediatly fetch the data (first value)
    const products = await firstValueFrom(observable);

    this.productStore.initProducts(products)



    return products;
  }


  public async getOneProduct(id: number) {


    let product = this.productStore.products().find(p => p.id == id);
    if(product) return product;

    

    const observable = this.http.get<ProductModel>(environment.productsUrl + id);
    product = await firstValueFrom(observable);
    return product;
}

public async addProduct(product: ProductModel) {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("price", product.price.toString());
  formData.append("stock", product.stock.toString());
  formData.append("image", product.image);

  const observable = this.http.post<ProductModel>(environment.productsUrl , formData);
  const dbProduct = await firstValueFrom(observable);
  this.productStore.addProduct(dbProduct);
}

public async updateProduct(product: ProductModel) {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("price", product.price.toString());
  formData.append("stock", product.stock.toString());
  formData.append("image", product.image);

  const observable = this.http.put<ProductModel>(environment.productsUrl + product.id , formData);
  const dbProduct = await firstValueFrom(observable);
  this.productStore.updateProduct(dbProduct)
}

public async deleteProduct(id: number) {
  const observable = this.http.delete<ProductModel>(environment.productsUrl + id);
  await firstValueFrom(observable);
  this.productStore.deleteProduct(id);
}

public async top3Products(){
  const observable = this.http.get<ProductModel[]>(environment.top3Url);
  const products = await firstValueFrom(observable);
  return products;
}

}
