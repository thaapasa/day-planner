import { ISOTime } from './Time';

export interface Task {
  id: string;
  name: string;
  startTime: ISOTime;
  endTime: ISOTime;
  color: string;
  imageUrl?: string;
}

export interface Schedule {
  name: string;
  tasks: Task[];
}

export const schedule: Schedule = {
  name: 'Päivä',
  tasks: [
    {
      id: 't1',
      name: 'Aamutoimet',
      startTime: '07:00',
      endTime: '08:00',
      color: 'blue',
    },
    {
      id: 't2',
      name: 'Opiskelu',
      startTime: '08:00',
      endTime: '11:00',
      color: 'blue',
    },
    {
      id: 't3',
      name: 'Lounas',
      startTime: '11:00',
      endTime: '12:00',
      color: 'blue',
    },
    {
      id: 't4',
      name: 'Opiskelu',
      startTime: '12:00',
      endTime: '15:00',
      color: 'blue',
    },
    {
      id: 't5',
      name: 'Leikki',
      startTime: '15:00',
      endTime: '16:00',
      color: 'blue',
    },
    {
      id: 't6',
      name: 'Ulkoilu',
      startTime: '16:00',
      endTime: '18:00',
      color: 'blue',
    },
    {
      id: 't7',
      name: 'Päivällinen',
      startTime: '18:00',
      endTime: '19:00',
      color: 'blue',
    },
    {
      id: 't8',
      name: 'Iltatoimet',
      startTime: '19:00',
      endTime: '21:00',
      color: 'blue',
    },
  ],
};
