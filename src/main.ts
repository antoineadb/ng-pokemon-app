import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
<<<<<<< HEAD
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // Assurez-vous que routes est bien défini
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
=======
import { provideRouter } from '@angular/router';
import { routes} from './app/app.routes'
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
<<<<<<< HEAD
    provideRouter(routes),
    importProvidersFrom(
      RouterModule.forRoot(routes), // Utilisez `routes` ici pour les routes de l'application
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
    )
=======
    provideRouter(routes)
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
  ] ,
})
  .catch((err) => console.error(err));
