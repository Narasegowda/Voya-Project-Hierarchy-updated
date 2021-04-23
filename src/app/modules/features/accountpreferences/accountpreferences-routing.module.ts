import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpreferencesPage } from './accountpreferences.page';

const routes: Routes = [
  {
    path: '',
    component: AccountpreferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountpreferencesPageRoutingModule {}
