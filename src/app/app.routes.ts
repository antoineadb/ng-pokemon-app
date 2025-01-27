import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';
import { pokemonRoutes } from './pokemon/pokemon.module';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [       
    { path: '', redirectTo: 'login', pathMatch: 'full'},   
    ...pokemonRoutes,
    { path: 'login', component: LoginComponent},
    { path: '**', component:PageNotFoundComponent}
];
