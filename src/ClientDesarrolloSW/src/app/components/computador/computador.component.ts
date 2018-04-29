import { Component, OnInit } from '@angular/core';
import { ComputadorService } from "../../services/computador.service";

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css']
})
export class ComputadorComponent implements OnInit {
  marca: String;
  modelo: String;
  discoduro: Number;
  ram: Number;
  procesador: String;
  pulgadas: Number;
  disponible: Boolean;

  constructor(private computadorService: ComputadorService) { }

  ngOnInit() {
  }

  addComputador() {
    const newComputador = {
      marca: this.marca,
      modelo: this.modelo,
      discoduro: this.discoduro,
      ram: this.ram,
      procesador: this.procesador,
      pulgadas: this.pulgadas,
      disponible: this.disponible
    }

    this.computadorService.getComputadores().subscribe(data => {
      console.log(data);
    });
  }
}
