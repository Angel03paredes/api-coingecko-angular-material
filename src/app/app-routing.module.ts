import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import { CoinsComponent } from './coins/coins.component';

const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"",component:CoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
