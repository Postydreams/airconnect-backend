import { ApiProperty } from "@nestjs/swagger";

export class UpdateReservaDto {
  @ApiProperty()
  estado: string;
}
