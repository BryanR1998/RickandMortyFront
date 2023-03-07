import { Component, OnInit } from '@angular/core';

//Importaciaon de Anime js
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateWelcomeMessage();
  }

  // Implementacion de animacion mensaje de Bienvenida
  animateWelcomeMessage() {
    anime({
      targets: '.welcome-message img',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)'
    });

    anime({
      targets: '.welcome-message button',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
      delay: 500
    });
  }

}
