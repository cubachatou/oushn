import { ContentItem } from "../../../shared/models";
import BlockquoteBlock from "./blocks/Blockquote";
import CreditsBlock from "./blocks/Credits";
import DoubleMediaGridBlock from "./blocks/DoubleMediaGrid";
import RichTextBlock from "./blocks/RichText";
import ShiftedDoubleMediaGridBlock from "./blocks/ShiftedDoubleMediaGrid";
import SingleMediaBlock from "./blocks/SingleMedia";
import TripleMediaGridBlock from "./blocks/TripleMediaGrid";
import VideoBlock from "./blocks/Video";

export default function BlockRenderer({ content }: { content: ContentItem[] }) {
  return (
    <>
      {content.map((block) => {
        switch (block._type) {
          case "video":
            return <VideoBlock key={block._key} block={block} />;
          case "single-media":
            return <SingleMediaBlock key={block._key} block={block} />;
          case "double-media-grid":
            return <DoubleMediaGridBlock key={block._key} block={block} />;
          case "triple-media-grid":
            return <TripleMediaGridBlock key={block._key} block={block} />;
          case "shifted-double-media-grid":
            return (
              <ShiftedDoubleMediaGridBlock key={block._key} block={block} />
            );
          case "blockquote":
            return <BlockquoteBlock key={block._key} block={block} />;
          case "reach-text":
            return <RichTextBlock key={block._key} block={block} />;
          case "credits":
            return <CreditsBlock key={block._key} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
