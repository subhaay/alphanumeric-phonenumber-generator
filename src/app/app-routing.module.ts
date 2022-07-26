import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenerateCombinationComponent} from "./components/generate-combination/generate-combination.component";

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path: 'home', component: GenerateCombinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
