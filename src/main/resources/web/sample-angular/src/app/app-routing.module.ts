import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./sample2/sample2.module').then(m => m.Sample2Module) }
  , { path: 'sample3', loadChildren: () => import('./sample3/sample3.module').then(m => m.Sample3Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
