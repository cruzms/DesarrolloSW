/**
 * @description Componente encargado de relacionar la interfaz grafica con la nueva Actividad
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Component, OnInit, ElementRef, Input } from '@angular/core';
// Services
import { ProfesorService } from '../../services/profesor.service';
import { ActividadService } from '../../services/actividad.service';
import { GrupoService } from '../../services/grupo.service';
import { MateriaService } from '../../services/materia.service';
import { TemaService } from '../../services/tema.service';
import { ArchivoService } from '../../services/archivo.service';
import { ValidardatosService } from '../../services/validardatos.service';
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
  idProfesor = 1053854; // Debe existir este id
  grupos: Grupo[];
  materias: Materia[];
  temas: Tema[];
  selectedGrupoNombre = '';
  selectedGrupo: Grupo;
  selectedMateriaNombre: string;
  selectedMateria: Materia;
  selectedTemaNombre: string;
  selectedTema: Tema;
  titulo: string;
  descripcion: string;
  fechalimite: Date;
  nintegrantes: number;
  objetivos: string;
  constructor(private profesorService: ProfesorService, private actividadService: ActividadService,
    private grupoService: GrupoService, private materiaService: MateriaService, temaService: TemaService,
    private archivoService: ArchivoService, private validardatosService: ValidardatosService, private el: ElementRef) {
    profesorService.getMateriasProfesor(this.idProfesor).subscribe(materias => {
      this.materias = materias;
    });
    profesorService.getGruposProfesor(this.idProfesor).subscribe(grupos => {
      this.grupos = grupos;
    });
  }

  ngOnInit() {
  }

  onMateriaSelected() {
    this.selectedMateria = this.materias.find(materia => materia.nombre === this.selectedMateriaNombre);
    this.getTemas(this.selectedMateria._id);
  }

  onGrupoSelected() {
    this.selectedGrupo = this.grupos.find(grupo => grupo.nombre === this.selectedGrupoNombre);
  }

  onTemaSelected() {
    this.selectedTema = this.temas.find(tema => tema.nombre === this.selectedTemaNombre);
  }

  getTemas(idMateria) {
    this.materiaService.getTemasMateria(idMateria).subscribe(temas => {
      this.temas = temas;
    });
  }

  publicarActividad() {
    const validation = this.validardatosService.ValidarActividad(this.titulo, this.descripcion, this.fechalimite,
      this.nintegrantes, this.objetivos, this.selectedGrupo, this.selectedMateria, this.selectedTema, []);
    if (validation.ok) {
      this.actividadService.addActividad(validation.actividad).subscribe(actividad => {
        alert(actividad);
      });
    } else {
      alert(validation.message);
    }
  }

  upload() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#archivos');
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) {
      formData.append('archivos', inputEl.files.item(0));
      this.archivoService.SubirArchivo(formData).subscribe(datos => {
        console.log(datos);
      });
    }
  }
}
