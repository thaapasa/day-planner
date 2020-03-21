import { Entry } from 'contentful';
import { ISOTime } from './Time';
import { Colors } from 'app/ui/Colors';

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
  color: keyof typeof Colors;
  startTime?: ISOTime;
  endTime?: ISOTime;
  image?: Entry<CmsImage>;
}

export interface CmsSchedule {
  name: string;
  tasks: Entry<CmsTask>[];
}
