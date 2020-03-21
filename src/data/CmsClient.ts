import { createClient, Entry } from 'contentful/dist/contentful.browser.min.js';
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
} from 'react-native-dotenv';
import { CmsSchedule, CmsTask } from './CmsTypes';
import { Task, Schedule } from './Schedule';
import { Colors } from 'app/ui/Colors';

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
  const color = data.fields?.color;
  return {
    id: data.sys.id,
    startTime: toISOTime(data.fields?.startTime) ?? '08:00',
    endTime: toISOTime(data.fields?.endTime) ?? '16:00',
    name: data.fields?.name ?? 'Juttu',
    color: Colors[color],
    imageUrl: imageUrl ? 'https:' + imageUrl : undefined,
  };
}

function toISOTime(time?: string) {
  if (!time) {
    return;
  }
  const [hours, minutes] = time.split(':', 2);
  return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
}

export const cmsClient = new CmsClient();
