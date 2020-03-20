import { Entry } from 'contentful';
import { ISOTime } from './Time';

export interface CmsImage {
  file: {
    contentType: string;
    details: {
      size: number;
    };
    fileName: string;
    url: string;
    title: string;
  };
  title: string;
}

export interface CmsTask {
  name: string;
  color: string;
  startTime?: ISOTime;
  endTime?: ISOTime;
  image?: Entry<CmsImage>;
}

export interface CmsSchedule {
  name: string;
  tasks: Entry<CmsTask>[];
}
