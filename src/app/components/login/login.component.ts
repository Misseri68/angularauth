import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers: [EmpleadosService, AuthService, Router],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajacontra') cajaContra!: ElementRef;

  constructor(private _EmpleadoService: EmpleadosService, private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    if (this._auth.getToken() !== null) {
      this._router.navigate(['/perfil']);
    } else {
      console.log("Porfi inicia sesion rey")
    }
  }

  login() {
    this._EmpleadoService.loginGetToken(this.cajaNombre.nativeElement.value, this.cajaContra.nativeElement.value);
    if (this._auth.getToken() !== null) {
      this._router.navigate(['/perfil']);
    } else alert("Algo ha ido mal, prueba a meter los datos bien crack")
  }

}

