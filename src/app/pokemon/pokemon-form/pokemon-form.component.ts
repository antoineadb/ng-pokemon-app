import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-form',
  imports: [CommonModule,FormsModule,PokemonTypeColorPipe],
  templateUrl: './pokemon-form.component.html',
  standalone:true,
  styleUrls:['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router:Router
    ){}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string):boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type:string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index,1);
    }

  }

  isTypeValid(type:string):boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }


    return true;
  }

  onSubmit(){
    if (this.pokemon && this.pokemon.id) {
    console.log('Navigating to Pokémon details:', this.pokemon.id);
    console.log( 'Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
    } else {
      console.error('Invalid Pokémon data. Cannot navigate.');
    }
  }


}
