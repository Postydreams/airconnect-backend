import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePasajeroDto } from './dto/create-pasajero.dto';
import { Pasajero } from './entities/pasajero.entity';

@Injectable()
export class PasajerosService {

  private pasajeros: Pasajero[] = [];
  private id = 1;

  create(createPasajeroDto: CreatePasajeroDto) {
    const existe = this.pasajeros.find((a) => a.email === createPasajeroDto.email);
    if (existe) {
      throw new BadRequestException(
        `Ya existe un pasajero con el email "${createPasajeroDto.email}"`,
      );
    }
    const pasajero = new Pasajero(this.id++, createPasajeroDto.nombre, createPasajeroDto.apellido, createPasajeroDto.email);
    this.pasajeros.push(pasajero);
    return pasajero;
  }

  findAll() {
    return this.pasajeros;
  }

  findOne(id: number) {
    const pasajeroEncontrado = this.pasajeros.find(a => a.id === id);
    if (!pasajeroEncontrado) {
      throw new NotFoundException(`Pasajero con id ${id} no encontrado`);
    }
    return pasajeroEncontrado;
  }

  remove(id: number) {
    const index = this.pasajeros.findIndex(p => p.id === id);

    if (index === -1) {
      throw new NotFoundException(`Pasajero con id ${id} no encontrado`);
    }

    const eliminado = this.pasajeros.splice(index, 1); 
    return eliminado;
  }

}



