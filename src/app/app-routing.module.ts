import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './pages/menu/menu.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule) },
  { path: 'reset-senha', loadChildren: () => import('./pages/reset-senha/reset-senha.module').then(m=> m.ResetSenhaPageModule) },
  {
    path: '',
    component: MenuPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'contato-editar',
        loadChildren: () => import('./pages/contato-editar/contato-editar.module').then(m=> m.ContatoEditarPageModule)
      },
      {
         path: 'contato-detail/:id',
         loadChildren: () => import('./pages/contato-details/contato-details.module').then(m => m.ContatoDetailsPageModule),
       },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
