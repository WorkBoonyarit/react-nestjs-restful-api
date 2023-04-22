import { IsDate, IsDateString, IsNumber, IsString } from 'class-validator';

export class PatientsDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsDateString()
  date_of_birth: Date;

  @IsNumber()
  gender: number;

  @IsString()
  contact_info: string;

  @IsString()
  medical_history: string;
}
