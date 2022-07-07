import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import routing components*/
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';



const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'graph', component: GraphComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent, GraphComponent];
