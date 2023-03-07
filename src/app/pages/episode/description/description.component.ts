import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../../services/episode/episode.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Episode } from '../../../models/episode';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit{

  episode: Episode;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
      this.getEpisode();
  }

  getEpisode() {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.episodeService.getEpisodeById(id))
      )
      .subscribe(
        (episode: any) => { this.episode = episode }
      )
  }

}
