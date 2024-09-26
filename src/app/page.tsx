import Image from "next/image";
import Link from "next/link";
//
import video from "@videos/intro.mp4";
import IntroTextSection from "./components/sections/IntroText";
import VideoIntro from "./components/VideoIntro";
import WhiteWrapperLayout from "./layouts/white-wrapper";
//
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
//
import { sanityFetch } from "@/sanity/lib/client";
import client_01 from "@images/clients/client_01.svg?url";
import client_02 from "@images/clients/client_02.svg?url";
import client_03 from "@images/clients/client_03.svg?url";
import client_04 from "@images/clients/client_04.svg?url";
import client_05 from "@images/clients/client_05.svg?url";
import client_06 from "@images/clients/client_06.svg?url";
import client_07 from "@images/clients/client_07.svg?url";
import client_08 from "@images/clients/client_08.svg?url";
import client_09 from "@images/clients/client_09.svg?url";
import client_10 from "@images/clients/client_10.svg?url";
import client_11 from "@images/clients/client_11.svg?url";
import client_12 from "@images/clients/client_12.svg?url";
import { Work } from "../../shared/models";

const clientLogos: { src: StaticImport; alt: string }[] = [
  {
    src: client_01,
    alt: "SOVA *jewelry house",
  },
  {
    src: client_02,
    alt: "ПУМБ",
  },
  {
    src: client_03,
    alt: "Planeta Kino",
  },
  {
    src: client_04,
    alt: "LOREAL",
  },
  {
    src: client_05,
    alt: "Fora",
  },
  {
    src: client_06,
    alt: "obmy",
  },
  {
    src: client_07,
    alt: "drama queen",
  },
  {
    src: client_08,
    alt: "LA ROCHE-POSAY",
  },
  {
    src: client_09,
    alt: "Дарниця",
  },
  {
    src: client_10,
    alt: "Ukraїner",
  },
  {
    src: client_11,
    alt: "ARTERIUM",
  },
  {
    src: client_12,
    alt: "banda",
  },
];
//
async function getWorks() {
  const query = `
  *[_type == "work"] | order(_createdAt desc) [0...6] {
    name,
    "currentSlug": slug.current,
    "image": image.asset._ref,
  }`;

  const works: Work[] = await sanityFetch({
    query: query,
    tags: ["work"],
  });

  return works;
}

export default async function Home() {
  const works: Work[] = await getWorks();

  return (
    <>
      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection
          title="in love with animation"
          description="We’re Oushn, an animation and motion design studio from Ukraine, working worldwide. We create bright explainers, illustrations and cool animated content for brands with focus on storytelling and emotions. We do all cycle of animation production - from idea to last details in sound design"
          titleColor="text-dark-terra-cotta"
        />

        <section className="pb-8">
          <div className="container">
            <div className="flex flex-col items-center lg:gap-32 sm:gap-24 gap-16">
              <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-16">
                {works.map(
                  (work: {
                    name: string;
                    currentSlug: string;
                    image: SanityImageSource;
                  }) => (
                    <figure
                      key={work.name}
                      className="flex flex-col items-center text-center gap-4"
                    >
                      <Link
                        href={`/works/${work.currentSlug}`}
                        className="overflow-hidden relative w-full aspect-[16/12] group"
                      >
                        <Image
                          src={urlFor(work.image).url()}
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
                  ),
                )}
              </div>

              <Link href="/works" className="button bg-dark-terra-cotta">
                all projects
              </Link>
            </div>
          </div>
        </section>

        <section className="md:py-32 sm:py-24 py-16">
          <div className="container">
            <div className="flex flex-col items-center md:gap-24 gap-16">
              <h2 className="h2">Our clients</h2>

              <div className="w-full grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-16">
                {clientLogos.map((client) => (
                  <div key={client.alt} className="flex justify-center h-24">
                    <Image
                      src={client.src}
                      alt={client.alt}
                      className="w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>
    </>
  );
}
