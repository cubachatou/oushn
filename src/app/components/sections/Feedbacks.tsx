"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Feedback } from "../../../../shared/models";

export default function FeedbacksComponent({
  feedbacks,
}: {
  feedbacks: Feedback[];
}) {
  return (
    <section className="overflow-hidden xl:pb-32 md:pb-24 pb-16">
      <div className="flex flex-col xl:gap-16 gap-8">
        <div className="container">
          <h3 className="xl:h2 h3 text-royal-blue">Відгуки студентів</h3>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            1024: {
              spaceBetween: 64,
            },
          }}
          spaceBetween={32}
          slidesPerView={"auto"}
          centeredSlidesBounds={true}
          centeredSlides={true}
          speed={800}
          className="feedbacks-swiper container overflow-visible sm:pb-10 pb-8"
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide
              key={feedback.name}
              className="xl:basis-1/2 lg:basis-2/3 md:basis-4/5 sm:basis-[90%] basis-full"
            >
              <figure className="h-full flex md:flex-row flex-col items-start md:gap-6 gap-3 md:py-8 py-4 md:px-6 px-4 bg-gray">
                <div className="shrink-0 flex items-center gap-4">
                  <Image
                    src={urlFor(feedback.img).url()}
                    alt={feedback.name}
                    width={96}
                    height={96}
                    className="md:basis-24 md:size-24 basis-12 size-12 rounded-full"
                  />

                  <span className="md:hidden h6 text-white">
                    {feedback.name}
                  </span>
                </div>

                <div className="h-full flex flex-col justify-between gap-4">
                  <p className="lg:p-base max-md:text-base">{feedback.text}</p>
                  <span className="max-md:hidden h-full lg:h5 h6 text-white">
                    {feedback.name}
                  </span>
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href="https://www.instagram.com/2.5__d/"
          rel="noopener noreferrer nofollow"
          target="_blank"
          className="button self-center bg-royal-blue max-xl:mt-10"
        >
          дивитись роботи
        </a>

        <p className="max-w-screen-md self-center text-center p-base text-pretty">
          Для роботи на курсі потрібен ПК з встановленими програмами After
          Effects та Illustrator (або інші альтернативні програми для створення
          графіки, в яких вам зручно працювати). Ви будете самостійно створювати
          ілюстрації та анімацію, тож треба мати відповідні навички. Якщо ви не
          впевнені, чи достатньо ваших скілів для участі в курсі – напишіть
          мені!
        </p>
      </div>
    </section>
  );
}
