import { ApiProperty } from "@nestjs/swagger";

export class CreatePasajeroDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    apellido: string;

    @ApiProperty()
    email: string;
}
