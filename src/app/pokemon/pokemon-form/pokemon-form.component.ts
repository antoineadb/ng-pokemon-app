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
  @Input() pokemon: Pokemon | undefined;
  types: string[] | undefined;
  isAddForm: boolean | undefined;

  constructor(
    private pokemonService: PokemonService,
    private router:Router
    ){}

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(type: string):boolean|undefined{
    if(this.pokemon){
        return this.pokemon.types.includes(type);
    }else{
      return undefined;
    }
  }

  selectType($event: Event, type:string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(this.pokemon){
      if(isChecked){
        this.pokemon.types.push(type);
      } else {
        const index = this.pokemon.types.indexOf(type);
        this.pokemon.types.splice(index,1);
      }
    }

  }

  isTypeValid(type:string):boolean{
    if(this.pokemon && this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }

    if(this.pokemon && this.pokemon.types.length > 2 && !this.hasType(type)){
      return false;
    }


    return true;
  }

  onSubmit(){
    if(this.isAddForm && this.pokemon){
      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon:Pokemon)=>this.router.navigate(['/pokemon', pokemon.id]));
    }else{
      if(this.pokemon && this.pokemon.id){
      this.pokemonService.updatePokemon(this.pokemon).subscribe(()=>this.router.navigate(['/pokemon', this.pokemon?.id]));
      }
    }
}

}

