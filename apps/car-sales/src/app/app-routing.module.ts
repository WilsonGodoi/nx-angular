import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@nx-angular/feature-login').then(m => m.FeatureLoginModule)
  },
  { path: '**', redirectTo: '' },];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, 
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
