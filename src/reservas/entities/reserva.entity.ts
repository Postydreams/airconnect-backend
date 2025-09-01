import { Pasajero } from "src/pasajeros/entities/pasajero.entity";
import { Vuelo } from "src/vuelos/entities/vuelo.entity";
import { ApiProperty } from "@nestjs/swagger";


export class Reserva {
    @ApiProperty()
    id: number;

    @ApiProperty()
    codigoReserva: string;

    @ApiProperty()
    fechaReserva: Date;
    
    @ApiProperty()
    estado: string;
    
    @ApiProperty()
    pasajero: Pasajero;
    
    @ApiProperty()
    vuelo: Vuelo;
    constructor(
        id: number,
        codigoReserva: string,
        fechaReserva: Date,
        estado: string,
        pasajero: Pasajero,
        vuelo: Vuelo
    ){
        this.id = id;
        this.codigoReserva = codigoReserva;
        this.fechaReserva = fechaReserva;
        this.estado = estado;
        this.pasajero = pasajero;
        this.vuelo = vuelo;
    }
}
