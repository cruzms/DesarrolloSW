/**
 * @description Componente encargado de relacionar la interfaz grafica con el nuevo reto
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IMultiSelectOption, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';
// Services
import { ProfesorService } from '../../services/profesor.service';
import { RetoService } from '../../services/reto.service';
import { TemaService } from '../../services/tema.service';
import { ArchivoService } from '../../services/archivo.service';
import { ValidardatosService } from '../../services/validardatos.service';
// Models
import { Profesor } from '../../models/Profesor';
import { GradoporGrupo } from '../../models/GradoporGrupo';
import { Materia } from '../../models/Materia';
import { Tema } from '../../models/Tema';
import { Reto } from '../../models/Reto';

@Component({
  selector: 'app-nuevoreto',
  templateUrl: './nuevoreto.component.html',
  styleUrls: ['./nuevoreto.component.css']
})
export class NuevoretoComponent implements OnInit {
  myOptions: IMultiSelectOption[];
  mySettings: IMultiSelectSettings = {
    enableSearch: false,
    checkedStyle: 'fontawesome',
    buttonClasses: 'form-control select',
    dynamicTitleMaxItems: 1,
    displayAllSelectedText: true,
    showUncheckAll: true
  };
  optionsModel: string[] = [];
  idProfesor = 1053854; // Debe existir este id
  ListaRespuestas: any[] = [];
  pregunta: string;
  grados: GradoporGrupo[];
  materias: Materia[];
  temas: Tema[];
  selectedGradoNombre = '';
  selectedGrado: GradoporGrupo;
  selectedMateriaNombre = '';
  selectedMateria: Materia;
  selectedTemaNombre = '';
  selectedTema: Tema;
  nombre: string;
  preguntas: any;
  esCorrecta: boolean;
  respuesta: string;
  inputEl: HTMLInputElement;

  constructor(private profesorService: ProfesorService, private retoService: RetoService,
    private temaService: TemaService, private archivoService: ArchivoService,
    private validardatosService: ValidardatosService, private el: ElementRef,
    private toastr: ToastrService) {
    profesorService.getMateriasProfesor(this.idProfesor).subscribe(materias => {
      this.materias = materias;
    });
    profesorService.getGruposProfesor(this.idProfesor).subscribe(grados => {
      this.grados = grados;
      this.fillOptions();
    });
  }

  ngOnInit() {
    this.inputEl = this.el.nativeElement.querySelectorAll('#archivos');
  }

  agregarRespuesta() {
    if (this.ListaRespuestas.length < 5) {
      const correct = this.ListaRespuestas.find(x => x.esCorrecta === true);
      if ((correct === undefined) || (correct !== undefined && !this.esCorrecta)) {
        const respuesta = this.ListaRespuestas.find(x => x.respuesta === this.respuesta);
        if (respuesta === undefined && (this.respuesta !== undefined || this.respuesta === '')) {
          const imagenRespuesta = Object.assign({}, this.inputEl[1].files);
          const acceptImage = ['jpeg', 'png', 'jpg'];
          if (imagenRespuesta[0] === undefined || acceptImage.includes(
            imagenRespuesta[0].name.split('.')[imagenRespuesta[0].name.split('.').length - 1])) {
            this.ListaRespuestas.push({
              esCorrecta: this.esCorrecta,
              respuesta: this.respuesta,
              imagen: imagenRespuesta
            });
            this.inputEl[1].value = '';
            this.respuesta = '';
            this.esCorrecta = false;
          } else {
            this.toastr.info('Solo se permiten cargar imágenes.', '', {
              timeOut: 5000,
              positionClass: 'toast-top-center'
            });
          }

        } else {
          this.toastr.info('Ya existe la misma respuesta o es vacía.', '', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
        }
      } else {
        this.toastr.info('Ya existe una respuesta correcta.', '', {
          timeOut: 5000,
          positionClass: 'toast-top-center'
        });
      }
    } else {
      this.toastr.warning('Número de respuestas superadas.', '', {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
    }
  }

  eliminarRespuesta(respuesta) {
    this.ListaRespuestas.splice(this.ListaRespuestas.indexOf(this.ListaRespuestas.find(x => x.respuesta === respuesta)), 1);
  }

  onMateriaSelected() {
    this.selectedMateria = this.materias.find(materia => materia.nombre === this.selectedMateriaNombre);
    this.getTemas();
  }

  onGradoSelected() {
    if (this.optionsModel.length === 0) {
      this.fillOptions();
    } else {
      this.myOptions = this.myOptions.filter(grado => grado.name.includes(this.optionsModel[0].split(' ')[0]));
      this.selectedGrado = this.grados.find(grado => grado.nombre === this.optionsModel[0]);
      this.getTemas();
    }
  }

  fillOptions() {
    this.selectedGrado = undefined;
    this.myOptions = [];
    this.grados.forEach(grad => {
      this.myOptions.push({
        id: grad.nombre,
        name: grad.nombre
      });
    });
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

  publicarReto() {
  }

  guardarReto() {
    const validation = this.validardatosService.ValidarReto(this.nombre, this.pregunta,
      this.selectedGrado, this.selectedMateria, this.selectedTema, this.ListaRespuestas.length);
    if (this.ListaRespuestas.find(x => x.esCorrecta === true) === undefined) {
      this.toastr.info('Se debe escoger una respuesta correcta', '', {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
      return;
    }
    if (validation.ok) {
      const formData = new FormData();
      if (this.inputEl[0].files[0] !== undefined) {
        const acceptImage = ['jpeg', 'png', 'jpg'];
        if (!acceptImage.includes(this.inputEl[0].files[0].name.split('.')[this.inputEl[0].files[0].name.split('.').length - 1])) {
          this.toastr.info('Solo se permite archivos de imagen en la pregunta', '', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
          return;
        }
        formData.append('archivos', this.inputEl[0].files[0]);
      }
      this.ListaRespuestas.forEach(respuesta => {
        if (respuesta.imagen[0] !== undefined) {
          formData.append('archivos', respuesta.imagen[0]);
        }
      });
      this.archivoService.SubirArchivo(formData).subscribe(files => {
        const grados: string[] = [];
        this.optionsModel.forEach(grupo => {
          const gradoporgrupo = this.grados.find(x => x.nombre === grupo);
          grados.push(gradoporgrupo._id);
        });
        const nuevoReto = {
          nombre: this.nombre,
          gradosporgrupos: grados,
          materia: this.selectedMateria._id,
          tema: this.selectedTema._id,
          profesor: this.idProfesor,
          publicado: false,
          preguntas: [{
            pregunta: this.pregunta,
            imagen: '',
            respuestas: []
          }]
        };
        if (this.inputEl[0].files[0] !== undefined) {
          nuevoReto.preguntas[0].imagen = files[0].filename;
          files.shift();
        }
        this.ListaRespuestas.forEach(respuesta => {
          if (respuesta.imagen[0] !== undefined) {
            nuevoReto.preguntas[0].respuestas.push({
              texto: respuesta.respuesta,
              correcta: respuesta.esCorrecta,
              imagen: files[0].filename
            });
            files.shift();
          } else {
            nuevoReto.preguntas[0].respuestas.push({
              texto: respuesta.respuesta,
              correcta: respuesta.esCorrecta,
              imagen: ''
            });
          }
        });
        this.retoService.addReto(nuevoReto).subscribe(reto => {
          this.toastr.success('Reto guardado', '', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
          window.location.reload();
        }, err => {
          this.toastr.error(err.error.message, '', {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
        });
      });
    } else {
      this.toastr.error(validation.message, 'Error', {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
    }
  }
}
