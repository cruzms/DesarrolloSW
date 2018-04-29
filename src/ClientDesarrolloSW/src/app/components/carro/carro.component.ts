import { Component, OnInit } from '@angular/core';
import { CarroService } from "../../services/carro.service"
import { Carro } from "../../models/Carro";

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  id: string;
  Updateoculto: boolean;
  Addoculto: boolean;
  marca: string;
  modelo: string;
  color: string;
  placa: string;
  puertas: number;
  peso: number;
  ano: number;
  carros: Carro[];
  constructor(private carroService: CarroService) {
    this.Updateoculto = true;
    this.Addoculto = false;
    this.carroService.getCarros().subscribe(carros => {
      this.carros = carros;
    });
  }

  ngOnInit() {
  }

  addCarro() {
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
      this.resetearValores();
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

  mostrarUpdate(carro: Carro) {
    this.id = carro._id;
    this.marca = carro.marca;
    this.modelo = carro.modelo;
    this.color = carro.color;
    this.placa = carro.placa;
    this.puertas = carro.puertas;
    this.peso = carro.peso;
    this.ano = carro.ano;
    this.Addoculto = true;
    this.Updateoculto = false;
  }

  updateCarro() {
    const updateCarro: Carro = {
      _id: this.id,
      marca: this.marca,
      modelo: this.modelo,
      color: this.color,
      placa: this.placa,
      puertas: this.puertas,
      peso: this.peso,
      ano: this.ano
    };
    this.carroService.updateCarro(updateCarro).subscribe(data => {
      const carros = this.carros;      
      if (JSON.stringify(data) === "{\"Message\":\"Carro modificado\"}") {
        for (let i = 0; i < carros.length; i++) {
          if (carros[i]._id == updateCarro._id) {
            carros.splice(i, 1);
            this.carros.push(updateCarro);
          }
        }
      }else{
        alert("Error, Carro no eliminado.");
      }      
      this.resetearValores();
    });
    this.Updateoculto = true;
    this.Addoculto = false;
  }

  resetearValores() {
    this.marca = '';
    this.modelo = '';
    this.color = '';
    this.placa = '';
    this.puertas = null;
    this.ano = null;
    this.peso = null;
  }

}
