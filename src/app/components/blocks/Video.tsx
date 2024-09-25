import { ContentItem } from "../../../../shared/models";
import Video from "next-video";

export default function VideoBlock({ block }: { block: ContentItem }) {
  return (
    <>
      <div className="xl:mb-16 lg:mb-10 mb-8">
        <div className="container">
          <Video playbackId={block.video.asset.playbackId} />
        </div>
      </div>
    </>
  );
}
