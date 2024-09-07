import Image from "next/image";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import IntroTextSection from "@/app/components/sections/intro-text";
import VideoIntro from "@/app/components/video-intro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import logo from "@images/logos/logo-pink.svg";
import liza from "@images/team/liza.jpg";
import CourseAuthorSection from "@/app/components/sections/course-athour";

export default function CharacterCoursePage() {
  return (
    <>

      <VideoIntro />

      <WhiteWrapperLayout>
        <IntroTextSection title="Accents in Motion characters workshop" description="Цей воркшоп присвячений темі Акцентної персонажної анімації в моушн дизайні. Поглиблюємо наші знання, покращуємо навички та навчаємось планувати персонажну анімацію з урахуванням ритму та динаміки. Переводимо нашу персонажку на новий рівень - від посередньої монотонності до акцентної виразності." titleColor="text-middle-pink" maxWidth={640} />

        <section className="py-16">
          <div className="container prose">
            <h2>Програма</h2>
            <p>3 уроки в записі - дивись в зручний для тебе час. Підготовлені під анімацію файли для роботи на воркшопі та виконання домашніх завдань. Чатик для комунікації з іншими студентами воркшопу та отримання фідбеку на домашки.</p>
            <ul>
              <li>Теорія. Лекція про акцентну персонажку</li>
              <li>Практика 1. Переходи між ключовими позами</li>
              <li>Практика 2. Ігрова сцена з фокусом на перформансі персонажа</li>
              <li>Домашка 1. Переходи між позами</li>
              <li>Домашка 2. Ігрова сцена</li>
              <li>Чатик для спілкування та отримання фідбеку (один фідбек на кожну домашку)</li>
            </ul>

            <h2>Для кого воркшоп?</h2>
            <p>Для моушн дизайнерів та аніматорів, які вже вміють анімувати персонажів в After Effects, але прагнуть поглибити свої знання та покращити навички. Зауважте - воркшоп рівня middle - ми не будемо вивчати основи персонажної анімації та ріггінгу.</p>
          </div>
        </section>

        <CourseAuthorSection name="Ліза Тарасова" title="Кураторка курсу та авторка програми" image={liza} bgColor="bg-middle-pink" />

        <section className="py-24">
          <div className="container">
            <div className="flex flex-col items-center gap-10 text-center">
              <strong className="inline-block max-w-56 h4">Вартість курсу - 8000 грн</strong>
              <button type="button" className="button bg-middle-pink">записатись в групу</button>
              <strong className="inline-block p-base font-GillLight">*Для студентів Режисерського курсу діє знижка, напишіть мені!</strong>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>

    </>
  );
}