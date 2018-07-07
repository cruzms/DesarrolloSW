import { Component, OnInit } from '@angular/core';

// Services
import { EstudianteService } from '../../services/estudiante.service';
import { RetoService } from '../../services/reto.service';

// Models
import { Estudiante } from '../../models/Estudiante';
import { Reto } from '../../models/Reto';

@Component({
  selector: 'app-consultarretos',
  templateUrl: './consultarretos.component.html',
  styleUrls: ['./consultarretos.component.css']
})
export class ConsultarretosComponent implements OnInit {
  estudiante: Estudiante;
  retosEstudiante: Reto[];
  retos: any[] = [];
  constructor(private estudianteService: EstudianteService, private retoService: RetoService) { }

  ngOnInit() {
    this.estudianteService.getEstudiante(this.estudianteService.idEstudiante).subscribe(estudiante => {
      this.estudiante = estudiante;
      this.retoService.getRetosEstudiante(this.estudiante.gradoporgrupo).subscribe(retosestudiante => {
        this.retosEstudiante = retosestudiante;
        this.retosEstudiante.forEach(reto => {
          if (this.retos.find(x => x.materia === reto.materia.nombre) === undefined) {
            this.retos.push({
              materia: reto.materia.nombre,
              retos: [reto]
            });
          } else {
            this.retos.find(x => x.materia === reto.materia.nombre).retos.push(reto);
          }
        });
        console.log(this.retos);

      });
    });
  }
}
