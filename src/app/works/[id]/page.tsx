import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import introVideo from "@videos/artdirection_for site_v2.mp4";
import Video from "next-video";
import Image from "next/image";
import gif1 from "@images/art-direction-course/site gif 01.gif";
import gif2 from "@images/art-direction-course/site gif 02.gif";
import gif3 from "@images/character-course/character02_render 2.gif";
import gif4 from "@images/character-course/character02_render 3.gif";

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
    <>
      <VideoIntro video={introVideo} />

      <WhiteWrapperLayout>
        <IntroTextSection
          title={work.name}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam asperiores ut reiciendis voluptates. Quisquam provident vero perferendis quae libero quidem!"
        />

        <section id="triple-media-grid" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
              <div className="aspect-square overflow-hidden relative">
                <Image src={gif4} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="aspect-square overflow-hidden relative">
                <Image src={gif2} alt="" layout="fill" objectFit="cover" />
              </div>
              <div className="aspect-square overflow-hidden relative">
                <Image src={gif3} alt="" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="prose" className="py-16">
          <div className="container">
            <div className="prose prose-2xl mx-auto">
              <h2>H2 title</h2>
              <h3>H3 title</h3>
              <h4>H4 title</h4>
              <h5>H5 title</h5>
              <h6>H6 title</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam asperiores ut reiciendis voluptates. Quisquam provident
                vero perferendis quae libero quidem! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam asperiores ut reiciendis
                voluptates. Quisquam provident vero perferendis quae libero
                quidem!
              </p>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
              <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ol>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam asperiores ut reiciendis voluptates. Quisquam
                  provident vero perferendis quae libero quidem!
                </p>
                <figcaption>Procreate</figcaption>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="video" className="py-16">
          <div className="container">
            <Video src={introVideo} />
          </div>
        </section>

        <section id="single-media" className="py-16">
          <div className="container relative">
            <Image
              src={"https://dummyimage.com/1504x846/04ab55/ffffff"}
              alt=""
              width={1504}
              height={846}
              layout="responsive"
              className="max-w-full aspect-16x9"
            />
          </div>
        </section>

        <section id="double-media-grid" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src="https://dummyimage.com/640x360/04ab55/ffffff"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src="https://dummyimage.com/640x360/04ab55/ffffff"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="shifted-double-media-grid" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src="https://dummyimage.com/640x360/04ab55/ffffff"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="aspect-square overflow-hidden relative mt-24">
                <Image
                  src="https://dummyimage.com/640x360/04ab55/ffffff"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="credits" className="py-16">
          <div className="container max-w-screen-md">
            <div className="flex flex-col items-center gap-16">
              <h2 className="h2">Credits</h2>
              <ul className="grid grid-cols-[auto,45%] gap-x-16 gap-y-4 [&_strong]:h5 [&_strong]:whitespace-nowrap [&_span]:p-medium [&_span]:font-GillLight">
                <strong>Client</strong>
                <span>Hitachi Energy</span>
                <strong>Agency</strong>
                <span>BBC StoryWorks Commercial Productions</span>
                <strong>Executive Creative Directors</strong>
                <span>Ed Barrett, Tom Judd</span>
                <strong>Executive Producer</strong>
                <span>Jen Judd</span>
                <strong>Creative Director</strong>
                <span>Ed Barrett</span>
                <strong>Art Director</strong>
                <span>Jim Billy Wheeler</span>
                <strong>Animation Director</strong>
                <span>Stewart Harvey</span>
                <strong>Head of Production</strong>
                <span>Georgie Lister-Fell</span>
                <strong>Senior Account Director</strong>
                <span>Katie Nash-Chu</span>
                <strong>Senior Producer</strong>
                <span>Flo Layer</span>
                <strong>Character design</strong>
                <span>Jim Billy Wheeler</span>
                <strong>Background design</strong>
                <span>Jim Billy Wheeler, Cat Finnie, Lalita Lupina</span>
                <strong>2D animation</strong>
                <span>
                  Ed Barrett, Robert Duncan, Stewart Harvey, Dev Joshi, Adolfo
                  Mendes, Tejeshwar Vasu
                </span>
                <strong>3D Lead</strong>
                <span>Ricard Badia</span>
                <strong>3D animation</strong>
                <span>
                  Robert Duncan, Robert Abecasis, Ricard Badia, Dev Joshi,
                  Pierre Plouzeau
                </span>
                <strong>Composition and grade</strong>
                <span>Jim Billy Wheeler</span>
                <strong>Script support</strong>
                <span>Mike Davies, Ed Barrett, Tom Judd</span>
              </ul>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>
    </>
  );
}
