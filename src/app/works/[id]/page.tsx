import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface WorkProps {
  params: {
    id: string;
  };
}

async function getWork(id: string) {
  const query = `
    *[_type == "work" && slug.current == $id][0] {
      name,
      "src": image.asset._ref
    }
  `;
  const work = await client.fetch(query, { id });
  return work;
}

export default async function WorkPage({ params }: WorkProps) {
  const work = await getWork(params.id);

  return (
    <WhiteWrapperLayout>
      <section className="pb-8">
        <div className="container">
          <div className="flex flex-col items-center lg:gap-32 sm:gap-24 gap-16">
            <figure className="flex flex-col items-center text-center gap-4">
              <div className="overflow-hidden relative w-full aspect-[1612] group">
                <Image src={urlFor(work.src).url()} alt="" width={480} height={360} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <figcaption>
                <h3 className="lg:h3 md:h4 h3 text-dark-terra-cotta">{work.name}</h3>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </WhiteWrapperLayout>
  );
}