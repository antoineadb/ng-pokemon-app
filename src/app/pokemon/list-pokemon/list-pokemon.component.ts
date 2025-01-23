import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  imports: [PokemonTypeColorPipe, CommonModule, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
  standalone:true
})
export class ListPokemonComponent implements OnInit {
  
  pokemonList:Pokemon[];
  
  constructor(private router:Router, private pokemonservice: PokemonService){}
  
  ngOnInit(){
    this.pokemonList = this.pokemonservice.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
