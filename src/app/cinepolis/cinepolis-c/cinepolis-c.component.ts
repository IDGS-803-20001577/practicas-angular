import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis-c',
  templateUrl: './cinepolis-c.component.html',
  styleUrls: ['./cinepolis-c.component.css']
})
export class CinepolisCComponent {
  Nombre: string = '';
  CantidadC: number = 0;
  Tarjeta: string = '';
  CantidadEnt: number = 0;
  Total: string = '';

  calcularDescuentos():string {
    const boletos = this.CantidadEnt;
    const tarjetaCineco = this.Tarjeta;
    const nCompradores = this.CantidadC;
    const precio = 12;
    let total = precio * boletos;
    const cantMaxBol = nCompradores * 7;
    let t = 0;

    if (cantMaxBol < boletos) {
      this.Total = 'Maximo 7 Boletos por Persona';
      return this.Total;
    } else {
      if (boletos > 5) {
        if (tarjetaCineco === 'S') {
          const pDesc = total - total * 0.15;
          t = pDesc - pDesc * 0.1;
        } else {
          t = total - total * 0.15;
        }
      } else if (boletos === 3 || boletos === 4 || boletos === 5) {
        if (tarjetaCineco === 'S') {
          const pDesc = total - total * 0.1;
          t = pDesc - pDesc * 0.1;
        } else {
          t = total - total * 0.1;
        }
      } else {
        if (tarjetaCineco === 'S') {
          t = total - total * 0.1;
        } else {
          t = total;
        }
      }
    }

    this.Total = t.toString();
    return this.Total;
  }
}
