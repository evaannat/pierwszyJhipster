import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.PierwszyJhipsterPersonModule)
      },
      {
        path: 'glasses',
        loadChildren: () => import('./glasses/glasses.module').then(m => m.PierwszyJhipsterGlassesModule)
      },
      {
        path: 'biker',
        loadChildren: () => import('./biker/biker.module').then(m => m.PierwszyJhipsterBikerModule)
      },
      {
        path: 'bike',
        loadChildren: () => import('./bike/bike.module').then(m => m.PierwszyJhipsterBikeModule)
      },
      {
        path: 'driver',
        loadChildren: () => import('./driver/driver.module').then(m => m.PierwszyJhipsterDriverModule)
      },
      {
        path: 'car',
        loadChildren: () => import('./car/car.module').then(m => m.PierwszyJhipsterCarModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class PierwszyJhipsterEntityModule {}
