import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { LoadPageComponent } from './load-page/load-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    BlackHoleComponent,
    LoadPageComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    BlackHoleComponent,
    LoadPageComponent,
    FooterComponent
  ]
})
export class SharedModule { }
