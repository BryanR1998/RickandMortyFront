import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '../../../models/character';
import { CharacterService } from '../../../services/character/character.service';

import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';
import { Router } from '@angular/router';

//Importaciaon de Anime js
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchForm: FormGroup;

  characters: Character[] = [];
  filteredCharacters: Observable<Character[]>;
  searchTerm: string = '';
  isLoadingResults: boolean = false;
  isErrorLoading: boolean = false;
  errorMessage: string = '';
  page: number = 1;
  totalPages: number = 1;
  pageSize: number = 20;

  constructor(
    private _characterService: CharacterService,
    private router: Router
  ) {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {

    this.searchForm.get('searchTerm')?.valueChanges.pipe(
      debounceTime(500)
    ).subscribe(value => {
      this.page = 1;
      this.searchTerm = value;
      this.loadCharacters(1);
    });
    this.loadCharacters(1);

  }

  ngAfterViewInit() {
    this.animationCardsHover();
    this.animatedBlackHole();
  }

  loadCharacters(pageNumber?: number) {
    this.isLoadingResults = true;
    this._characterService.getCharacters(pageNumber, this.searchTerm)
      .subscribe({
        next: (data: any) => {
          this.characters = data.results;
          this.totalPages = data.info.count;
          console.log(this.totalPages);
          console.log(this.characters);
          this.isLoadingResults = false;
          this.isErrorLoading = false;
        },
        error: (error) => {
          this.isLoadingResults = false;
          this.isErrorLoading = true;
          this.errorMessage = error.message;
        }
      })
  }

  onSearch(): void {
    if (this.searchForm.valid) { }
    this.searchTerm = this.searchForm.get('searchTerm')?.value;
    this.page = 1;
    this.loadCharacters(this.page);
    this.paginator.firstPage();
  }
  
  clearSearch(): void {
    this.searchForm.reset();
    this.page = 1;
    this.loadCharacters(this.page);
    this.paginator.firstPage();
  }

  onPageChanged(event: any): void {
    this.page = event.pageIndex + 1;
    this.loadCharacters(this.page);
  }

  goToCharacterDetails(id: number): void {
    this.router.navigate(['/characters', id]);
  }

  // Implementacion de animaciones para las cards con Anime JS
  animationCardsHover = (): void => {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        anime({
          targets: card.querySelector('.flip-card-inner'),
          rotateY: '180deg',
          easing: 'easeInOutSine',
          duration: 600
        });
      });

      card.addEventListener('mouseleave', () => {
        anime({
          targets: '.flip-card-inner',
          rotateY: '0deg',
          easing: 'easeInOutSine',
          duration: 600
        });
      });
    });
  }

  animationNoResults = (): void => {
    // Get the no-results element and its child elements
    var noResults = document.getElementById('no-results');
    var noResultsIcon = document.getElementById('no-results-icon');
    var noResultsMessage = document.getElementById('no-results-message');

    // Define the animation
    var animation = anime({
      targets: [noResults, noResultsIcon, noResultsMessage],
      opacity: 1,
      translateY: ['-50%', '0%'],
      duration: 1000,
      easing: 'easeInOutQuad',
    });

    // Start the animation
    animation.play();

  }

  animatedBlackHole() {
    // Target the search results element
    const searchResults = document.getElementById('search-results');

    // Set up the animation
    anime.timeline({ loop: true })
      .add({
        targets: searchResults,
        scale: [1, 1.2, 1],
        duration: 1500
      })
      .add({
        targets: 'h2',
        opacity: [0, 1],
        translateY: ['50%', 0],
        duration: 500,
        easing: 'easeOutExpo'
      })
      .add({
        targets: searchResults,
        scale: [1, 5],
        opacity: [1, 0],
        duration: 2000,
        easing: 'easeInOutQuad'
      });

  }
}
