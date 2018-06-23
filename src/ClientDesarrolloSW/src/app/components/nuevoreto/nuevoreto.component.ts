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

  constructor(private profesorService: ProfesorService, private actividadService: ActividadService,
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
        if (respuesta === undefined) {
          const imagenRespuesta = Object.assign({}, this.inputEl[1].files);
          this.ListaRespuestas.push({
            esCorrecta: this.esCorrecta,
            respuesta: this.respuesta,
            imagen: imagenRespuesta
          });
        } else {
          this.toastr.info('Ya existe la misma respuesta.', '', {
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
    if (this.selectedGrado !== null && this.selectedMateria !== null) {
      this.temaService.getTemasMateria_Grupo(this.selectedMateria._id, this.selectedGrado.grado).subscribe(temas => {
        this.temas = temas;
      });
    }
  }

  publicarReto() {

  }

  guardarReto() {
    console.log(this.ListaRespuestas);
    console.log(this.selectedGrado.nombre, this.selectedMateria.nombre, this.selectedTema.nombre);


  }

}
