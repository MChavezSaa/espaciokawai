import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './Components/productos/productos.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
//import de angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ProductosComponent, 
    CarritoComponent, 
    NavbarComponent,
    SidebarComponent,
    //aqui los imports de angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'espacio-kawaii';
}
