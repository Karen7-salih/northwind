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


    private readonly pageSize = 12;
    public products: ProductModel[] = [];
    private currentPage = 1;
    public pagedProducts: ProductModel[] = [];



    public constructor(private productService: ProductService) { }
    public currentPage=1;
    public async ngOnInit() {
        try {
            this.products = await this.productService.getAllProducts();
            this.fillPagedProuducts();
        }
        catch(err: any) {
            alert(err.message);
        }
    }

    public prev(){
      if(this.currentPage > 1)
        this.currentPage--;
      this.fillPagedProuducts();
    }

    public next(){
      if(this.currentPage < this.products.length / 10)
        this.currentPage++;
      this.fillPagedProuducts();

    }

    private fillPagedProuducts() {
      this.pagedProducts = [];
      for(let i = 0; i <this.pageSize; i++) {
        const index = this.pageSize * (this.currentPage - 1) + i;
        if(index >= this.products.length) break;
        const p = this.products[index]
        this.pagedProducts.push(p)
      }

    }

}