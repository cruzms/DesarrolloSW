import { Component, OnInit } from '@angular/core';
import { CarroService } from "../../services/carro.service"
import { Carro } from "../../Carro";

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  marca: string;
  modelo: string;
  color: string;
  placa: string;
  puertas: number;
  peso: number;
  ano: number;
  carros: Carro[];
  constructor(private carroService: CarroService) {
    this.carroService.getCarros().subscribe(carros => {
      this.carros = carros;
    });
  }

  ngOnInit() {
  }

  addCarro(event) {
    event.preventDefault();
    const newCarro: Carro = {
      marca: this.marca,
      modelo: this.modelo,
      color: this.color,
      placa: this.placa,
      puertas: this.puertas,
      peso: this.peso,
      ano: this.ano
    };
    this.carroService.addCarro(newCarro).subscribe(carro => {
      this.carros.push(carro);
      this.marca = '';
      this.modelo = '';
      this.color = '';
      this.placa = '';
      this.puertas = null;
      this.ano = null;
      this.peso = null;
    });
  }

  deleteCarro(id) {
    const response = confirm("¿Estás seguro de eliminar?")
    if (response) {
      const carros = this.carros;
      this.carroService.deleteCarro(id).subscribe(data => {
    if (JSON.stringify(data) === "{\"Message\":\"Carro eliminado\"}") {
          for (let i = 0; i < carros.length; i++) {
            if (carros[i]._id == id) {
              carros.splice(i, 1);
            }
          }
        }
      });
    }
  }

}
