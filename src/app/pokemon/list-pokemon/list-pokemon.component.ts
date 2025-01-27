import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { SearchPokemonComponent } from '../search-pokemon/search-pokemon.component';



@Component({
  selector: 'app-list-pokemon',
  imports: [PokemonTypeColorPipe, CommonModule, BorderCardDirective,SearchPokemonComponent],
  templateUrl: './list-pokemon.component.html',
  standalone:true,
  providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {
  
  pokemonList:Pokemon[]=[] ;
  
  constructor( private router:Router, private pokemonservice: PokemonService){}
  
  ngOnInit(){
    this.pokemonservice.getPokemonList().
    subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }

  goToAddPokemon() {
    this.router.navigate(['/pokemon/add']);
  }
}