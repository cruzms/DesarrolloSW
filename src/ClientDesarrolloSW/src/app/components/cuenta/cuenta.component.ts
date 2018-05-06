import { Component, OnInit } from '@angular/core';
import { CuentaService } from "../../services/cuenta.service"
import { Cuenta } from "../../models/Cuenta";

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  id: string;
  Updateoculto: boolean;
  Addoculto: boolean;
  numero_cuenta: string;
  id_cliente: string;
  saldo: number;
  tipo: string;
  cuentas: Cuenta[];
  constructor(private cuentaService: CuentaService) {
    this.Updateoculto = true;
    this.Addoculto = false;
    this.cuentaService.getCuenta().subscribe(cuentas => {
      this.cuentas = cuentas;
    });
  }

  ngOnInit() {
  }

  addCuenta() {
    const newCuenta: Cuenta = {
      numero_cuenta: this.numero_cuenta,
      id_cliente: this.id_cliente,
      saldo: this.saldo,
      tipo: this.tipo,
    };
    this.cuentaService.addCuenta(newCuenta).subscribe(cuenta => {
      this.cuentas.push(cuenta);
      this.resetearValores();
    });
  }

  deleteCuenta(id) {
    const response = confirm("¿Estás seguro de eliminar?")
    if (response) {
      const cuentas = this.cuentas;
      this.cuentaService.deleteCuenta(id).subscribe(data => {
        if (JSON.stringify(data) === "{\"Message\":\"Cuenta Eliminada\"}") {
          for (let i = 0; i < cuentas.length; i++) {
            if (cuentas[i]._id == id) {
              cuentas.splice(i, 1);
            }
          }
        }
      });
    }
  }

  mostrarUpdate(cuenta: Cuenta) {
    this.id = cuenta._id;
    this.numero_cuenta = cuenta.numero_cuenta;
    this.id_cliente = cuenta.id_cliente;
    this.saldo = cuenta.saldo;
    this.tipo = cuenta.tipo;
    this.Addoculto = true;
    this.Updateoculto = false;
  }

  updateCuenta() {
    const updateCuenta: Cuenta = {
      _id: this.id,
      numero_cuenta: this.numero_cuenta,
      id_cliente: this.id_cliente,
      saldo: this.saldo,
      tipo: this.tipo,
    };
    this.cuentaService.updateCuenta(updateCuenta).subscribe(data => {
      const cuentas = this.cuentas;      
      if (JSON.stringify(data) === "{\"Message\":\"Cuenta modificada\"}") {
        for (let i = 0; i < cuentas.length; i++) {
          if (cuentas[i]._id == updateCuenta._id) {
            cuentas.splice(i, 1);
            this.cuentas.push(updateCuenta);
          }
        }
      }else{
        alert("Error, Cuenta no eliminado.");
      }      
      this.resetearValores();
    });
    this.Updateoculto = true;
    this.Addoculto = false;
  }

  resetearValores() {
    this.numero_cuenta = '';
    this.id_cliente = '';
    this.saldo = null;
    this.tipo = '';

  }

}
