import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {

  @ViewChild("imageTextBox")
  public imageTextBox: ElementRef<HTMLInputElement>;

  public product = new ProductModel();

  public constructor(private productService: ProductService ,  private router: Router) {}

  public async send() {
    try{
      this.product.image = this.imageTextBox.nativeElement.files[0]
      await this.productService.addProduct(this.product)
      alert("product has been added");
      this.router.navigate(["/products"]);


    }
    catch(err: any){
      alert(err.message);

    }
  }

}
