import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { pokemonRoutes } from './pokemon/pokemon.module';


export const routes: Routes = [       
    { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    ...pokemonRoutes,
    { path: '**', component:PageNotFoundComponent}
];
