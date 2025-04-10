import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule , RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductModel;

  public constructor(private activatedRoute : ActivatedRoute, private productService: ProductService , private router: Router) {}

  public async ngOnInit() {
    try{
      const id = +this.activatedRoute.snapshot.params["id"];
      this.product = await this.productService.getOneProduct(id);
      console.log(this.product);
    }
    catch(err: any){
      alert(err.message);

    }
    
  }
  public async deleteMe(){
    try{
      const sure = confirm("are you sure?");
      if(!sure) return;
      await this.productService.deleteProduct(this.product.id);
      alert("product been deleted");
      this.router.navigate(["/products"])
    }catch(err:any){
      alert(err.message)
    }
  }
  


  goBack() {
    this.router.navigate(['/products']);
  }

}
