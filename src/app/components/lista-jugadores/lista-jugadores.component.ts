import { Component } from '@angular/core';
import * as data from '../../../assets/json/datos.json';

interface Jugador {
  nombre: string
  apellido: string
  edad: number
  posicion: string
}

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent {
  jugadoresArgentina: Jugador[] = data.jugadoresArgentina
  jugadoresOriginales: Jugador[] = [...data.jugadoresArgentina]
  posicionFiltrada: string = ''
  buscarJugador: any = ''
  edadPromedio: number = 0
  

  filtrarJugadores(posicion: string) {
    this.posicionFiltrada = posicion
  }

  eliminarAlMasViejo(){
    if (this.jugadoresArgentina.length === 0) {
      return
    }

    let jugadorMayor = this.jugadoresArgentina[0]

    this.jugadoresArgentina.forEach(jugador => {
      if (jugador.edad > jugadorMayor.edad) {
        jugadorMayor = jugador;
      }
    })

    const index = this.jugadoresArgentina.indexOf(jugadorMayor)
    if (index > -1) {
      this.jugadoresArgentina.splice(index, 1)
    }
  }

  
  resetearPlantilla(){
    this.jugadoresArgentina = [...this.jugadoresOriginales]
    this.posicionFiltrada = ''
    this.buscarJugador = ''
  }

  calcularPromedioEdad(){
    if (this.jugadoresArgentina.length === 0) {
      this.edadPromedio = 0
      return
    }

    let sumaEdades = 0

    this.jugadoresArgentina.forEach(jugador => {
      sumaEdades += jugador.edad
    });

    this.edadPromedio = sumaEdades / this.jugadoresArgentina.length
  }
}

