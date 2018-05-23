/**
 * @description Componente encargado de relacionar la interfaz grafica con la nueva Actividad
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
  selector: 'app-nuevaactividad',
  templateUrl: './nuevaactividad.component.html',
  styleUrls: ['./nuevaactividad.component.css']
})
export class NuevaactividadComponent implements OnInit {
  idProfesor = 123456789; // Debe existir este id
  materias: Materia[];
  grupos: Grupo[];
  selectedMateriaNombre: string;
  selectedMateria: Materia;
  selectedGrupoNombre: string;
  selectedGrupo: Grupo;
  constructor(private profesorService: ProfesorService, private actividadService: ActividadService,
    private grupoService: GrupoService, private materiaService: MateriaService, temaService: TemaService) {
    profesorService.getMateriasProfesor(this.idProfesor).subscribe(materias => {
      this.materias = materias;
    });
    profesorService.getGruposProfesor(this.idProfesor).subscribe(grupos => {
      this.grupos = grupos;
    });
  }

  ngOnInit() {
  }

  private onMateriaSelected() {
    this.selectedMateria = this.materias.find(materia => materia.nombre === this.selectedMateriaNombre);
    console.log(this.selectedMateria._id);
  }

  private onGrupoSelected() {
    this.selectedGrupo = this.grupos.find(grupo => grupo.nombre === this.selectedGrupoNombre);
    console.log(this.selectedGrupo._id);
  }
}
