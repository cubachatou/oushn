import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhiteWrapperLayout from "../layouts/white-wrapper";
import { Work } from "../../../shared/models";
async function getWorks() {
  const query = `
  *[_type == "work"] | order(_createdAt desc) {
    name,
    "currentSlug": slug.current,
    "src": image.asset._ref
  }`;

  const works: Work[] = await sanityFetch({
    query: query,
    tags: ["work"],
  });

  return works;
}
//
export const metadata: Metadata = {
  title: "Work",
  description: "Selected works",
};

export default async function WorksPage() {
  const works: Work[] = await getWorks();

  return (
    <WhiteWrapperLayout>
      <section className="py-40">
        <div className="container">
          <div className="flex flex-col items-center gap-20">
            <h1 className="h1 text-center">Selected works</h1>
            <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-16">
              {works.map((work: any) => (
                <figure
                  key={work.name}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <Link
                    href={`/works/${work.currentSlug}`}
                    className="overflow-hidden relative w-full aspect-[16/12] group"
                  >
                    <Image
                      src={urlFor(work.src).url()}
                      alt=""
                      width={480}
                      height={360}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                  <figcaption>
                    <Link href={`/works/${work.currentSlug}`}>
                      <h3 className="lg:h3 md:h4 h3 text-dark-terra-cotta">
                        {work.name}
                      </h3>
                    </Link>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </WhiteWrapperLayout>
  );
}
