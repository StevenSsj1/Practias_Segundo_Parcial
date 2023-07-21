import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  ruc: string = '99999999001';
  valor: number = 0.0;
  gasto: string = 'Ninguno';

  datos: any[] = [];

  guardar(): void {
    const nuevoDato = {
      ruc: this.ruc,
      valor: this.valor,
      gasto: this.gasto
    };

    this.datos.push(nuevoDato);

    this.ruc = '99999999001';
    this.valor = 0.0;
    this.gasto = 'Ninguno';

    this.imprimirDatos();
  }

  imprimirDatos(): void {
    console.log(this.datos);
  }
}
