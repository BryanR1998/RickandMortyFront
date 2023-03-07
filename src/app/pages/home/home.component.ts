import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../models/character';
import { PageEvent } from '@angular/material/paginator';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // characters: Character[] = [];
  // searchTerm: any = new FormControl('', Validators.required);
  // totalResults = 0;
  // pageSize = 20;
  // currentPage = 1;
  // noResults = false;
  // invalidSearch = false;

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {

  }

  // search(): void {
  //   if (this.searchTerm.invalid) {
  //     return;
  //   }
  //   const searchTerm = this.searchTerm.value;
  //   this.invalidSearch = false;

  //   this.characterService.getCharacters(this.currentPage, searchTerm)
  //     .subscribe({
  //       next: (data: any) => {
  //         if (data.results === 0) {
  //           this.noResults = true;
  //           this.characters = [];
  //           this.totalResults = 0;
  //         } else {
  //           this.noResults = false;
  //           this.characters = data.results;
  //           this.totalResults = data.info.count;
  //         }
  //       },
  //       error: (error: any) => {
  //         this.invalidSearch = true;
  //       }
  //     });
  // }

  // onPageChanged(event: any): void {
  //   this.currentPage = event.pageIndex + 1;
  //   this.search();
  // }

}
