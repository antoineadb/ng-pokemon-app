import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule,PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
  standalone:true
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon:Pokemon|undefined;

  constructor( 
    private route:ActivatedRoute, 
    private router:Router,
    private pokemonservice: PokemonService
  ){}

  ngOnInit(): void {    
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonservice.getPokemonById(+pokemonId);
    }
  }
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

}
