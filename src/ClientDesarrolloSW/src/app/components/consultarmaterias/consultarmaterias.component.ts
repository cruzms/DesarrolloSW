/**
 * @description Componente encargado de relacionar la interfaz grafica de consultar materias
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Component, OnInit } from '@angular/core';
// Services
import { EstudianteService } from '../../services/estudiante.service';
import { ActividadService } from '../../services/actividad.service';
import { MateriaService } from '../../services/materia.service';
// Models
import { Actividad } from '../../models/Actividad';
import { Materia } from '../../models/Materia';

@Component({
  selector: 'app-consultarmaterias',
  templateUrl: './consultarmaterias.component.html',
  styleUrls: ['./consultarmaterias.component.css']
})
export class ConsultarmateriasComponent implements OnInit {
  idEstudiante = '5b0745220e83e1c9555c078d'; // Debe existir este id
  constructor(private estudianteService: EstudianteService, private actividadService: ActividadService,
    private materiaService: MateriaService) { }

  ngOnInit() {
  }

}
