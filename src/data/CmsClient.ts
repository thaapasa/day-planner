import { createClient, Entry } from 'contentful/dist/contentful.browser.min.js';
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
} from 'react-native-dotenv';
import { CmsSchedule, CmsTask } from './CmsTypes';
import { Task, Schedule } from './Schedule';

const space = CONTENTFUL_SPACE_ID ?? 'space-id-missing';

class CmsClient {
  private client = createClient({
    space,
    accessToken: CONTENTFUL_ACCESS_TOKEN ?? 'access-token-missing',
  });

  getSchedule = async (): Promise<Schedule | undefined> => {
    const data = await this.client.getEntries<CmsSchedule>({
      content_type: 'schedule',
    });
    return data.items.length > 0 ? toSchedule(data.items[0]) : undefined;
  };
}

function toSchedule(data: Entry<CmsSchedule>): Schedule {
  return {
    name: data.fields?.name ?? 'Nimetön',
    tasks: (data.fields?.tasks ?? []).map(toTask),
  };
}

function toTask(data: Entry<CmsTask>): Task {
  const imageUrl = data.fields?.image?.fields?.file?.url;
  return {
    id: data.sys.id,
    startTime: data.fields?.startTime ?? '08:00',
    endTime: data.fields?.endTime ?? '16:00',
    name: data.fields?.name ?? 'Juttu',
    color: data.fields?.color ?? 'blue',
    imageUrl: imageUrl ? 'https:' + imageUrl : undefined,
  };
}

export const cmsClient = new CmsClient();
