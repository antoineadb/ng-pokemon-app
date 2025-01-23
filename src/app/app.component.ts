import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';

@Component({
  selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [
      CommonModule,     
      RouterModule,
      PokemonModule
    ]
})


export class AppComponent {}

