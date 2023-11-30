import { Ticket } from '../models/ticket';
import { MAJOR } from '../models/ticket';
import { ELEVES_MOCK } from './eleve.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Lille',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: MAJOR.Option1,
    archived: false,
    eleve: ELEVES_MOCK[0],
    eleveID: 1,
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: MAJOR.Option2,
    archived:true,
    eleve: ELEVES_MOCK[1],
    eleveID: 2,
  },
];
