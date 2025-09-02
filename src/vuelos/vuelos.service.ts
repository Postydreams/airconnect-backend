import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVueloDto } from './dto/create-vuelo.dto';
import { UpdateVueloDto } from './dto/update-vuelo.dto';
import { Vuelo } from './entities/vuelo.entity';
import { AeropuertosService } from 'src/aeropuertos/aeropuertos.service';

@Injectable()
export class VuelosService {
  private vuelos: Vuelo[] = [];
  private id = 1;

  constructor(private readonly aeropuertosService: AeropuertosService) { }

  create(createVueloDto: CreateVueloDto) {
    const origenExiste = this.aeropuertosService.findAll().some(a => a.codigo === createVueloDto.origen);

    if (!origenExiste) {
      throw new NotFoundException(
        `El aeropuerto de origen con código "${createVueloDto.origen}" no existe`,
      );
    }

    const destinoExiste = this.aeropuertosService.findAll().some(a => a.codigo === createVueloDto.destino);

    if (!destinoExiste) {
      throw new NotFoundException(
        `El aeropuerto de destino con código "${createVueloDto.destino}" no existe`,
      );
    }

    const vuelo = new Vuelo(
      this.id++,
      createVueloDto.numeroVuelo,
      new Date(createVueloDto.fechaSalida),
      createVueloDto.duracionEstimada,
      createVueloDto.origen,
      createVueloDto.destino,
      createVueloDto.estado,
    );

    this.vuelos.push(vuelo);
    return vuelo;
  }

  findAll(filtroOrigen?: string, filtroEstado?: string) {
    let resultados = this.vuelos;

    if (filtroOrigen) {
      resultados = resultados.filter(v => v.origen === filtroOrigen);
    }

    if (filtroEstado) {
      resultados = resultados.filter(v => v.estado === filtroEstado);
    }

    return resultados;
  }

  findOne(id: number) {
    const vuelo = this.vuelos.find(v => v.id === id);
    if (!vuelo) {
      throw new NotFoundException(`Vuelo con id ${id} no encontrado`);
    }
    return vuelo;
  }

  update(id: number, updateVueloDto: UpdateVueloDto) {
    const vuelo = this.findOne(id);
    vuelo.estado = updateVueloDto.estado;
    return vuelo;
  }
}
