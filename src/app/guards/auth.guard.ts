import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../servicios/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private localStorage: LocalStorageService) { }

  canActivate(): boolean {
    if (this.localStorage.usuarioConectado) {
      return true;
    } else{
      this.localStorage.obtenerUsuarioConectado();
      return this.localStorage.usuarioConectado != null;
    }
  }
}
