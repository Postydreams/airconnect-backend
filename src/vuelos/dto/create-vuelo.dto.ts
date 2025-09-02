import { ApiProperty } from "@nestjs/swagger";

export class CreateVueloDto {
  @ApiProperty()
  numeroVuelo: string;

  @ApiProperty()
  fechaSalida: Date;

  @ApiProperty()
  duracionEstimada: number;

  @ApiProperty()
  origen: string;
  
  @ApiProperty()
  destino: string;

  @ApiProperty()
  estado: string;
}
