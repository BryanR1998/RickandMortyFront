import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

  // Array de objetos que permite establecer valores prefinidos que se implementaran en el html 
  // y mediante la directiva estructural ngFor se genera cantidad de elementos establecida
  // esto con el fin de evitar replicar etiquetas en el html.

  routesData: Array<{ route: string; icon: string; name: string; }> = [
    { route: 'home', icon: 'home', name: "Inicio" },
    { route: 'character', icon: 'supervisor_account', name: "Personajes" },
    { route: 'location', icon: 'supervisor_account', name: "Lugares" },
    { route: 'episode', icon: 'supervisor_account', name: "Capitulos" },
  ];

}
