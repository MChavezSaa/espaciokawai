import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CarritoComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {

}
