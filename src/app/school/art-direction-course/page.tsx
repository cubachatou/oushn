import EnrollForm from "@/app/components/EnrollForm";
import CourseAuthorSection from "@/app/components/sections/CourseAuthor";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import liza from "@images/team/liza.jpg";
import video from "@videos/artdirection_for site_v2.mp4";
import Image from "next/image";
import gif1 from "@images/art-direction-course/site gif 01.gif";
import gif2 from "@images/art-direction-course/site gif 02.gif";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
async function getFeedbacks() {
  const query = `
  *[_type == "feedbacks"]
  {
    name,
    text,
    "img": avatar.asset._ref
  }`;

  const feedbacks = await client.fetch(query);

  return feedbacks;
}

export default async function ArtDirectionCoursePage() {
  const feedbacks = await getFeedbacks();

  return (
    <main>

      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection title="Art direction in Motion design course" description="Це курс про режисуру моушн дизайн відео. Про те, як робити комерційні експлейнери та власні творчі короткометражні анімаційні роботи. 
        Він побудований навколо створення одного проєкту, від пошуку ідеї та написання сценарію до дизайну сцен та створення готової фінальної анімації." titleColor="text-royal-blue" maxWidth={640} />

        <section className="xl:py-32 md:py-24 py-16 bg-royal-blue text-white">
          <div className="container">
            <div className="max-w-screen-sm mx-auto flex flex-col gap-8 text-center">
              <h2 className="h2">Програма курсу</h2>
              <p className="p-base">12 відео уроків, кожен тиждень живий вебінар з лекціями та спілкуванням, безлімітна менторська підтримка і в кінці курсу - готова власна анімаційна робота! А головне - покрокове розуміння того, як самостійно вести моушн проект від ідеї до фінального рендеру.</p>
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col lg:grid grid-cols-[40%,1fr] grid-rows-[auto,auto] gap-y-6 xl:gap-x-32 gap-x-24 xl:my-32 sm:my-24 my-16">
              <h3 className="h5 col-span-2">відеоуроки:</h3>

              <Image src={gif1} alt="Відеоуроки" className="w-full h-auto bg-gray aspect-[16/12]" />

              <ul className="list-disc list-inside p-medium [&_*:not(:last-child)]:pb-4">
                <li>Брейншторм ідей</li>
                <li>Мудборд</li>
                <li>Сторіборд. сценарій, планування, трітмент</li>
                <li>Сторіборд. фіналізація кадрів</li>
                <li>Стайлфрейм. дизайн сцени</li>
                <li>Стайлфрейм. колір, фіналізація</li>
                <li>Ілюстрація</li>
                <li>Анімація. аніматик проєкту</li>
                <li>Анімація. аніматик сцени</li>
                <li>Анімація. пропрацьовка анімації</li>
                <li>Анімація. деталі і композ</li>
                <li>Саунд дизайн</li>
              </ul>
            </div>

            <div className="max-w-screen-xl mx-auto flex flex-col lg:grid grid-cols-[40%,1fr] grid-rows-[auto,auto] gap-y-6 xl:gap-x-32 gap-x-24 xl:mt-32 sm:mt-24 mt-16">
              <h3 className="h5 col-span-2">вебінари:</h3>

              <Image src={gif2} alt="Вебінари" className="w-full h-auto bg-gray aspect-[16/12]" />

              <ul className="list-disc list-inside p-medium [&_*:not(:last-child)]:pb-4">
                <li>Режисер анімації - структура роботи над комерційною анімацією та мультсеріалами</li>
                <li>Як працювати над змістами, психологією, символами та емоціями через візуальну складову кадру</li>
                <li>Документація</li>
                <li>Бюджет</li>
                <li>Візуальний скрипт</li>
                <li>Розбір питань по проєктам та про роботу в сфері в цілому</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pt-16 sm:pb-20 pb-16">
          <div className="container">
            <div className="container">
              <div className="flex flex-col items-center sm:gap-8 gap-6">
                <h2 className="sm:h2 h3">Для кого курс?</h2>
                <ul className="max-w-screen-md p-medium p-medium sm:[&_*:not(:last-child)]:pb-4 [&_*:not(:last-child)]:pb-3">
                  <li>— для початківців, які вже вміють анімувати, але не мають практики комплексного створення проєкту</li>
                  <li>— для моушн дизайнерів, які втомились від реалізації клієнтських ідей і хочуть втілити власне режисерське бачення</li>
                  <li>— для тих, в кого є ідея, але нема системності</li>
                  <li>— для тих, хто хоче покласти в портфоліо власну красиву роботу</li>
                  <li>— для всіх, кому потрібна підтримка аби розпочати роботу, і найголовніше - довести її до кінця</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CourseAuthorSection name="Ліза Тарасова" title="Кураторка курсу та авторка програми" image={liza} bgColor="bg-royal-blue" />

        <section className="md:py-24 py-16">
          <div className="container">
            <div className="flex flex-col items-center gap-10 text-center">
              <strong className="inline-block max-w-56 h4">Вартість курсу - 8000 грн</strong>

              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="button bg-royal-blue">записатись в групу</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                  <EnrollForm />
                </DialogContent>
              </Dialog>

              <strong className="inline-block max-w-56 h4">Наступна група - листопад 2024</strong>
            </div>
          </div>
        </section>

        <section className="xl:pb-32 md:pb-24 pb-16">
          <div className="flex flex-col xl:gap-16 gap-8">
            <div className="container">
              <h3 className="xl:h2 h3 text-royal-blue">Відгуки студентів</h3>
            </div>

            <Carousel opts={{ align: "center" }} className="w-full pb-20">
              <CarouselContent className="lx:mx-40 mx-8">
                {feedbacks.map((feedback: { name: string, text: string, img: SanityImageSource }) => (
                  <CarouselItem key={feedback.name} className="lg:basis-[768px] basis-full pl-10">
                    <figure className="flex items-start gap-6 py-8 px-6 bg-gray">
                      <Image src={urlFor(feedback.img).url()} alt={feedback.name} width={96} height={96} className="basis-24 shrink-0 rounded-full" />

                      <div className="flex flex-col gap-4">
                        <p className="lg:p-base">{feedback.text}</p>
                        <span className="lg:h5 h6 text-white">{feedback.name}</span>
                      </div>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="top-[100%] left-1/4 size-12 [&_svg]:size-6" />
              <CarouselNext className="top-[100%] right-1/4 size-12 [&_svg]:size-6" />
            </Carousel>

            <a href="https://www.instagram.com/2.5__d/" rel="noreferrer nofollow" target="_blank" className="button self-center bg-royal-blue max-xl:mt-10">дивитись роботи</a>

            <p className="max-w-screen-md self-center text-center p-base text-pretty">Для роботи на курсі потрібен ПК з встановленими програмами After Effects та Illustrator (або інші альтернативні програми для створення графіки, в яких вам зручно працювати). Ви будете самостійно створювати ілюстрації та анімацію, тож треба мати відповідні навички. Якщо ви не впевнені, чи достатньо ваших скілів для участі в курсі – напишіть мені!</p>
          </div>
        </section>
      </WhiteWrapperLayout>

    </main >
  );
}