import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";
@Component({
    selector: 'app-product-list',
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    public products: ProductModel[] = [];
    public constructor(private productService: ProductService) { }
    public async ngOnInit() {
        try {
            this.products = await this.productService.getAllProducts();
        }
        catch(err: any) {
            alert(err.message);
        }
    }

}