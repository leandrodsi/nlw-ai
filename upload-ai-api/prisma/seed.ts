import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.prompt.deleteMany();

  await prisma.prompt.create({
    data: {
      title: "YouTube Title",
      template: `Your task is to generate three titles for a YouTube video.

Below, you'll receive a transcription of this video; use this transcription to generate the titles.
You'll also receive a list of titles below; use this list as a reference for the titles to be generated.

Titles should be no more than 60 characters.
Titles should be catchy and appealing to maximize clicks.

Return ONLY the three titles in a list format as in the example below:
'''
- Title 1
- Title 2
- Title 3
'''

Transcription:
'''
{transcription}
'''`.trim(),
    },
  });

  await prisma.prompt.create({
    data: {
      title: "YouTube Description",
      template:
        `Your task is to generate a concise description for a YouTube video.
  
Below, you'll receive a transcription of this video; use this transcription to generate the description.

The description should have no more than 80 words in the first person, containing the video's main points.

Use catchy words that captivate the reader's attention.

Also, at the end of the description, include a list of 3 to 10 hashtags in lowercase containing the video's keywords.

The return should follow the format below:
'''
Description.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcription:
'''
{transcription}
'''`.trim(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
