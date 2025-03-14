import { ContentItem } from "../../../../shared/models";

export default function BlockquoteBlock({ block }: { block: ContentItem }) {
  return (
    <>
      <div className="lg:px-24 px-8 xl:mb-16 mb-10">
        <div className="container">
          <div className="mx-auto prose prose-2xl">
            <blockquote>
              <p>{block.text}</p>
              <figcaption>{block.figcaption}</figcaption>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
