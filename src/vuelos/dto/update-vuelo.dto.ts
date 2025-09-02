import { ApiProperty } from "@nestjs/swagger";

export class UpdateVueloDto {
  @ApiProperty()
  estado: string;
}
