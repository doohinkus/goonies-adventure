import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MikeyComponent } from './mikey/mikey.component';
import { ResultsComponent } from './results/results.component';

const appRoutes: Routes = [
  {
  path: '',
  component: WelcomeComponent
},
  {
  path: 'mikey',
  component: MikeyComponent
},
{
   path: 'results/:id',
   component: ResultsComponent
 }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
