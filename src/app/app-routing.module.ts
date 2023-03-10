import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'details', loadChildren: () => import('./detail-page/detail-page.module').then(m => m.DetailPageModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
