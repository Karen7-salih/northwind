import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-top3',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './top3.component.html',
  styleUrl: './top3.component.css'
}) 
export class Top3Component implements OnInit{

  public products: ProductModel[] = [];
    
  public constructor(private productService: ProductService) { }
  
  public async ngOnInit() {
      try {
          this.products = await this.productService.top3Products();
      }
      catch (err: any) {
          alert(err.message);
      }
  }

}
