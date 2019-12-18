import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './components/main/main-view/main-view.component';
import { DetailViewComponent } from './components/details/detail-view/detail-view.component';


const routes: Routes = [
  {path:'',component:MainViewComponent},
  {path:'main',component:MainViewComponent},
  {path:'details',component:DetailViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
