/**
 * @description Componente encargado de relacionar la interfaz grafica con el nuevo reto
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// Services
import { ProfesorService } from '../../services/profesor.service';
import { ActividadService } from '../../services/actividad.service';
import { TemaService } from '../../services/tema.service';
import { ArchivoService } from '../../services/archivo.service';
import { ValidardatosService } from '../../services/validardatos.service';
// Models
import { Profesor } from '../../models/Profesor';
import { Actividad } from '../../models/Actividad';
import { GradoporGrupo } from '../../models/GradoporGrupo';
import { Materia } from '../../models/Materia';
import { Tema } from '../../models/Tema';

@Component({
  selector: 'app-nuevoreto',
  templateUrl: './nuevoreto.component.html',
  styleUrls: ['./nuevoreto.component.css']
})
export class NuevoretoComponent implements OnInit {
  idProfesor = 1053854; // Debe existir este id
  grupos: GradoporGrupo[];
  materias: Materia[];
  temas: Tema[];
  selectedGrupoNombre = '';
  selectedGrado: GradoporGrupo;
  selectedMateriaNombre: '';
  selectedMateria: Materia;
  selectedTemaNombre: '';
  selectedTema: Tema;
  nombre: string;
  preguntas: any;
  inputEl: HTMLInputElement;
  constructor(private profesorService: ProfesorService, private actividadService: ActividadService,
    private temaService: TemaService, private archivoService: ArchivoService,
    private validardatosService: ValidardatosService, private el: ElementRef,
    private toastr: ToastrService) {
    profesorService.getMateriasProfesor(this.idProfesor).subscribe(materias => {
      this.materias = materias;
    });
    profesorService.getGruposProfesor(this.idProfesor).subscribe(grupos => {
      this.grupos = grupos;
    });
  }

  ngOnInit() {
    // linea de archivos
  }

  onMateriaSelected() {
    this.selectedMateria = this.materias.find(materia => materia.nombre === this.selectedMateriaNombre);
    this.getTemas();
  }

  onGradoSelected() {
    this.selectedGrado = this.grupos.find(grupo => grupo.nombre === this.selectedGrupoNombre);
    this.getTemas();
  }

  onTemaSelected() {
    this.selectedTema = this.temas.find(tema => tema.nombre === this.selectedTemaNombre);
  }

  getTemas() {
    if (this.selectedGrado !== null && this.selectedMateria !== null) {
      this.temaService.getTemasMateria_Grupo(this.selectedMateria._id, this.selectedGrado.grado).subscribe(temas => {
        this.temas = temas;
      });
    }
  }

  publicarReto() {

  }

}
