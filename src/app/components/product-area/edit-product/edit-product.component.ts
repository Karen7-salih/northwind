import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  
  @ViewChild("imageTextBox")
  public imageTextBox: ElementRef<HTMLInputElement>;

  public product: ProductModel;

  public constructor(private productService: ProductService ,  private router: Router , private activatedRoute : ActivatedRoute) {}
  
  public async ngOnInit() {
    try {
      const id = +this.activatedRoute.snapshot.params["id"];
      this.product = await this.productService.getOneProduct(id);

    }
    catch(err: any) {
      alert(err.message)
    }
  }

  public async send() {
    try{
      this.product.image = this.imageTextBox.nativeElement.files[0]
      await this.productService.updateProduct(this.product)
      alert("product has been updated");
      this.router.navigate(["/products"]);


    }
    catch(err: any){
      alert(err.message);

    }
  }



}
