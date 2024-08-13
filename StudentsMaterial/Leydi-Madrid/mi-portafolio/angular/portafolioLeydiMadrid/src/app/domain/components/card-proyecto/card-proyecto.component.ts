import { Component } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-proyecto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-proyecto.component.html',
  styleUrl: './card-proyecto.component.css'
})
export class CardProyectoComponent {
  constructor(public ProyectoService: ProyectoService) {
    
  }

}
