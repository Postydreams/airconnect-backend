import { ApiProperty } from "@nestjs/swagger";

export class Aeropuerto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    codigo: string;

    @ApiProperty()
    ciudad: string;

    constructor(
        id: number,
        nombre: string,
        codigo: string,
        ciudad: string
    ) {
        this.id = id;
        this.nombre = nombre;
        this.codigo = codigo;
        this.ciudad = ciudad;
    }
}
