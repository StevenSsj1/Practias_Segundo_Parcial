import { Component, OnInit } from '@angular/core';
import { GastoService } from './../../service/usuarios.service'
import { Gasto } from 'src/app/models/gastos';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
   usuarios: any[] = []
   constructor(private servicio : GastoService){
   }
   ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicio.obtenerUsuarios().subscribe(
      (response) => {
        this.usuarios = response;
        console.log(this.usuarios);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteGasto(gasto: Gasto) {
    this.servicio.deleteGasto(gasto).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(g => g !== gasto);
      },
      (error) => {
        console.log('Error al eliminar el gasto:', error);
      }
    );
  }
}
