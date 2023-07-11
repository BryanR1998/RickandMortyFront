import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';

// Inicializacion de Rutas para el modulo de personajes
const routes: Routes = [
  {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'description/:id',
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
export class CharactersRoutingModule { }
