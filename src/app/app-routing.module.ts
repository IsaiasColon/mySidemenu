import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tablas',
    loadChildren: () => import('./pages/tablas/tablas.module').then( m => m.TablasPageModule)
  },
  {
    path: 'juegos',
    loadChildren: () => import('./pages/juegos/juegos.module').then( m => m.JuegosPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'config',
    loadChildren: () => import('./pages/config/config.module').then( m => m.ConfigPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'salas',
    loadChildren: () => import('./pages/salas/salas.module').then( m => m.SalasPageModule), canActivate: [AuthGuard]
  },
  {
    path: 'salas/:id',
    loadChildren: () => import('./pages/sala/sala.module').then( m => m.SalaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
