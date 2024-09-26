import { urlFor } from "@/sanity/lib/image";
import Image from "next/legacy/image";
import {
  ContentItem,
  ExtendedSanityImageObject,
} from "../../../../shared/models";

export default function ShiftedDoubleMediaGridBlock({
  block,
}: {
  block: ContentItem;
}) {
  return (
    <div className="xl:mb-16 lg:mb-10 mb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 xl:gap-16 md:gap-8 gap-4">
          {block.mediaArray.map(
            (image: ExtendedSanityImageObject, index: number) => {
              return (
                <div
                  key={image.alt.toString()}
                  className={`relative ${index === 1 ? "md:mt-24" : ""}`}
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
            },
          )}
        </div>
      </div>
    </div>
  );
}
