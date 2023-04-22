import { Injectable } from '@nestjs/common';
import { Patient } from '../../models/patients.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patientModel: Model<Patient>,
  ) {}
  async findAll() {
    return this.patientModel.find();
  }
  async create(data: object) {
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

  async mock() {
    return this.patientModel.insertMany([
      {
        first_name: 'Pearce',
        last_name: 'Kiffe',
        date_of_birth: '2022-02-22T04:02:23Z',
        gender: 2,
        contact_info: 'in consequat ut nulla sed accumsan felis ut at dolor',
        medical_history:
          'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien',
      },
      {
        first_name: 'Vally',
        last_name: 'Scarse',
        date_of_birth: '2022-07-20T00:03:48Z',
        gender: 1,
        contact_info:
          'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit',
        medical_history:
          'in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut',
      },
      {
        first_name: 'Dell',
        last_name: 'Kilfedder',
        date_of_birth: '2021-10-31T00:58:50Z',
        gender: 1,
        contact_info:
          'primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra',
        medical_history:
          'accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut',
      },
      {
        first_name: 'Hettie',
        last_name: 'Cannell',
        date_of_birth: '2021-12-05T13:33:00Z',
        gender: 1,
        contact_info:
          'imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
        medical_history:
          'nisl venenatis lacinia aenean sit amet justo morbi ut odio',
      },
      {
        first_name: 'Sharity',
        last_name: 'Brew',
        date_of_birth: '2021-01-19T11:55:03Z',
        gender: 1,
        contact_info:
          'in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius',
        medical_history:
          'vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet',
      },
      {
        first_name: 'Luce',
        last_name: 'Titherington',
        date_of_birth: '2021-10-03T21:10:56Z',
        gender: 2,
        contact_info:
          'ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla',
        medical_history:
          'metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula',
      },
      {
        first_name: 'Susann',
        last_name: 'Mulliss',
        date_of_birth: '2021-03-30T14:42:52Z',
        gender: 2,
        contact_info:
          'vel accumsan tellus nisi eu orci mauris lacinia sapien quis',
        medical_history:
          'pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna',
      },
      {
        first_name: 'Alleen',
        last_name: 'Mitchiner',
        date_of_birth: '2021-03-28T08:21:51Z',
        gender: 1,
        contact_info:
          'duis consequat dui nec nisi volutpat eleifend donec ut dolor',
        medical_history:
          'maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet',
      },
      {
        first_name: 'Riobard',
        last_name: 'Lowdeane',
        date_of_birth: '2022-07-11T06:39:07Z',
        gender: 1,
        contact_info:
          'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
        medical_history:
          'lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis',
      },
      {
        first_name: 'Bevon',
        last_name: 'Donaghy',
        date_of_birth: '2022-01-26T04:22:21Z',
        gender: 2,
        contact_info:
          'sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est',
        medical_history:
          'eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh',
      },
      {
        first_name: 'Adella',
        last_name: 'Scadding',
        date_of_birth: '2021-09-06T22:04:07Z',
        gender: 1,
        contact_info:
          'pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat',
        medical_history:
          'non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante',
      },
      {
        first_name: 'Red',
        last_name: 'Albone',
        date_of_birth: '2023-03-22T14:33:33Z',
        gender: 1,
        contact_info:
          'phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean',
        medical_history:
          'et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet',
      },
      {
        first_name: 'Agnese',
        last_name: 'Gilyott',
        date_of_birth: '2022-02-11T07:22:10Z',
        gender: 2,
        contact_info:
          'nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo',
        medical_history:
          'pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi',
      },
      {
        first_name: 'Roland',
        last_name: 'Gomes',
        date_of_birth: '2022-03-27T09:46:53Z',
        gender: 2,
        contact_info:
          'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis',
        medical_history:
          'justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas',
      },
      {
        first_name: 'Amil',
        last_name: 'Hordle',
        date_of_birth: '2022-12-11T23:40:21Z',
        gender: 2,
        contact_info:
          'ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus',
        medical_history:
          'sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim',
      },
      {
        first_name: 'Arley',
        last_name: 'Bourne',
        date_of_birth: '2021-10-21T18:48:49Z',
        gender: 2,
        contact_info:
          'felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis',
        medical_history:
          'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia',
      },
      {
        first_name: 'Ashlie',
        last_name: 'Sarsfield',
        date_of_birth: '2022-07-28T12:10:59Z',
        gender: 2,
        contact_info:
          'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis',
        medical_history:
          'risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus',
      },
      {
        first_name: 'Maury',
        last_name: 'Franzewitch',
        date_of_birth: '2022-06-08T04:14:42Z',
        gender: 1,
        contact_info:
          'nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit',
        medical_history:
          'donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis',
      },
      {
        first_name: 'Vonny',
        last_name: 'MacKniely',
        date_of_birth: '2022-01-04T19:54:18Z',
        gender: 2,
        contact_info:
          'urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi',
        medical_history:
          'quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
      },
      {
        first_name: 'Gail',
        last_name: 'Ubach',
        date_of_birth: '2021-07-02T23:55:10Z',
        gender: 1,
        contact_info:
          'tellus in sagittis dui vel nisl duis ac nibh fusce lacus',
        medical_history:
          'eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam',
      },
      {
        first_name: 'Estelle',
        last_name: 'Mandrier',
        date_of_birth: '2021-07-10T17:30:10Z',
        gender: 1,
        contact_info:
          'ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas',
        medical_history:
          'sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis',
      },
      {
        first_name: 'Bourke',
        last_name: 'Gwyther',
        date_of_birth: '2021-03-14T14:56:42Z',
        gender: 1,
        contact_info:
          'semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio',
        medical_history:
          'sit amet lobortis sapien sapien non mi integer ac neque',
      },
      {
        first_name: 'Shanie',
        last_name: 'Fawlks',
        date_of_birth: '2021-02-27T10:12:09Z',
        gender: 2,
        contact_info:
          'nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi',
        medical_history:
          'id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue',
      },
      {
        first_name: 'Rozanne',
        last_name: 'Yoxen',
        date_of_birth: '2022-10-08T12:54:56Z',
        gender: 1,
        contact_info:
          'tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit',
        medical_history:
          'dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at',
      },
      {
        first_name: 'Kirstin',
        last_name: "O'Donegan",
        date_of_birth: '2021-03-10T07:04:05Z',
        gender: 1,
        contact_info:
          'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus',
        medical_history:
          'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra',
      },
      {
        first_name: 'Arvin',
        last_name: 'Divina',
        date_of_birth: '2022-06-29T06:31:49Z',
        gender: 2,
        contact_info:
          'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus',
        medical_history:
          'vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat',
      },
      {
        first_name: 'Francklyn',
        last_name: 'Strother',
        date_of_birth: '2021-04-20T07:23:01Z',
        gender: 2,
        contact_info:
          'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut',
        medical_history:
          'eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      },
      {
        first_name: 'Abbott',
        last_name: 'Saffrin',
        date_of_birth: '2023-04-15T05:37:52Z',
        gender: 2,
        contact_info:
          'purus eu magna vulputate luctus cum sociis natoque penatibus et magnis',
        medical_history:
          'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
      },
      {
        first_name: 'Joannes',
        last_name: 'Nyles',
        date_of_birth: '2021-06-15T03:04:55Z',
        gender: 1,
        contact_info:
          'cras pellentesque volutpat dui maecenas tristique est et tempus semper',
        medical_history:
          'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices',
      },
      {
        first_name: 'Basia',
        last_name: 'Donisthorpe',
        date_of_birth: '2021-10-05T19:27:34Z',
        gender: 1,
        contact_info:
          'vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat',
        medical_history:
          'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus',
      },
      {
        first_name: 'Rustin',
        last_name: 'Ambrose',
        date_of_birth: '2021-03-09T02:54:38Z',
        gender: 2,
        contact_info:
          'accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam',
        medical_history:
          'at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi',
      },
      {
        first_name: 'Jermaine',
        last_name: 'Liebrecht',
        date_of_birth: '2021-06-10T21:32:57Z',
        gender: 2,
        contact_info:
          'iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget',
        medical_history:
          'urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam',
      },
      {
        first_name: 'Emmi',
        last_name: 'Gaize',
        date_of_birth: '2021-09-05T03:03:43Z',
        gender: 1,
        contact_info:
          'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate',
        medical_history:
          'tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet',
      },
      {
        first_name: 'Lucia',
        last_name: "O'Dea",
        date_of_birth: '2021-03-17T20:35:26Z',
        gender: 2,
        contact_info:
          'viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est',
        medical_history:
          'vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien',
      },
      {
        first_name: 'Alexio',
        last_name: 'Franiak',
        date_of_birth: '2023-02-24T08:41:43Z',
        gender: 2,
        contact_info:
          'praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada',
        medical_history:
          'ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
      },
      {
        first_name: 'Chrystal',
        last_name: 'Athelstan',
        date_of_birth: '2022-08-17T22:47:20Z',
        gender: 2,
        contact_info:
          'amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec',
        medical_history:
          'volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse',
      },
      {
        first_name: 'Miller',
        last_name: 'Hadfield',
        date_of_birth: '2022-07-31T11:47:21Z',
        gender: 2,
        contact_info:
          'mi in porttitor pede justo eu massa donec dapibus duis at velit',
        medical_history:
          'turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis',
      },
      {
        first_name: 'Benedicta',
        last_name: 'Van Der Weedenburg',
        date_of_birth: '2022-11-10T13:52:49Z',
        gender: 2,
        contact_info:
          'volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium',
        medical_history:
          'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a',
      },
      {
        first_name: 'Emlen',
        last_name: 'Gawen',
        date_of_birth: '2022-08-13T07:31:02Z',
        gender: 1,
        contact_info:
          'tempus vivamus in felis eu sapien cursus vestibulum proin eu',
        medical_history:
          'duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui',
      },
      {
        first_name: 'Jordan',
        last_name: 'Tofts',
        date_of_birth: '2022-09-09T02:44:39Z',
        gender: 1,
        contact_info:
          'diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus',
        medical_history:
          'sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque',
      },
      {
        first_name: 'Alberto',
        last_name: 'Bridell',
        date_of_birth: '2021-03-18T06:45:53Z',
        gender: 2,
        contact_info:
          'tristique in tempus sit amet sem fusce consequat nulla nisl nunc',
        medical_history:
          'ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor',
      },
      {
        first_name: 'Xavier',
        last_name: 'Ricold',
        date_of_birth: '2022-02-07T18:19:50Z',
        gender: 2,
        contact_info:
          'ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur',
        medical_history:
          'nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique',
      },
      {
        first_name: 'Lolly',
        last_name: 'Spriggin',
        date_of_birth: '2022-03-22T08:46:07Z',
        gender: 1,
        contact_info:
          'ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam',
        medical_history:
          'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam',
      },
      {
        first_name: 'Bobbi',
        last_name: 'Blonden',
        date_of_birth: '2021-04-16T22:56:32Z',
        gender: 1,
        contact_info:
          'elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit',
        medical_history:
          'morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet',
      },
      {
        first_name: 'Elwira',
        last_name: 'Korf',
        date_of_birth: '2021-05-07T08:28:36Z',
        gender: 1,
        contact_info:
          'velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam',
        medical_history:
          'odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer',
      },
      {
        first_name: 'Nessa',
        last_name: 'Gentil',
        date_of_birth: '2022-03-28T23:23:08Z',
        gender: 2,
        contact_info:
          'convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien',
        medical_history:
          'quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam',
      },
      {
        first_name: 'Tabatha',
        last_name: 'Mason',
        date_of_birth: '2023-01-12T10:15:03Z',
        gender: 2,
        contact_info:
          'erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus',
        medical_history:
          'parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
      },
      {
        first_name: 'Friederike',
        last_name: 'McGeachy',
        date_of_birth: '2023-03-05T17:48:22Z',
        gender: 2,
        contact_info:
          'nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam',
        medical_history:
          'platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam',
      },
      {
        first_name: 'Adams',
        last_name: 'Moores',
        date_of_birth: '2021-01-12T09:22:25Z',
        gender: 1,
        contact_info:
          'nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet',
        medical_history:
          'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec',
      },
      {
        first_name: 'Alfonso',
        last_name: 'Edwardes',
        date_of_birth: '2022-02-16T14:48:11Z',
        gender: 1,
        contact_info:
          'non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque',
        medical_history:
          'in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus',
      },
      {
        first_name: 'Batholomew',
        last_name: 'Ayton',
        date_of_birth: '2021-09-19T19:14:28Z',
        gender: 2,
        contact_info:
          'tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
        medical_history:
          'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus',
      },
      {
        first_name: 'Serene',
        last_name: 'Lyston',
        date_of_birth: '2022-06-07T21:28:56Z',
        gender: 2,
        contact_info:
          'curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam',
        medical_history:
          'nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac',
      },
      {
        first_name: 'Darcie',
        last_name: 'Bischop',
        date_of_birth: '2021-11-01T12:33:15Z',
        gender: 1,
        contact_info:
          'nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa',
        medical_history:
          'phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie',
      },
      {
        first_name: 'Beltran',
        last_name: 'Bischof',
        date_of_birth: '2022-05-31T00:14:50Z',
        gender: 1,
        contact_info:
          'aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut',
        medical_history:
          'diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu',
      },
      {
        first_name: 'Susanna',
        last_name: 'Gai',
        date_of_birth: '2021-10-15T19:57:54Z',
        gender: 2,
        contact_info:
          'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam',
        medical_history:
          'odio cras mi pede malesuada in imperdiet et commodo vulputate',
      },
      {
        first_name: 'Arlana',
        last_name: 'Ellick',
        date_of_birth: '2023-03-04T18:39:53Z',
        gender: 2,
        contact_info:
          'ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo',
        medical_history:
          'nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris',
      },
      {
        first_name: 'Nerita',
        last_name: 'Moles',
        date_of_birth: '2021-10-30T14:09:28Z',
        gender: 2,
        contact_info:
          'odio consequat varius integer ac leo pellentesque ultrices mattis odio donec',
        medical_history: 'ac nulla sed vel enim sit amet nunc viverra dapibus',
      },
      {
        first_name: 'Dante',
        last_name: 'Songist',
        date_of_birth: '2021-12-28T13:37:04Z',
        gender: 2,
        contact_info:
          'hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum',
        medical_history:
          'sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum',
      },
      {
        first_name: 'Skip',
        last_name: 'Jeroch',
        date_of_birth: '2022-09-06T13:58:59Z',
        gender: 2,
        contact_info:
          'nam congue risus semper porta volutpat quam pede lobortis ligula sit',
        medical_history:
          'morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus',
      },
      {
        first_name: 'Dosi',
        last_name: 'Peggrem',
        date_of_birth: '2021-06-02T12:02:29Z',
        gender: 1,
        contact_info:
          'et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante',
        medical_history:
          'odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue',
      },
    ]);
  }
}
