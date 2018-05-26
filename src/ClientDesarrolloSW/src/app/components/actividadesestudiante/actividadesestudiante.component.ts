/**
 * @description Componente encargado de relacionar la interfaz grafica de consultar materias
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */

import { Component, OnInit } from '@angular/core';
// Services
import { ActividadService } from '../../services/actividad.service';
// Models
import { Actividad } from '../../models/Actividad';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-actividadesestudiante',
  templateUrl: './actividadesestudiante.component.html',
  styleUrls: ['./actividadesestudiante.component.css']
})
export class ActividadesestudianteComponent implements OnInit {
  Actividades: Actividad[] = [];
  ActividadSeleccionada: Actividad;
  idMateria: String;
  constructor(private route: ActivatedRoute, private actividadService: ActividadService) {
  }

  ngOnInit() {
    this.idMateria = this.route.snapshot.params['materia'];
    this.loadActividades();
  }

  loadActividades() {
    this.actividadService.actividades.forEach(actividades => {
      actividades.forEach(act => {
        if (act.materia === this.idMateria) {
          this.Actividades.push(act);
        }
      });
    });
  }

  verActividad(idActividad) {
    this.Actividades.forEach(element => {
      if (element._id === idActividad) {
        this.ActividadSeleccionada = element;
        return;
      }
    });

  }
}
