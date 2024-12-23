import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  title: string = 'sistema Qhatuyki';
  description: string = 'Qhatuyki es la herramienta de productividad en la nube diseñada para tu negócio. Con Qhatuyki punto de venta, podrás vender tus productos en línea, gestionar pedidos, ofrecer descuentos exclusivos y facilitar el pago de forma segura a través de plataformas como Yape y Plin.';
  features: string[] = [
    'Crea tu tienda en línea fácilmente.',
    'Ofrece descuentos y promociones especiales.',
    'Permite que tus clientes realicen pedidos en línea.',
    'Acepta pagos a través de Yape, Plin y otras plataformas.',
    'Visualiza y gestiona los pedidos de tus clientes de forma eficiente.'
  ];
  
  constructor() { }
  
}

