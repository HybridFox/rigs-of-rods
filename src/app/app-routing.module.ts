import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from './pages';

const routes: Routes = [
  {
    component: Pages.HomePageComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
