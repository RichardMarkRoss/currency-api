import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import routing components*/
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [];
