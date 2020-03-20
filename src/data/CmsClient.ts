import { createClient, Entry } from 'contentful/dist/contentful.browser.min.js';
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
} from 'react-native-dotenv';
import { CmsSchedule, CmsTask } from './CmsTypes';

const space = CONTENTFUL_SPACE_ID ?? 'space-id-missing';

class CmsClient {
  private client = createClient({
    space,
    accessToken: CONTENTFUL_ACCESS_TOKEN ?? 'access-token-missing',
  });

  getSchedule = async () => {
    const data = await this.client.getEntries<CmsSchedule>({
      content_type: 'schedule',
    });
    console.log('Got data from contentful:', data.items.map(toSchedule));
  };
}

function toSchedule(data: Entry<CmsSchedule>) {
  return {
    name: data.fields?.name ?? 'Nimetön',
    tasks: (data.fields?.tasks ?? []).map(toTask),
  };
}

function toTask(data: Entry<CmsTask>) {
  console.log('image', data.fields.image?.fields);
}

export const cmsClient = new CmsClient();
