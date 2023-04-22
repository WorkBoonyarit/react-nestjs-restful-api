import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema({
  collection: 'patients',
})
export class Patient {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop()
  date_of_birth: Date;
  @Prop()
  gender: number;
  @Prop()
  contact_info: string;
  @Prop()
  medical_history: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
