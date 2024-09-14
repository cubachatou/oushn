import BlockRenderer from "@/app/components/BlockRenderer";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import { client } from "@/sanity/lib/client";
import { WorkContent } from "../../../../shared/models";

async function getWork(id: string) {
  const query = `
    *[_type == "work" && slug.current == $id][0] {
      name,
      description,
      video {
        asset-> {
          playbackId,
          assetId,
          filename,
        }
      },
      content[]
      {
        ...,
        video {
          ...,
            asset-> {
              playbackId,
              assetId,
              filename,
            }
        },
      }
    }
  `;
  const work = await client.fetch(query, { id });
  return work;
}

export default async function WorkPage({ params }: { params: { id: string } }) {
  const work: WorkContent = await getWork(params.id);

  return (
    <>
      <VideoIntro playbackId={work.video.asset.playbackId} />

      <WhiteWrapperLayout>
        <IntroTextSection
          title={work.name}
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam asperiores ut reiciendis voluptates. Quisquam provident vero perferendis quae libero quidem!"
        />

        <BlockRenderer content={work.content} />

        {/* <section id="prose" className="py-16">
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
        </section> */}

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
