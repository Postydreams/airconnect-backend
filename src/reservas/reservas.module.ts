import { Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { VuelosModule } from 'src/vuelos/vuelos.module';
import { PasajerosModule } from 'src/pasajeros/pasajeros.module';

@Module({
  imports: [VuelosModule, PasajerosModule],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
