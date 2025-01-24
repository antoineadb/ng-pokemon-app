import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonService } from './pokemon.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

export const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component:EditPokemonComponent},
  { path: 'pokemon/add', component:AddPokemonComponent},
=======
import { PokemonService } from './pokemon.service';

export const pokemonRoutes: Routes = [
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
  { path: 'pokemons', component:ListPokemonComponent},
  { path: 'pokemon/:id', component:DetailPokemonComponent},
]

@NgModule({
  declarations: [],
<<<<<<< HEAD
  providers:[PokemonService],
=======
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
  imports: [
    CommonModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
<<<<<<< HEAD
    FormsModule,
    PokemonFormComponent,
    AddPokemonComponent,
    RouterModule.forChild(pokemonRoutes)
  ]
=======
    RouterModule.forChild(pokemonRoutes)
  ],
  providers:[PokemonService]
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
})
export class PokemonModule { }
