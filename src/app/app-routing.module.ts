import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./modules/features/folder/folder.module').then( m => m.FolderPageModule),
  // },
  {
    path: 'graph',
    loadChildren: () => import('./modules/features/graph/graph.module').then( m => m.GraphPageModule),
  },{
    path: 'home',
    loadChildren: () => import('./modules/features/home/home.module').then( m => m.HomePageModule),
  },{
    path: 'balance',
    loadChildren: () => import('./modules/features/balance/balance.module').then( m => m.BalancePageModule),
  },{
    path: 'login',
    loadChildren: () => import('./modules/features/login/login.module').then( m => m.LoginPageModule),
  },{
    path: 'accountpreferences',
    loadChildren: () => import('./modules/features/accountpreferences/accountpreferences.module').then( m => m.AccountpreferencesPageModule)
  },{
    path: 'userpreferences',
    loadChildren: () => import('./modules/features/userpreferences/userpreferences.module').then( m => m.UserpreferencesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
