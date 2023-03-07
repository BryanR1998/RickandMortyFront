import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { CharactersRoutingModule } from './characters-routing.module';
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from "../../shared/shared.module";

// Componentes
import { ListComponent } from './list/list.component';
import { DescriptionComponent } from './description/description.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ListComponent,
        DescriptionComponent
    ],
    imports: [
        CommonModule,
        CharactersRoutingModule,
        MaterialModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CharactersModule { }
