import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StackDesarrolloService {
  stackDesarrollo = [
    { icono: 'bx bxl-figma', nombre: 'Figma' },
    { icono: 'bx bxl-html5', nombre: 'HTML5' },
    { icono: 'bx bxl-tailwind-css', nombre: 'Tailwind CSS' },
    { icono: 'bx bxl-css3', nombre: 'CSS3' },
    { icono: 'bx bxl-javascript', nombre: 'JavaScript' },
    { icono: 'bx bxl-react', nombre: 'React JS' },
    { icono: 'bx bxl-angular', nombre: 'Angular 17' },
  ];

  constructor() {}
}
