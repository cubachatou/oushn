import { ContentItem } from "../../../../shared/models";
import Video from "next-video";

export default function VideoBlock({ block }: { block: ContentItem }) {
  return (
    <>
      <section className="py-16">
        <div className="container">
          <Video playbackId={block.video.asset.playbackId} />
        </div>
      </section>
    </>
  );
}
