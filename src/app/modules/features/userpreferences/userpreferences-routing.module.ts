import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpreferencesPage } from './userpreferences.page';

const routes: Routes = [
  {
    path: '',
    component: UserpreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpreferencesPageRoutingModule {}
