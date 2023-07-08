import { Component } from '@angular/core';

interface Pizza {
  tamanio: string;
  ingredientes: string;
  numeroPizzas: number;
  subtotal: number;
}

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.scss']
})
export class PizzeriaComponent {
  nombreCliente: string = '';
  direccionCliente: string = '';
  telefonoCliente: string = '';
  tamanoPizza: string = '';
  pinaChecked: boolean = false;
  peperoniChecked: boolean = false;
  champinonChecked: boolean = false;
  numeroPizzas: number = 0;
  pedido: any[] = [];
  ventasAcumuladas: any[] = [];

  agregarPizza() {
    let subtotal = 0;

    if (this.tamanoPizza === 'chica') {
      subtotal += 40;
    } else if (this.tamanoPizza === 'mediana') {
      subtotal += 80;
    } else if (this.tamanoPizza === 'grande') {
      subtotal += 120;
    }

    if (this.pinaChecked) {
      subtotal += 10;
    }

    if (this.peperoniChecked) {
      subtotal += 10;
    }

    if (this.champinonChecked) {
      subtotal += 10;
    }

    if (subtotal === 0) {
      // Establecer un subtotal predeterminado si no se selecciona ningún tamaño ni ingredientes
      subtotal = 40;
    }

    const pizza = {
      tamano: this.tamanoPizza,
      ingredientes: this.obtenerIngredientesSeleccionados(),
      numeroPizzas: this.numeroPizzas,
      subtotal: subtotal * this.numeroPizzas
    };

    this.pedido.push(pizza);

    // Restablecer los valores después de agregar la pizza al pedido
    this.tamanoPizza = '';
    this.pinaChecked = false;
    this.peperoniChecked = false;
    this.champinonChecked = false;
    this.numeroPizzas = 0;
  }

  obtenerSubtotalPredeterminado(tamanoPizza: string): number {

    if (tamanoPizza === 'chica') {
      return 40;
    } else if (tamanoPizza === 'mediana') {
      return 80;
    } else if (tamanoPizza === 'grande') {
      return 120;
    }

    return 0;
  }

  quitarPizza(pizza: any) {
    const index = this.pedido.indexOf(pizza);
    if (index !== -1) {
      this.pedido.splice(index, 1);
    }
  }

  finalizarPedido() {
    let total = 0;
    for (const pizza of this.pedido) {
      total += pizza.subtotal;
    }

    const confirmacion = confirm(`El costo total del pedido es: $${total}. ¿Está de acuerdo?`);
    if (confirmacion) {
      const venta = {
        nombreCliente: this.nombreCliente,
        direccionCliente: this.direccionCliente,
        telefonoCliente: this.telefonoCliente,
        pedido: this.pedido,
        total: total
      };

      this.ventasAcumuladas.push(venta);

      // Restablecer los campos del formulario
      this.nombreCliente = '';
      this.direccionCliente = '';
      this.telefonoCliente = '';
      this.tamanoPizza = '';
      this.pinaChecked = false;
      this.peperoniChecked = false;
      this.champinonChecked = false;
      this.numeroPizzas = 0;
      this.pedido = [];
    }
  }

  obtenerIngredientesSeleccionados(): string[] {
    const ingredientes: string[] = [];

    if (this.pinaChecked) {
      ingredientes.push('piña');
    }

    if (this.peperoniChecked) {
      ingredientes.push('peperoni');
    }

    if (this.champinonChecked) {
      ingredientes.push('champiñon');
    }

    return ingredientes;
  }
}