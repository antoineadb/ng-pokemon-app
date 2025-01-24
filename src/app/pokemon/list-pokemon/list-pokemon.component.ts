import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
<<<<<<< HEAD
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';


=======
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc

@Component({
  selector: 'app-list-pokemon',
  imports: [PokemonTypeColorPipe, CommonModule, BorderCardDirective],
  templateUrl: './list-pokemon.component.html',
<<<<<<< HEAD
  standalone:true,
  providers: [PokemonService]
=======
  standalone:true
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
})
export class ListPokemonComponent implements OnInit {
  
  pokemonList:Pokemon[];
  
<<<<<<< HEAD
  constructor( private router:Router, private pokemonservice: PokemonService){}
  
  ngOnInit(){
    this.pokemonservice.getPokemonList().
    subscribe(pokemonList => this.pokemonList = pokemonList);
=======
  constructor(private router:Router, private pokemonservice: PokemonService){}
  
  ngOnInit(){
    this.pokemonList = this.pokemonservice.getPokemonList();
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
<<<<<<< HEAD

  goToAddPokemon() {
    this.router.navigate(['/pokemon/add']);
  }
=======
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
}
