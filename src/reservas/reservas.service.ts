import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';
import { Reserva } from './entities/reserva.entity';
import { VuelosService } from 'src/vuelos/vuelos.service';
import { PasajerosService } from 'src/pasajeros/pasajeros.service';

@Injectable()
export class ReservasService {
  private reservas: Reserva[] = [];
  private idCounter = 1;

  constructor(
    private readonly vuelosService: VuelosService,
    private readonly pasajerosService: PasajerosService,
  ) { }

  create(dto: CreateReservaDto) {
    const vuelo = this.vuelosService.findOne(dto.vueloId);
    if (!vuelo) throw new NotFoundException(`Vuelo con id ${dto.vueloId} no encontrado`);

    const pasajero = this.pasajerosService.findOne(dto.pasajeroId);
    if (!pasajero) throw new NotFoundException(`Pasajero con id ${dto.pasajeroId} no encontrado`);

    const reserva = new Reserva(this.idCounter++, dto.vueloId, dto.pasajeroId, dto.estado);
    this.reservas.push(reserva);
    return reserva;
  }

  findAll(filtroPasajeroId?: number) {
    let resultados = this.reservas;
    if (filtroPasajeroId) {
      resultados = resultados.filter(r => r.pasajeroId === filtroPasajeroId);
    }
    return resultados;
  }

  findOne(id: number) {
    const reserva = this.reservas.find(r => r.id === id);
    if (!reserva) throw new NotFoundException(`Reserva con id ${id} no encontrada`);
    return reserva;
  }

  update(id: number, dto: UpdateReservaDto) {
    const reserva = this.findOne(id);
    reserva.estado = dto.estado;
    return reserva;
  }

  remove(id: number) {
    const index = this.reservas.findIndex(r => r.id === id);
    if (index === -1) throw new NotFoundException(`Reserva con id ${id} no encontrada`);
    return this.reservas.splice(index, 1)[0];
  }
}
