import { createClient } from 'contentful/dist/contentful.browser.min.js';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from 'react-native-dotenv';

class CmsClient {
  private readonly client = createClient({
    space: CONTENTFUL_SPACE_ID ?? "space-id-missing",
    accessToken: CONTENTFUL_ACCESS_TOKEN ?? "access-token-missing"
  });

  getSchedule = async () => {
    const data = await this.client.getEntries({ content_type: "schedule" });
    console.log("Got data from contentful:", data)
  }

}

export const cmsClient = new CmsClient()
