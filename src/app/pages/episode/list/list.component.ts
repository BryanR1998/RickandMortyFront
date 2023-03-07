import { Component, OnInit, ViewChild } from '@angular/core';
import { EpisodeService } from '../../../services/episode/episode.service';
import { Episode } from '../../../models/episode';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'link'];
  dataSource: MatTableDataSource<Episode>;
  episodes: Episode[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  // Metodo para listar todos los episodios
  getEpisodes() {
    this.episodeService.getEpisodes()
      .subscribe(episodes => {
        this.episodes = episodes;
        this.dataSource = new MatTableDataSource<Episode>(this.episodes);
        this.dataSource.paginator = this.paginator;
      });
  }
}
