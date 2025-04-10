import { Routes } from '@angular/router';
import { HomeComponent } from './components/page-area/home/home.component';
import { AboutComponent } from './components/page-area/about/about.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { Page404Component } from './components/page-area/page404/page404.component';
import { CreateProductComponent } from './components/product-area/create-product/create-product.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { EditProductComponent } from './components/product-area/edit-product/edit-product.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"}, //pathMatch = exact string 
    {path: "home", component: HomeComponent },
    {path: "about", component: AboutComponent},
    {path: "products", component: ProductListComponent},
    {path: "products/new", component: CreateProductComponent },
    {path: "products/:id", component: ProductDetailsComponent },
    {path: "products/edit/:id", component: EditProductComponent },
    {path: "**", component: Page404Component},
];
