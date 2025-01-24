<<<<<<< HEAD
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PokemonModule } from './pokemon/pokemon.module';
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc

@Component({
  selector: 'app-root',
    templateUrl: 'app.component.html',
<<<<<<< HEAD
    template:'<router-outlet></router-outlet>',
    imports: [
      CommonModule,     
      RouterModule,      
      FormsModule,
      PokemonModule
    ],
    
=======
    imports: [
      CommonModule,     
      RouterModule,
      PokemonModule
    ]
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
})


export class AppComponent {}

