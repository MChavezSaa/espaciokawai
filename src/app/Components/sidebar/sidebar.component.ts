import { Component } from '@angular/core';
//import de angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { MatSidenavModule } from '@angular/material/sidenav';  // Importa MatSidenavModule

import { MatListModule } from '@angular/material/list';  // Si usas MatList
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatToolbarModule,
    MatIconModule,
    MatButtonModule,MatListModule,MatSidenavModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less'
})
export class SidebarComponent {

}
