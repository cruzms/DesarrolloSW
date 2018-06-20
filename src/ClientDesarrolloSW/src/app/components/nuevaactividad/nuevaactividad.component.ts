/**
 * @description Componente encargado de relacionar la interfaz grafica con la nueva Actividad
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
  selector: 'app-nuevaactividad',
  templateUrl: './nuevaactividad.component.html',
  styleUrls: ['./nuevaactividad.component.css']
})
export class NuevaactividadComponent implements OnInit {
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
  titulo: string;
  descripcion: string;
  fechalimite: Date;
  nintegrantes: number;
  logros: string;
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
    this.inputEl = this.el.nativeElement.querySelector('#archivos');
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
    if (this.selectedGrado !== undefined && this.selectedMateria !== undefined) {
      this.temaService.getTemasMateria_Grupo(this.selectedMateria._id, this.selectedGrado.grado).subscribe(temas => {
        this.temas = temas;
      });
    }
  }

  publicarActividad() {
    const validation = this.validardatosService.ValidarActividad(this.titulo, this.descripcion, this.fechalimite,
      this.nintegrantes, this.selectedGrado, this.selectedMateria, this.selectedTema);
    if (validation.ok) {
      const fileCount: number = this.inputEl.files.length;
      const formData = new FormData();
      if (fileCount > 0) {
        for (let index = 0; index < fileCount; index++) {
          formData.append('archivos', this.inputEl.files.item(index));
        }
        this.archivoService.SubirArchivo(formData).subscribe(files => {
          const file = [];
          files.forEach(element => {
            console.log(element);
            file.push({ file: element.filename, nombreOriginal: element.originalname });
          });
          const newActividad = {
            titulo: this.titulo,
            descripcion: this.descripcion,
            fechaLimite: this.fechalimite,
            profesor: this.idProfesor,
            integrantes: this.nintegrantes,
            logros: this.logros,
            gradoporgrupo: this.selectedGrado._id,
            materia: this.selectedMateria._id,
            tema: this.selectedTema._id,
            archivos: file
          };
          this.actividadService.addActividad(newActividad).subscribe(actividad => {
            this.toastr.success('Actividad agregada', '', {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            });
          });
        });
      } else {
        const newActividad = {
          titulo: this.titulo,
          descripcion: this.descripcion,
          fechaLimite: this.fechalimite,
          integrantes: this.nintegrantes,
          profesor: this.idProfesor,
          logros: this.logros,
          gradoporgrupo: this.selectedGrado._id,
          materia: this.selectedMateria._id,
          tema: this.selectedTema._id,
          archivos: []
        };
        this.actividadService.addActividad(newActividad).subscribe(actividad => {
          this.toastr.success('Actividad agregada', '', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
        });
      }
    } else {
      this.toastr.error(validation.message, 'Error', {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
    }
  }
}
