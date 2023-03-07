import { Component, OnInit } from '@angular/core';

//Importaciaon de Anime js
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss']
})
export class LoadPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.animacion();
  }

  animacion() {
    var circle = anime({
      targets: ['.loader'],
      rotate: 180,
      duration: 1600,
      loop: true,
      elasticity: 600,
      easing: 'easeOutElastic',
      delay: function (el, index) {
        return index * 80;
      },
    });

  }

}
