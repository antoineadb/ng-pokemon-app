import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-pokemon',
  imports: [PokemonFormComponent, CommonModule],
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img *ngIf="pokemon" [src]="pokemon.picture" />
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"> </app-pokemon-form>
  `,
   providers: [PokemonService]
})
export class EditPokemonComponent implements OnInit {

  pokemon:Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ){}

  ngOnInit():void{
  const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
  if(pokemonId){
    this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon =pokemon);
    console.log('Loaded Pokémon:', this.pokemon);
  } else {
    console.error('Invalid Pokémon ID');
    this.pokemon = undefined;
  }

  }

}

