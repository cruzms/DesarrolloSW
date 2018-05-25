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
import { identifierModuleUrl } from '@angular/compiler';
import { Estudiante } from '../../models/Estudiante';

@Component({
  selector: 'app-consultarmaterias',
  templateUrl: './consultarmaterias.component.html',
  styleUrls: ['./consultarmaterias.component.css']
})
export class ConsultarmateriasComponent implements OnInit {
  idEstudiante = '5b074186e33fae3a50d579f7'; // Debe existir este id
  estudiante: Estudiante;
  materias: Materia[];
  nActividades: any[][] = [];
  Actividades: Actividad[][] = [];
  constructor(private estudianteService: EstudianteService, private actividadService: ActividadService,
    private materiaService: MateriaService) {
    this.estudianteService.getEstudiante(this.idEstudiante).subscribe(estudiante => {
      this.estudiante = estudiante;
      this.estudianteService.getMateriasEstudiante(this.estudiante._id).subscribe(materias => {
        this.materias = materias;
        this.materias.forEach(element => {
          this.actividadService.consultarActividades(this.estudiante.grupo, element._id).subscribe(actividades => {
            this.Actividades.push(actividades);
            this.nActividades.push([element.nombre, actividades.length]);
          });
        });
      });
    });
  }

  ngOnInit() {
  }

}
