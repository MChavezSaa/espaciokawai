import { Component } from '@angular/core';
//import de angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ MatToolbarModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.less'
})
export class ProductosComponent {
  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', expanded: false },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', expanded: false },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', expanded: false },
  ];

  toggleCard(product: any) {
    product.expanded = !product.expanded;
  }
}
