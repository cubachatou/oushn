import CourseAuthorSection from "@/app/components/sections/CourseAuthor";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import gif from "@images/character02_render 2.gif";
import liza from "@images/team/liza.jpg";
import video from "@videos/header_character_v2.mp4";
import Image from "next/image";

export default function CharacterCoursePage() {
  return (
    <>

      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection title="Accents in Motion characters workshop" description="Цей воркшоп присвячений темі Акцентної персонажної анімації в моушн дизайні. Поглиблюємо наші знання, покращуємо навички та навчаємось планувати персонажну анімацію з урахуванням ритму та динаміки. Переводимо нашу персонажку на новий рівень - від посередньої монотонності до акцентної виразності." titleColor="text-middle-pink" maxWidth={640} />

        <section>
          <div className="container max-w-screen-sm">
            <Image src="https://dummyimage.com/600/04ab55/ffffff" alt="" width={600} height={600} className="mb-24 w-full aspect-[16/10] object-cover" />

            <div className="my-16 flex flex-col gap-8">
              <h2 className="h2 text-middle-pink text-center">Програма</h2>
              <p className="p-base text-center text-pretty">3 уроки в записі - дивись в зручний для тебе час. Підготовлені під анімацію файли для роботи на воркшопі та виконання домашніх завдань. Чатик для комунікації з іншими студентами воркшопу та отримання фідбеку на домашки.</p>
            </div>

            <ul className="my-16 list-disc list-inside marker:text-middle-pink p-medium [&_li:not(:last-child)]:mb-[0.75em] [&_span]:-ml-[0.5em] [&_span]:text-middle-pink">
              <li>
                <span>Теорія.</span> Лекція про акцентну персонажку
              </li>
              <li>
                <span>Практика 1.</span> Переходи між ключовими позами
              </li>
              <li>
                <span>Практика 2.</span> Ігрова сцена з фокусом на перформансі персонажа
              </li>
              <li>
                <span>Домашка 1.</span> Переходи між позами
              </li>
              <li>
                <span>Домашка 2.</span> Ігрова сцена
              </li>
              <li>
                <span>Чатик</span> для спілкування та отримання фідбеку (один фідбек на кожну домашку)
              </li>
            </ul>

            <Image src={gif} alt="gif" className="mt-24 mb-16 w-full aspect-video object-cover" />

            <div className="mt-20 mb-24 flex flex-col gap-8">
              <h2 className="h2 text-center">Для кого воркшоп?</h2>
              <p className="p-base text-center text-pretty">Для моушн дизайнерів та аніматорів, які вже вміють анімувати персонажів в After Effects, але прагнуть поглибити свої знання та покращити навички. Зауважте - воркшоп рівня middle - ми не будемо вивчати основи персонажної анімації та ріггінгу.</p>
            </div>
          </div>
        </section>

        <CourseAuthorSection name="Ліза Тарасова" title="Кураторка курсу та авторка програми" image={liza} bgColor="bg-middle-pink" />

        <section className="py-24">
          <div className="container">
            <div className="flex flex-col items-center gap-10 text-center">
              <strong className="inline-block max-w-64 h4 text-pretty">Вартість&nbsp;воркшопу&nbsp;- 3000 грн *</strong>
              <button type="button" className="button bg-middle-pink">записатись в групу</button>
              <strong className="inline-block p-base font-GillLight">*Для студентів Режисерського курсу діє знижка, напишіть мені!</strong>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>

    </>
  );
}