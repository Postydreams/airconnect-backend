import { Aeropuerto } from "src/aeropuertos/entities/aeropuerto.entity";
import { ApiProperty } from "@nestjs/swagger";


export class Vuelo {
    @ApiProperty()
    id: number;

    @ApiProperty()
    numeroVuelo: string;

    @ApiProperty()
    fechaSalida: Date;
    
    @ApiProperty()
    duracionEstimada: number;
    
    @ApiProperty()
    origen: Aeropuerto;
    
    @ApiProperty()
    destino: Aeropuerto;
    
    @ApiProperty()
    estado: string;

    constructor(
        id: number,
        numeroVuelo: string,
        fechaSalida: Date,
        duracionEstimada: number,
        origen: Aeropuerto,
        destino: Aeropuerto,
        estado: string
    ){
        this.id = id;
        this.numeroVuelo = numeroVuelo;
        this.fechaSalida = fechaSalida;
        this.duracionEstimada = duracionEstimada;
        this.origen = origen;
        this.destino = destino;
        this.estado = estado;
    }
}
