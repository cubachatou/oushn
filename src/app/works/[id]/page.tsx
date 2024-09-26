import BlockRenderer from "@/app/components/BlockRenderer";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import { sanityFetch } from "@/sanity/lib/client";
import type { Metadata } from "next";
import { WorkContent } from "../../../../shared/models";

async function getWork() {
  const query = `
    *[_type == "work" && slug.current == $id][0] {
      name,
      description,
      video {
        asset-> {
          playbackId,
          assetId,
          filename,
        }
      },
      content[]
      {
        ...,
        video {
          ...,
            asset-> {
              playbackId,
              assetId,
              filename,
            }
        },
      }
    }
  `;
  // const work = await client.fetch(query, { id });
  const work: WorkContent = await sanityFetch({
    query: query,
    tags: ["work"],
  });
  return work;
}

export const generateMetadata = async () => {
  const work: WorkContent = await getWork();
  return {
    title: work.name,
    description: work.description,
  };
};

export default async function WorkPage() {
  const work: WorkContent = await getWork();

  return (
    <>
      <VideoIntro playbackId={work.video.asset.playbackId} />

      <WhiteWrapperLayout className="pb-8">
        <IntroTextSection
          title={work.name}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam asperiores ut reiciendis voluptates. Quisquam provident vero perferendis quae libero quidem!"
        />

        <div>
          <BlockRenderer content={work.content} />
        </div>
      </WhiteWrapperLayout>
    </>
  );
}
