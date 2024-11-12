import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {


  constructor(private _http: HttpClient, private _auth: AuthService) { }

  loginGetToken(name: string, password: string): boolean {
    let iniciado: boolean = false;
    this._http.post<{ response: string }>
      (environment.apiEmpleadosSegura + 'auth/login', { userName: name, password: password }, { headers: { 'Content-Type': 'application/json' } }
      ).subscribe(data => {
        console.log(data.response)
        this._auth.setToken(data.response);
        iniciado = true;
      })
    return iniciado
  }

  getEmpleado(): Observable<Empleado> {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    header = header.set('Authorization', 'Bearer ' + this._auth.getToken());
    return this._http.get<Empleado>(environment.apiEmpleadosSegura + 'api/empleados/perfilempleado', {headers: header})
  }

  getSubordinados(): 



}
