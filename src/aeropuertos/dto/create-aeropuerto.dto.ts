import { ApiProperty } from "@nestjs/swagger";

export class CreateAeropuertoDto {
    @ApiProperty()
    nombre: string;

    @ApiProperty()
    codigo: string;

    @ApiProperty()
    ciudad: string;
}
