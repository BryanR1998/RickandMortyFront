import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listEpisode',
    pathMatch: 'full'
  },
  {
    path: 'listEpisode',
    component: ListComponent
  },
  {
    path: 'descriptionEpisode/:id',
    component: DescriptionComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
