import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input()
  public product: ProductModel;

  public constructor(private router: Router) {}

  public navigate(){
    this.router.navigate(["products" , this.product.id]);

  }

}
