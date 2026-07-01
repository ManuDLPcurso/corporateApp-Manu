import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

async getProducts(): Promise<ProductModel[]> {

  const response =
  await fetch('assets/data/products.json');

  const products =
  await response.json();

  return products;
}
  
}
