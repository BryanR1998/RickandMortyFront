import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    BlackHoleComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    BlackHoleComponent
  ]
})
export class SharedModule { }
