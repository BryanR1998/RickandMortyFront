import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../../services/character/character.service';
import { Character } from '../../../models/character';
import { switchMap } from 'rxjs/operators';
import anime from 'animejs/lib/anime.es.js';
import { Episode } from '../../../models/episode';
import { EpisodeService } from '../../../services/episode/episode.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  character: Character;
  episodes: Episode[];
  displayedColumns: string[] = ['id', 'name', 'airDate', 'episode', 'link'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService,
    private episodeService: EpisodeService
  ) { }

  ngOnInit() {
    this.getCharacter();
    this.getEpisode();
  }

  ngAfterViewInit() {

  }

  getCharacter(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.characterService.getCharacterById(id))
      )
      .subscribe(
        (character: any) => {
          this.character = character;
          // Utilizar anime para animar la imagen
          anime({
            targets: '.character-img',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutQuad'
          });
        });
  }

  getEpisode() {
    // this.episodeService.getEpisodesByCharacterId(6).subscribe((data: any) => data)
    const characterId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.episodeService.getEpisodesByCharacterId(characterId)
      .pipe(
        map((episodesData: any[]) => {
          // Mapear la respuesta para obtener un arreglo de objetos Episode
          return episodesData.map(data => {
            const episode: Episode = {
              id: data.id,
              name: data.name,
              airDate: data.air_date,
              episode: data.episode,
              characters: data.characters,
              url: data.url,
              created: data.created
            };
            return episode;
          });
        })
      )
      .subscribe({
        next: (episodes: any) => {
          this.episodes = episodes;
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }

  goBack() {
    this.router.navigate(['/character']);
  }

}
