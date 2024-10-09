import { Component, OnInit } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';  // Importar MatPaginatorModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';  // Importar MatTableDataSource
import {ProductoServiceService } from '../../Services/producto-service.service';

import { Producto } from '../../Entidades/Productos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.less']
})
export class ProductosComponent implements OnInit  {
  products: Producto[] = [];

  constructor(public service: ProductoServiceService, public route: Router) {
    
  }
  
  ngOnInit(): void {
    this.service.finAll()
    .subscribe(fun => { //triangular con categoria del producto de momento muestra todo...
      this.products = fun;
    });
  }
 
  pageSize = 3;  // Número de productos por página
  currentPage = 0;

  get paginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    return this.products.slice(startIndex, startIndex + this.pageSize);
  }

  handlePageEvent(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  toggleCard(product: any) {
    product.expanded = !product.expanded;
  }
}
