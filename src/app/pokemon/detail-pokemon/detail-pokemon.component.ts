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
<<<<<<< HEAD
  standalone:true,
  providers: [PokemonService],
  styleUrls: ['./detail-pokemon.component.css']
=======
  standalone:true
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon:Pokemon|undefined;

  constructor( 
    private route:ActivatedRoute, 
    private router:Router,
<<<<<<< HEAD
    private pokemonService: PokemonService
=======
    private pokemonservice: PokemonService
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
  ){}

  ngOnInit(): void {    
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
<<<<<<< HEAD
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(pokemon => this.pokemon =pokemon);
    }
  }

  deletePokemon(pokemon:Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(()=>this.goToPokemonList());
  }

=======
      this.pokemon = this.pokemonservice.getPokemonById(+pokemonId);
    }
  }
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }

<<<<<<< HEAD
  goToEditPokemon(pokemon: Pokemon){       
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }


=======
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
}
