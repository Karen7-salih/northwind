import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public async getAllProducts() {

    const observable = this.http.get<ProductModel[]>(environment.productsUrl);

    //convert the observable tp promise which immediatly fetch the data (first value)
    const products = await firstValueFrom(observable);

    return products;
  }


  public async getOneProduct(id: number) {
    const observable = this.http.get<ProductModel>(environment.productsUrl + id);
    const product = await firstValueFrom(observable);
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
  console.log(dbProduct);
}
public async deleteProduct(id: number) {
  const observable = this.http.delete<ProductModel>(environment.productsUrl + id);
  await firstValueFrom(observable);
}

public async updateProduct(product: ProductModel) {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("price", product.price.toString());
  formData.append("stock", product.stock.toString());
  formData.append("image", product.image);

  const observable = this.http.put<ProductModel>(environment.productsUrl + product.id , formData);
  const dbProduct = await firstValueFrom(observable);
  console.log(dbProduct);
}

}
