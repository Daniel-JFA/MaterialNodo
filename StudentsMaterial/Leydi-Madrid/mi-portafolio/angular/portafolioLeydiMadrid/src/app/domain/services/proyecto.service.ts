import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  datosProyecto = [
    {
      id: 1,
      img: '../../../assets/lfdt.jpg',
      titulo: 'Sitio web La Finca de Todos',
      descripcion:
        'Diseño completo de la interfaz gráfica y desarrollo front-end para La Fundación La Finca de Todos',
      tecnologias: [
        { icono: 'bx bxl-react', nombre: 'React JS' },
        { icono: 'bx bxl-tailwind-css', nombre: 'Tailwind CSS' },
      ],
      github: 'https://github.com/leydimadrid/sitio-web-la-finca-de-todos',
      url: 'https://www.lafincadetodos.com/#/inicio',
    },
    {
      id: 2,
      img: '../../../assets/todolist.jpg',
      titulo: 'To do list',
      descripcion:
        'Lista de tareas con un CRUD completo, crear, leer, actualizar, borrar y validación de campos vacíos.',
      tecnologias: [
        { icono: 'bx bxl-react', nombre: 'React JS' },
        { icono: 'bx bxl-tailwind-css', nombre: 'Tailwind CSS' },
      ],
      github: 'https://github.com/leydimadrid/aplicacion-todo',
      url: 'https://listadetareas-crud.netlify.app/',
    },
    {
      id: 3,
      img: '../../../assets/store.jpg',
      titulo: 'Store',
      descripcion:
        'Proyecto personal, practicando Angular 17, consumiendo una API',
      tecnologias: [
        { icono: 'bx bxl-angular', nombre: 'Angular 17' },
        { icono: 'bx bxl-tailwind-css', nombre: 'Tailwind CSS' },
      ],
      github: '',
      url: 'https://store-omega-black.vercel.app/',
    },
  ];

  constructor() {}
}
