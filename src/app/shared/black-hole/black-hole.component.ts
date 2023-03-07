import { Component, ElementRef, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-black-hole',
  templateUrl: './black-hole.component.html',
  styleUrls: ['./black-hole.component.scss'],
})
export class BlackHoleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    anime({
      targets: '.black-hole-icon',
      scale: [1, 0.5, 1],
      opacity: [1, 0.5, 1],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true,
    });
  }

}
