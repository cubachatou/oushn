import { urlFor } from "@/sanity/lib/image";
import {
  ContentItem,
  ExtendedSanityImageObject,
} from "../../../../shared/models";
import Image from "next/image";

export default function DoubleMediaGridBlock({
  block,
}: {
  block: ContentItem;
}) {
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
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
    </section>
  );
}
