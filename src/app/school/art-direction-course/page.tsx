import EnrollForm from "@/app/components/EnrollForm";
import CourseAuthorSection from "@/app/components/sections/CourseAuthor";
import FeedbacksComponent from "@/app/components/sections/Feedbacks";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import video from "@videos/artdirection_for site_v2.mp4";
import { Metadata } from "next";
import Image from "next/image";
import { ArtDirCoursePage, Feedback } from "../../../../shared/models";

export const metadata: Metadata = {
  title: "Art Direction Course",
  description:
    "Це курс про режисуру моушн дизайн відео. Про те, як робити комерційні експлейнери та власні творчі короткометражні анімаційні роботи. Він побудований навколо створення одного проєкту, від пошуку ідеї та написання сценарію до дизайну сцен та створення готової фінальної анімації.",
};

async function getArtDirCoursePage() {
  const query = `
  *[_type == "artDirCoursePage"][0] {
    introSection {
      title,
      text
    },
    courseProgramSection {
      title,
      description,
      firstGroup {
        title,
        "img": img.asset._ref,
        list
      },
      secondGroup {
        title,
        "img": img.asset._ref,
        list
      }
    },
    forWhomSection {
      title,
      list
    },
    authorSection {
      "img": img.asset._ref,
      name,
      position,
      socials {
        "icon": icon.asset._ref,
        link
      }
    },
    priceSection {
      price,
      enrollButton,
      startDate
    },
    feedbacksSection {
      lookButton {
        buttonURL,
        buttonText
      },
      additionalInfo
    }
  }`;

  const artDirCoursePage: ArtDirCoursePage = await sanityFetch({
    query: query,
    tags: ["artDirCoursePage"],
  });

  return artDirCoursePage;
}
async function getFeedbacks() {
  const query = `
  *[_type == "feedbacks"]
  {
    name,
    text,
    "img": avatar.asset._ref
  }`;

  const feedbacks: Feedback[] = await sanityFetch({
    query: query,
    tags: ["feedback"],
  });

  return feedbacks;
}

export default async function ArtDirectionCoursePage() {
  const artDirCoursePage: ArtDirCoursePage = await getArtDirCoursePage();
  const feedbacks: Feedback[] = await getFeedbacks();

  return (
    <main>
      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection
          title={artDirCoursePage.introSection.title}
          description={artDirCoursePage.introSection.text}
          titleColor="text-royal-blue"
          maxWidth={640}
        />

        <section className="xl:py-32 md:py-24 py-16 bg-royal-blue text-white">
          <div className="container">
            <div className="max-w-screen-sm mx-auto flex flex-col gap-8 text-center">
              <h2 className="h2">
                {artDirCoursePage.courseProgramSection.title}
              </h2>
              <p className="p-base">
                {artDirCoursePage.courseProgramSection.description}
              </p>
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col lg:grid grid-cols-[40%,1fr] grid-rows-[auto,auto] gap-y-6 xl:gap-x-32 gap-x-24 xl:my-32 sm:my-24 my-16">
              <h3 className="h5 col-span-2">відеоуроки:</h3>

              <div className="relative aspect-[16/12]">
                <Image
                  src={urlFor(
                    artDirCoursePage.courseProgramSection.firstGroup.img,
                  ).url()}
                  alt={artDirCoursePage.courseProgramSection.firstGroup.title}
                  className="w-full h-auto bg-gray"
                  unoptimized
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <ul className="list-disc list-inside p-medium [&_*:not(:last-child)]:pb-4">
                {artDirCoursePage.courseProgramSection.firstGroup.list.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  ),
                )}
              </ul>
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col lg:grid grid-cols-[40%,1fr] grid-rows-[auto,auto] gap-y-6 xl:gap-x-32 gap-x-24 xl:mt-32 sm:mt-24 mt-16">
              <h3 className="h5 col-span-2">вебінари:</h3>

              <div className="relative aspect-[16/12]">
                <Image
                  src={urlFor(
                    artDirCoursePage.courseProgramSection.secondGroup.img,
                  ).url()}
                  alt={artDirCoursePage.courseProgramSection.secondGroup.title}
                  className="w-full h-auto bg-gray"
                  unoptimized
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <ul className="list-disc list-inside p-medium [&_*:not(:last-child)]:pb-4">
                {artDirCoursePage.courseProgramSection.secondGroup.list.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>

        <section className="pt-16 sm:pb-20 pb-16">
          <div className="container">
            <div className="container">
              <div className="flex flex-col items-center sm:gap-8 gap-6">
                <h2 className="sm:h2 h3">
                  {artDirCoursePage.forWhomSection.title}
                </h2>
                <ul className="max-w-screen-md p-medium p-medium sm:[&_*:not(:last-child)]:pb-4 [&_*:not(:last-child)]:pb-3">
                  {artDirCoursePage.forWhomSection.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CourseAuthorSection
          name={artDirCoursePage.authorSection.name}
          position={artDirCoursePage.authorSection.position}
          image={urlFor(artDirCoursePage.authorSection.img).url()}
          bgColor="bg-royal-blue"
          socialsBgColor="bg-middle-pink"
        />

        <section className="md:py-24 py-16">
          <div className="container">
            <div className="flex flex-col items-center gap-10 text-center">
              <strong className="inline-block max-w-56 h4">
                {artDirCoursePage.priceSection.price}
              </strong>

              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="button bg-royal-blue">
                    {artDirCoursePage.priceSection.enrollButton}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                  <EnrollForm />
                </DialogContent>
              </Dialog>

              <strong className="inline-block max-w-56 h4">
                {artDirCoursePage.priceSection.startDate}
              </strong>
            </div>
          </div>
        </section>

        <FeedbacksComponent
          feedbacks={feedbacks}
          button={{
            text: artDirCoursePage.feedbacksSection.lookButton.buttonText,
            url: artDirCoursePage.feedbacksSection.lookButton.buttonURL,
          }}
          addInfo={artDirCoursePage.feedbacksSection.additionalInfo}
        />
      </WhiteWrapperLayout>
    </main>
  );
}
