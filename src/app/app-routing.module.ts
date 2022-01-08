import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'menu', loadChildren: () => import('./modules/menu-md/menu-md.module').then(m => m.MenuMdModule) },
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: 'display', loadChildren: () => import('./modules/display-mutants-md/display-mutants-md.module').then(m => m.DisplayMutantsMdModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
