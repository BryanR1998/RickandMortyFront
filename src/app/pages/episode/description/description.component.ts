import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../services/episode/episode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs';
import { Episode } from '../../../models/episode';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  episode: Episode;
  characters: Character[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
  ) { }

  ngOnInit(): void {
    this.getEpisode();
    this.getCharacterByEpisode();
  }

  getEpisode() {

    const episodeId = +this.activatedRoute.snapshot.paramMap.get('id');

    this.episodeService.getEpisodeById(episodeId)
      .pipe(
        // Mapear la respuesta para obtener un arreglo de objetos Episode
        map((data: any) => {
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
        })
      )
      .subscribe(
        (episode: any) => { this.episode = episode; }
      )
  }

  getCharacterByEpisode() {
    // COntante me permite tomar el id de la ruta actual
    const episodeId = +this.activatedRoute.snapshot.paramMap.get('id');

    // Metodo el cual implementamos para llamar subscribirnos al servicio getCharacterByEpisodesId
    this.episodeService.getCharacterByEpisodesId(episodeId)
      .subscribe({
        next: (characters: any) => {
          this.characters = characters;
          console.log(characters);
        },
        error: (error: any) => {
          console.error(error);
        }
      })
  }

}
