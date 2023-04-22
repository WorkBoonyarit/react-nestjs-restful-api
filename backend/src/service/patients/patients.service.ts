import { Injectable } from '@nestjs/common';
import { Patient } from '../../models/patients.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PatientsDto } from 'src/common/interfaces/patients.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}
  async findAll() {
    return this.patientModel.find();
  }
  async create(data: PatientsDto) {
    return this.patientModel.create(data);
  }
  async findById(id: string) {
    return this.patientModel.findById(id);
  }
  async updateOneById(id: string, data: object) {
    return this.patientModel.updateOne({ _id: id }, data);
  }
  async deleteOneById(id: string) {
    return this.patientModel.deleteOne({ _id: id });
  }
}
