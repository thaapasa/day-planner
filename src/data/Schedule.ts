import { ISOTime } from './Time';

export interface Task {
  id: string;
  name: string;
  startTime: ISOTime;
  endTime: ISOTime;
  color?: string;
  imageUrl?: string;
}

export interface Schedule {
  name: string;
  tasks: Task[];
}
