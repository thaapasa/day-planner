import {ISOTime} from './Time';

export interface Task {
  id: string;
  title: string;
  startTime: ISOTime;
  endTime: ISOTime;
}

export interface Schedule {
  tasks: Task[];
}

export const schedule: Schedule = {
  tasks: [
    {id: 't1', title: 'Aamutoimet', startTime: '07:00', endTime: '08:00'},
    {id: 't2', title: 'Opiskelu', startTime: '08:00', endTime: '11:00'},
    {id: 't3', title: 'Lounas', startTime: '11:00', endTime: '12:00'},
    {id: 't4', title: 'Opiskelu', startTime: '12:00', endTime: '15:00'},
    {id: 't5', title: 'Leikki', startTime: '15:00', endTime: '16:00'},
    {id: 't6', title: 'Ulkoilu', startTime: '16:00', endTime: '18:00'},
    {id: 't7', title: 'Päivällinen', startTime: '18:00', endTime: '19:00'},
    {id: 't8', title: 'Iltatoimet', startTime: '19:00', endTime: '21:00'},
  ],
};
