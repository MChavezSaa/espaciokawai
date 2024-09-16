import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';  // Importar MatPaginatorModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';  // Importar MatTableDataSource

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatPaginatorModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.less']
})
export class ProductosComponent {
  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', expanded: false },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', expanded: false },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', expanded: false },
    { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', expanded: false },
    { id: 5, name: 'Producto 5', description: 'Descripción del producto 5', expanded: false },
    { id: 6, name: 'Producto 6', description: 'Descripción del producto 6', expanded: false },
    { id: 7, name: 'Producto 7', description: 'Descripción del producto 7', expanded: false },
    { id: 8, name: 'Producto 8', description: 'Descripción del producto 8', expanded: false },
    { id: 9, name: 'Producto 9', description: 'Descripción del producto 9', expanded: false },
    { id: 10, name: 'Producto 10', description: 'Descripción del producto 10', expanded: false },
    { id: 11, name: 'Producto 11', description: 'Descripción del producto 11', expanded: false },
    { id: 12, name: 'Producto 12', description: 'Descripción del producto 12', expanded: false },
    { id: 13, name: 'Producto 13', description: 'Descripción del producto 13', expanded: false },
    { id: 14, name: 'Producto 14', description: 'Descripción del producto 14', expanded: false },
    { id: 15, name: 'Producto 15', description: 'Descripción del producto 15', expanded: false },
  ];

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
