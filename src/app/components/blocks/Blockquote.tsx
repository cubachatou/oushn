import { ContentItem } from "../../../../shared/models";

export default function BlockquoteBlock({ block }: { block: ContentItem }) {
  return (
    <div className="container prose prose-2xl">
      <blockquote>
        <p>{block.text}</p>
        <figcaption>{block.figcaption}</figcaption>
      </blockquote>
    </div>
  );
}
