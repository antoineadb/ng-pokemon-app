import { Routes } from '@angular/router';
<<<<<<< HEAD
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';
import { pokemonRoutes } from './pokemon/pokemon.module';

=======
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { pokemonRoutes } from './pokemon/pokemon.module';


>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
export const routes: Routes = [       
    { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
    ...pokemonRoutes,
    { path: '**', component:PageNotFoundComponent}
];
