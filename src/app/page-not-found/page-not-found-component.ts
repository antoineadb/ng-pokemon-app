import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
selector: 'app-page-not-found',
template:`
<div class="center">
<img 
src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" />
<h1>Hey, Cette page n'existe pas!</h1>
<a routerLink="/pokemons" class="waves-effect waves-teal btn-flat">
Retour a l' accueil
</a>
</div>
`,
imports: [RouterModule],
standalone: true
})

export class PageNotFoundComponent{}