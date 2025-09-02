import { ApiProperty } from "@nestjs/swagger";

export class Reserva {
    @ApiProperty()
    id: number;

    @ApiProperty()
    vueloId: number;

    @ApiProperty()
    pasajeroId: number;

    @ApiProperty()
    estado: string;

    constructor(
        id: number,
        vueloId: number,
        pasajeroId: number,
        estado: string
    ) {
        this.id = id;
        this.vueloId = vueloId;
        this.pasajeroId = pasajeroId;
        this.estado = estado;
    }
}
