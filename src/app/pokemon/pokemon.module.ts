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
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { AuthGuard } from '../auth.guard';



export const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component:EditPokemonComponent, canActivate:[AuthGuard]},
  { path: 'pokemon/add', component:AddPokemonComponent, canActivate:[AuthGuard]},
  { path: 'pokemons', component:ListPokemonComponent, canActivate:[AuthGuard]},
  { path: 'pokemon/:id', component:DetailPokemonComponent, canActivate:[AuthGuard]},
  { path: 'api/pokemon/:name', component:SearchPokemonComponent, canActivate:[AuthGuard]}
  
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
    AddPokemonComponent,    
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
