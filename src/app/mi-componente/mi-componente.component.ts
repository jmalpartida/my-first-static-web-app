//import { Component } from '@angular/core';
import { MiComponent } from './mi-componente.ts';
@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  title: string = 'Bienvenido a Qhatuyki';
  description: string = 'Qhatuyki es la herramienta de productividad en la nube diseñada para los comerciantes de los mercados de abastos en Santiago de Surco, Perú. Con Qhatuyki, podrás vender tus productos en línea, gestionar pedidos, ofrecer descuentos exclusivos y facilitar el pago de forma segura a través de plataformas como Yape y Plin.';
  features: string[] = [
    'Crea tu tienda en línea fácilmente.',
    'Ofrece descuentos y promociones especiales.',
    'Permite que tus clientes realicen pedidos en línea.',
    'Acepta pagos a través de Yape, Plin y otras plataformas.',
    'Visualiza y gestiona los pedidos de tus clientes de forma eficiente.'
  ];
  
  constructor() { }
  
}

