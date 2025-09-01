import { ApiProperty } from "@nestjs/swagger";

export class Pasajero {
    @ApiProperty()
    id: number;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    apellido: string;

    @ApiProperty()
    email: string;

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        email: string
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}
