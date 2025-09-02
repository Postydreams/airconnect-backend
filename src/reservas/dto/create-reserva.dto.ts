import { ApiProperty } from "@nestjs/swagger";

export class CreateReservaDto {
  @ApiProperty()
  vueloId: number;

  @ApiProperty()
  pasajeroId: number;

  @ApiProperty()
  estado: string;
}
