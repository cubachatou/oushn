"use client";

import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

type Feedback = {
  name: string;
  text: string;
  img: SanityImageSource;
};

interface FeedbacksComponentProps {
  feedbacks: Feedback[];
}

export default function FeedbacksComponent({
  feedbacks,
}: FeedbacksComponentProps) {
  return (
    <section className="xl:pb-32 md:pb-24 pb-16">
      <div className="flex flex-col xl:gap-16 gap-8">
        <div className="container">
          <h3 className="xl:h2 h3 text-royal-blue">Відгуки студентів</h3>
        </div>

        <Swiper
          spaceBetween={108}
          slidesPerView={"auto"}
          centeredSlides={true}
          onSwiper={(swiper) =>
            swiper.slides.forEach((slide) => {
              if (slide.innerText.length > 200) {
                const excessLength = slide.innerText.length - 200;
                const additionalWidth = Math.floor(excessLength / 5);
                slide.style.flexBasis = 40 + additionalWidth + "ch";
              }
            })
          }
          className="max-w-full"
        >
          {feedbacks.map((feedback) => (
            <SwiperSlide key={feedback.name} className="basis-[50ch] h-80">
              <figure className="h-full flex items-start gap-6 py-8 px-6 bg-gray">
                <Image
                  src={urlFor(feedback.img).url()}
                  alt={feedback.name}
                  width={96}
                  height={96}
                  className="basis-24 shrink-0 rounded-full"
                />

                <div className="h-full flex flex-col justify-between gap-4">
                  <p className="lg:p-base">{feedback.text}</p>
                  <span className="lg:h5 h6 text-white">{feedback.name}</span>
                </div>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <a
          href="https://www.instagram.com/2.5__d/"
          rel="noreferrer nofollow"
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
