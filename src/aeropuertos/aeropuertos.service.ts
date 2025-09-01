import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAeropuertoDto } from './dto/create-aeropuerto.dto';
import { Aeropuerto } from './entities/aeropuerto.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AeropuertosService {

  private aeropuertos: Aeropuerto[] = [];
  private id = 1;

  create(createAeropuertoDto: CreateAeropuertoDto) {
    const existe = this.aeropuertos.find((a) => a.codigo === createAeropuertoDto.codigo);
    if (existe) {
      throw new BadRequestException(
        `Ya existe un aeropuerto con el código "${createAeropuertoDto.codigo}"`,
      );
    }
    const aeropuerto = new Aeropuerto(this.id++, createAeropuertoDto.nombre, createAeropuertoDto.codigo, createAeropuertoDto.ciudad);
    this.aeropuertos.push(aeropuerto);
    return aeropuerto;
  }

  findAll() {
    return this.aeropuertos;
  }

  findOne(id: number) {
    const aeropuertoEncontrado = this.aeropuertos.find(a => a.id === id);
    if (!aeropuertoEncontrado) {
      throw new NotFoundException(`Aeropuerto con id ${id} no encontrado`);
    }
    return aeropuertoEncontrado;
  }
}
