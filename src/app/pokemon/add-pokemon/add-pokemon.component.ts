import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  imports: [PokemonFormComponent],
  providers:[PokemonService],
  template: `
    <h2 class="center">Ajouter un pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class AddPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  ngOnInit(): void {
    this.pokemon =  new Pokemon();
  }


}
