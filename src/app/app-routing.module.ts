import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AccountsRoutingModule } from './accounts/accounts-routing.module';

const routes: Routes = [
  {
    path: '', redirectTo: '/FoodFun', pathMatch: 'full'
  },
  {
    path: 'FoodFun',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }