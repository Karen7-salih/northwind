import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ProductModel } from "../models/product.model"
import { computed } from "@angular/core";

//the type of global data
export type ProductState = {
    products: ProductModel[];
};

//the starting point if the products
const initialState: ProductState = {
    products: []
}

//creating signal store for the above products:
export const ProductStore = signalStore(
    // Creating our store as a service for enabling DI on it: 
    { providedIn: "root" },
    // Set initial state: 
    withState(initialState),


    // Create methods for handling products: 
    withMethods(store => ({
        // Init products fetched from backend: 
        initProducts(products: ProductModel[]) {
            patchState(store, currentState => ({ products }));
        },

                // Add new product to the global store: 
         addProduct(product: ProductModel) {
                 patchState(store, currentState => ({ products: [...currentState.products, product] }));
                },

                updateProduct(product: ProductModel) {
                    patchState(store, currentState => ({
                        products: currentState.products.map(p => 
                            p.id === product.id ? product : p)
            }));
         }, 

         deleteProduct(id: number) {
            patchState(store, currentState => ({
                products: currentState.products.filter(p => p.id !== id)
            }))
         }
        
    })),

   // Create computed signals: 
   withComputed(store => ({
    // Product count: 
    count: computed(() => store.products().length)
}))
);



    