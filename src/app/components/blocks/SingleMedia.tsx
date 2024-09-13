import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { ContentItem } from "../../../../shared/models";

export default function SingleMediaBlock({ block }: { block: ContentItem }) {
  return (
    <>
      <section className="py-16">
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
      </section>
    </>
  );
}
