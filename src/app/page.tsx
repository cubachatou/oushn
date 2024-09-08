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
// 
const clientImages: any[] = [];
for (let i = 1; i <= 12; i++) {
  clientImages.push(require(`@images/clients/client_${String(i).padStart(2, '0')}.svg`));
}
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
            <div className="flex flex-col items-center gap-32">
              <div className="w-full grid grid-cols-3 gap-x-8 gap-y-16">
                {works.map((work: any) => (
                  <figure key={work.name} className="flex flex-col items-center text-center gap-4">
                    <Link href={`/works/${work.currentSlug}`} className="overflow-hidden relative w-full aspect-[16/12] group">
                      <Image src={urlFor(work.src).url()} alt="" width={480} height={360} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                    <figcaption>
                      <Link href={`/works/${work.currentSlug}`}>
                        <h3 className="h3 text-dark-terra-cotta">{work.name}</h3>
                      </Link>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <a href="/" className="button bg-dark-terra-cotta">all projects</a>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container max-w-none">
            <div className="flex flex-col items-center gap-24">
              <h2 className="h2">Our clients</h2>

              <div className="w-full grid grid-cols-6 gap-x-8 gap-y-16">
                {clientImages.map((src, index) => (
                  <div key={index} className="flex justify-center">
                    <Image src={src} alt="" />
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
