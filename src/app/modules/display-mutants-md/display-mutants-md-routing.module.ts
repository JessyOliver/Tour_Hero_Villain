import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayMutantsComponent } from 'src/app/modules/display-mutants-md/display-mutants/display-mutants.component';

const routes: Routes = [
  { path: '', component: DisplayMutantsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayMutantsMdRoutingModule { }
