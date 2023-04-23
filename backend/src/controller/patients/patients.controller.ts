import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { PatientsDto } from 'src/common/interfaces/patients.dto';
import { PatientsService } from 'src/service/patients/patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private patientsService: PatientsService) {}
  @Get()
  async findAll(@Query() query: any) {
    return await this.patientsService.findAll(query.select);
  }
  @Post()
  async create(@Body() body: object) {
    return await this.patientsService.create(body);
  }
  @Post('mock')
  async mock() {
    return await this.patientsService.mock();
  }
  @Get(':id')
  async findById(@Param() params: any) {
    return await this.patientsService.findById(params.id);
  }
  @Put(':id')
  async updateOneById(@Param() params: any, @Body() body: object) {
    return await this.patientsService.updateOneById(params.id, body);
  }
  @Delete(':id')
  async deleteOneById(@Param() params: any) {
    return await this.patientsService.deleteOneById(params.id);
  }
}
