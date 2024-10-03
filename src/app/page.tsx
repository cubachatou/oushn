import Image from "next/image";
import Link from "next/link";
import video from "@videos/intro.mp4";
import IntroTextSection from "./components/sections/IntroText";
import VideoIntro from "./components/VideoIntro";
import WhiteWrapperLayout from "./layouts/white-wrapper";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/client";
import { MainPageData, Work } from "../../shared/models";
//
async function getMainPageData() {
  const mainPageQuery = `
  *[_type == "mainPage"][0] {
    intro {
      title,
      text
    },
    works {
      moreButton {
        linkText
      }
    },
    clients {
      title,
      images[] {
        img,
        alt
      }
    }
  }
`;

  const mainPageData: MainPageData = await sanityFetch({
    query: mainPageQuery,
    tags: ["mainPage"],
  });

  return mainPageData;
}
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
  const mainPageData: MainPageData = await getMainPageData();
  const works: Work[] = await getWorks();

  return (
    <>
      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection
          title={mainPageData.intro.title}
          description={mainPageData.intro.text}
          titleColor="text-dark-terra-cotta"
        />

        <section className="pb-8">
          <div className="container">
            <div className="flex flex-col items-center lg:gap-32 sm:gap-24 gap-16">
              <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-16">
                {works.map((work) => (
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
                        alt={work.name}
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

              <Link href="/works" className="button bg-dark-terra-cotta">
                {mainPageData.works.moreButton.linkText}
              </Link>
            </div>
          </div>
        </section>

        <section className="md:py-32 sm:py-24 py-16">
          <div className="container">
            <div className="flex flex-col items-center md:gap-24 gap-16">
              <h2 className="h2">{mainPageData.clients.title}</h2>

              <div className="w-full grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-8 gap-y-16">
                {mainPageData.clients.images.map((image) => (
                  <div
                    key={image.alt}
                    className="relative flex justify-center h-32"
                  >
                    <Image
                      src={urlFor(image.img).url()}
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      className="!w-3/4 mx-auto"
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
