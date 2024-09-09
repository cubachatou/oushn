import Link from "next/link";
import Image from "next/image";
//
import video from "@videos/intro.mp4";
import IntroTextSection from "./components/sections/IntroText";
import VideoIntro from "./components/VideoIntro";
import WhiteWrapperLayout from "./layouts/white-wrapper";
//
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// 
const clientLogos: { src: StaticImport, alt: string }[] = [
  {
    src: require("@images/clients/client_01.svg"),
    alt: "SOVA *jewelry house",
  },
  {
    src: require("@images/clients/client_02.svg"),
    alt: "ПУМБ",
  },
  {
    src: require("@images/clients/client_03.svg"),
    alt: "Planeta Kino",
  },
  {
    src: require("@images/clients/client_04.svg"),
    alt: "LOREAL",
  },
  {
    src: require("@images/clients/client_05.svg"),
    alt: "Fora",
  },
  {
    src: require("@images/clients/client_06.svg"),
    alt: "obmy",
  },
  {
    src: require("@images/clients/client_07.svg"),
    alt: "drama queen",
  },
  {
    src: require("@images/clients/client_08.svg"),
    alt: "LA ROCHE-POSAY",
  },
  {
    src: require("@images/clients/client_09.svg"),
    alt: "Дарниця",
  },
  {
    src: require("@images/clients/client_10.svg"),
    alt: "Ukraїner",
  },
  {
    src: require("@images/clients/client_11.svg"),
    alt: "ARTERIUM",
  },
  {
    src: require("@images/clients/client_12.svg"),
    alt: "banda",
  },
];
//
async function getWorks() {
  const query = `
  *[_type == "work"] {
    name,
    "currentSlug": slug.current,
    "src": image.asset._ref
  }`;

  const works = await client.fetch(query);

  return works;
}


export default async function Home() {
  const works = await getWorks();

  return (
    <>

      <VideoIntro video={video} />

      <WhiteWrapperLayout>

        <IntroTextSection title="in love with animation" description="We’re Oushn, an animation and motion design studio from Ukraine, working worldwide. We create bright explainers, illustrations and cool animated content for brands with focus on storytelling and emotions. We do all cycle of animation production - from idea to last details in sound design" titleColor="text-dark-terra-cotta" />

        <section className="pb-8">
          <div className="container">
            <div className="flex flex-col items-center lg:gap-32 sm:gap-24 gap-16">
              <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-16">
                {works.map((work: { name: string, currentSlug: string, src: SanityImageSource }) => (
                  <figure key={work.name} className="flex flex-col items-center text-center gap-4">
                    <Link href={`/works/${work.currentSlug}`} className="overflow-hidden relative w-full aspect-[16/12] group">
                      <Image src={urlFor(work.src).url()} alt="" width={480} height={360} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                    <figcaption>
                      <Link href={`/works/${work.currentSlug}`}>
                        <h3 className="lg:h3 md:h4 h3 text-dark-terra-cotta">{work.name}</h3>
                      </Link>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <a href="/" className="button bg-dark-terra-cotta">all projects</a>
            </div>
          </div>
        </section>

        <section className="md:py-32 sm:py-24 py-16">
          <div className="container max-w-none">
            <div className="flex flex-col items-center md:gap-24 gap-16">
              <h2 className="h2">Our clients</h2>

              <div className="w-full grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-16">
                {clientLogos.map((client) => (
                  <div key={client.alt} className="flex justify-center">
                    <Image src={client.src} alt={client.alt} />
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
