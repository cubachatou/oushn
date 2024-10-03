import EnrollForm from "@/app/components/EnrollForm";
import CourseAuthorSection from "@/app/components/sections/CourseAuthor";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import video from "@videos/header_character_v2.mp4";
import { Metadata } from "next";
import Image from "next/image";
import { CharCoursePage } from "../../../../shared/models";

export const metadata: Metadata = {
  title: "Accents in Motion characters workshop",
  description:
    "Цей воркшоп присвячений темі Акцентної персонажної анімації в моушн дизайні. Поглиблюємо наші знання, покращуємо навички та навчаємось планувати персонажну анімацію з урахуванням ритму та динаміки. Переводимо нашу персонажку на новий рівень - від посередньої монотонності до акцентної виразності.",
};

async function getCharacterCoursePage() {
  const query = `
  *[_type == "characterCoursePage"][0] {
    introSection {
      title,
      text
    },
    contentSection {
      firstImage,
      program {
        title,
        description,
        list[] {
          highlightedText,
          defaultText
        }
      },
      secondImage
    },
    forWhomSection {
      title,
      description
    },
    authorSection {
      img,
      name,
      position,
      socials {
        icon,
        link
      }
    },
    priceSection {
      price,
      enrollButton,
      addInfo
    }
  }`;

  const characterCoursePage: CharCoursePage = await sanityFetch({
    query: query,
    tags: ["characterCoursePage"],
  });

  return characterCoursePage;
}

export default async function CharacterCoursePage() {
  const characterCoursePage: CharCoursePage = await getCharacterCoursePage();

  return (
    <>
      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection
          title={characterCoursePage.introSection.title}
          description={characterCoursePage.introSection.text}
          titleColor="text-middle-pink"
          maxWidth={640}
        />

        <section>
          <div className="container max-w-screen-sm">
            <div className="relative w-full aspect-[16/10] md:mb-24 mb-12">
              <Image
                src={urlFor(
                  characterCoursePage.contentSection.firstImage,
                ).url()}
                alt={characterCoursePage.contentSection.program.title}
                unoptimized
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="sm:my-16 my-8 flex flex-col ms:gap-8 gap-4">
              <h2 className="h2 text-middle-pink text-center">
                {characterCoursePage.contentSection.program.title}
              </h2>
              <p className="p-base text-center text-pretty">
                {characterCoursePage.contentSection.program.description}
              </p>
            </div>

            <ul className="sm:my-16 my-8 list-disc list-inside marker:text-middle-pink p-medium [&_li:not(:last-child)]:mb-[0.75em] [&_span]:-ml-[0.5em] [&_span]:text-middle-pink">
              {characterCoursePage.contentSection.program.list.map(
                (item, index) => (
                  <li key={index}>
                    <span>{item.highlightedText}</span> {item.defaultText}
                  </li>
                ),
              )}
            </ul>

            <div className="relative md:mt-24 mt-12 sm:mb-16 mb-8 w-full aspect-video">
              <Image
                src={urlFor(
                  characterCoursePage.contentSection.secondImage,
                ).url()}
                alt={characterCoursePage.forWhomSection.title}
                unoptimized
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="sm:mt-20 mt-12 sm:mb-24 mb-16 flex flex-col sm:gap-8 gap-4">
              <h2 className="sm:h2 h3 text-center">
                {characterCoursePage.forWhomSection.title}
              </h2>
              <p className="p-base text-center text-pretty">
                {characterCoursePage.forWhomSection.description}
              </p>
            </div>
          </div>
        </section>

        <CourseAuthorSection
          name={characterCoursePage.authorSection.name}
          position={characterCoursePage.authorSection.position}
          image={urlFor(characterCoursePage.authorSection.img).url()}
          bgColor="bg-middle-pink"
          socialsBgColor="bg-royal-blue"
        />

        <section className="py-24">
          <div className="container">
            <div className="flex flex-col items-center gap-10 text-center">
              <strong className="inline-block max-w-64 h4 text-pretty">
                {characterCoursePage.priceSection.price}
              </strong>

              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="button bg-middle-pink">
                    {characterCoursePage.priceSection.enrollButton}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                  <EnrollForm />
                </DialogContent>
              </Dialog>

              <strong className="inline-block p-base font-GillLight">
                {characterCoursePage.priceSection.addInfo}
              </strong>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>
    </>
  );
}
