import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonService } from './pokemon.service';

export const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component:EditPokemonComponent},
  { path: 'pokemons', component:ListPokemonComponent},
  { path: 'pokemon/:id', component:DetailPokemonComponent},
]

@NgModule({
  declarations: [],
  providers:[PokemonService],
  imports: [
    CommonModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    FormsModule,
    PokemonFormComponent,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
