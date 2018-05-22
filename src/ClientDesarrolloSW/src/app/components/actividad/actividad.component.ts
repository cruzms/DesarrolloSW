/**
 * @description Componente encargado de relacionar la interfaz grafica con el modelo Actividad
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Component, OnInit } from '@angular/core';
// Services
import { ProfesorService } from '../../services/profesor.service';
import { ActividadService } from '../../services/actividad.service';
import { GrupoService } from '../../services/grupo.service';
import { MateriaService } from '../../services/materia.service';
import { TemaService } from '../../services/tema.service';
// Models
import { Profesor } from '../../models/Profesor';
import { Actividad } from '../../models/Actividad';
import { Grupo } from '../../models/Grupo';
import { Materia } from '../../models/Materia';
import { Tema } from '../../models/Tema';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {
  idProfesor = 1053854;
  profesor: Profesor;
  constructor(private profesorService: ProfesorService, private actividadService: ActividadService,
    private grupoService: GrupoService, private materiaService: MateriaService, temaService: TemaService) {
    // cargar la info de materias con los datos del profesor
    this.profesorService.getProfesor(this.idProfesor).subscribe(profesor => {
      this.profesor = profesor;
      this.profesor.grupos.forEach(mat => {
        console.log(mat);
      });
    });
  }

  ngOnInit() {
  }
}
