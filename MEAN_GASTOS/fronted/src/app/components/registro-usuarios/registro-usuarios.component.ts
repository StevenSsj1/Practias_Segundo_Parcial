import { Component, OnInit } from '@angular/core';
import { Gasto } from './../../models/gastos'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GastoService } from './../../service/usuarios.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent {

  constructor(private http: HttpClient) {
    
  }
  enviarFormulario() {
    const ruc = (document.querySelector('#rucEmpresa') as HTMLInputElement).value;
    const nombre = (document.querySelector('#nombreEmpresa') as HTMLInputElement).value;
    const Monto = (document.querySelector('#Monto') as HTMLInputElement).value;
    const tipo = (document.querySelector('#tipoGasto') as HTMLInputElement).value;

    const gastos = new Gasto(
      ruc,nombre,parseFloat(Monto),tipo
    )
      console.log(gastos)
    this.http.post<any>('http://localhost:3000/api/gastos', gastos).subscribe(
      (response) => {
        console.log(response);
        // Aquí puedes manejar la respuesta del servidor si es necesario.
      },
      (error) => {
        console.error(error);
        // Aquí puedes manejar los errores en caso de que ocurran.
      }
    );
  }
}
