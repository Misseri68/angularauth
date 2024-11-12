import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { AuthService } from '../../services/auth.service';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './perfil.component.html',
})
export class PerfilComponent {

  empleado!: Empleado;

  constructor(private _EmpleadoService: EmpleadosService, private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
    if (this._auth.getToken() === null) {
      this._router.navigate(['/login']);
    } else {
      this._EmpleadoService.getEmpleado().subscribe(data => {
        this.empleado = data;
      });

    }

  }
}
