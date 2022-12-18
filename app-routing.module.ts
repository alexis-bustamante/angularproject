import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'summary',
    pathMatch: 'full'
  },
  {

  path: 'summary',
  loadChildren: () => import('./summary/summary.module').then(m=>m.SummaryModule)
},
{

  path: 'country',
  loadChildren: () => import('./country/country.module').then(m=>m.CountryModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
