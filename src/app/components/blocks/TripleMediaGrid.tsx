import Image from "next/image";
import {
  ContentItem,
  ExtendedSanityImageObject,
} from "../../../../shared/models";
import { urlFor } from "@/sanity/lib/image";

export default function TripleMediaGridBlock({
  block,
}: {
  block: ContentItem;
}) {
  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {block.mediaArray.map((image: ExtendedSanityImageObject) => {
            return (
              <div
                key={image.alt.toString()}
                className="relative"
                style={{ aspectRatio: image.aspectRatio }}
              >
                <Image
                  src={urlFor(image.asset._ref).url()}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
