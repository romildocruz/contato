import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu.page';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  {
    path: '',
    component: MenuPage,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      // {
      //   path: 'cart',
      //   loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
      // },
      // {
      //   path: 'contato-detail/:id',
      //   loadChildren: () => import('./pages/contato-details/contato-details.module').then(m => m.ContatoDetailsPageModule),
      // }
    ]
  },
  { path: 'contato-detail/:id', loadChildren: () => import('./pages/contato-details/contato-details.module').then(m => m.ContatoDetailsPageModule) },
  { path: 'reset-senha', loadChildren: './pages/reset-senha/reset-senha.module' },
  { path: 'contato-editar/:id', loadChildren: () => import('./pages/contato-editar/contato-editar.module').then(m => m.ContatoEditarPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
