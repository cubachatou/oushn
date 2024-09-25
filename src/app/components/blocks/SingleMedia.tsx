import { urlFor } from "@/sanity/lib/image";
import Image from "next/legacy/image";
import { ContentItem } from "../../../../shared/models";

export default function SingleMediaBlock({ block }: { block: ContentItem }) {
  return (
    <>
      <div className="xl:mb-16 lg:mb-10 mb-8">
        <div className="container">
          <div
            className="relative"
            style={{ aspectRatio: block.image.aspectRatio }}
          >
            <Image
              src={urlFor(block.image.asset._ref).url()}
              alt={block.image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
