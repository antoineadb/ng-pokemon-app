import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [
      CommonModule,     
      RouterModule,
      FormsModule,
      PokemonModule
    ]
})


export class AppComponent {}

