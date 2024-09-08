import Button from "@/app/components/Button";
import EnrollForm from "@/app/components/EnrollForm";
import CourseAuthorSection from "@/app/components/sections/CourseAuthor";
import IntroTextSection from "@/app/components/sections/IntroText";
import VideoIntro from "@/app/components/VideoIntro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import liza from "@images/team/liza.jpg";
import video from "@videos/artdirection_for site_v2.mp4";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ArtDirectionCoursePage() {
  return (
    <main>

      <VideoIntro video={video} />

      <WhiteWrapperLayout>
        <IntroTextSection title="Art direction in Motion design course" description="Це курс про режисуру моушн дизайн відео. Про те, як робити комерційні експлейнери та власні творчі короткометражні анімаційні роботи. 
        Він побудований навколо створення одного проєкту, від пошуку ідеї та написання сценарію до дизайну сцен та створення готової фінальної анімації." titleColor="text-royal-blue" maxWidth={640} />

        <section className="py-32 bg-royal-blue text-white">
          <div className="container">
            <div className="max-w-screen-sm mx-auto flex flex-col gap-8 text-center">
              <h2 className="h2">Програма курсу</h2>
              <p className="p-base">12 відео уроків, кожен тиждень живий вебінар з лекціями та спілкуванням, безлімітна менторська підтримка і в кінці курсу - готова власна анімаційна робота! А головне - покрокове розуміння того, як самостійно вести моушн проект від ідеї до фінального рендеру.</p>
            </div>

            <div className="max-w-screen-xl mx-auto grid grid-cols-[40%,1fr] grid-rows-[auto,auto] gap-y-6 gap-x-32 my-32">
              <h3 className="h5 col-span-2">відеоуроки:</h3>

              <div className="w-full h-auto bg-gray aspect-[16/12]"></div>

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

            <div className="max-w-screen-xl mx-auto grid grid-cols-[40%,1fr] grid-rows-[auto,auto] gap-y-6 gap-x-32 my-32">
              <h3 className="h5 col-span-2">вебінари:</h3>

              <div className="w-full h-auto bg-gray aspect-[16/12]"></div>

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

        <section className="pt-16 pb-20">
          <div className="container">
            <div className="container">
              <div className="flex flex-col items-center gap-8">
                <h2 className="h2">Для кого курс?</h2>
                <ul className="max-w-screen-md p-medium p-medium [&_*:not(:last-child)]:pb-4">
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

        <section className="py-24">
          <div className="container">
            <div className="flex flex-col items-center gap-10 text-center">
              <strong className="inline-block max-w-56 h4">Вартість курсу - 8000 грн</strong>

              <Dialog>
                <DialogTrigger asChild>
                  <Button as="button" type="button" className="button bg-royal-blue">записатись в групу</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[560px]">
                  <EnrollForm />
                </DialogContent>
              </Dialog>

              <strong className="inline-block max-w-56 h4">Наступна група - листопад 2024</strong>
            </div>
          </div>
        </section>

        <section className="py-16 pb-32">
          <div className="container">
            <div className="flex flex-col gap-16">
              <h3 className="h2 text-royal-blue">Відгуки студентів</h3>

              <div className="flex gap-8">
                <Image src="https://dummyimage.com/400/04ab55/ffffff" width={400} height={400} alt="" className="aspect-[16/12] object-cover" />
                <Image src="https://dummyimage.com/400/04ab55/ffffff" width={400} height={400} alt="" className="aspect-[16/12] object-cover" />
                <Image src="https://dummyimage.com/400/04ab55/ffffff" width={400} height={400} alt="" className="aspect-[16/12] object-cover" />
                {/* <Image src="https://dummyimage.com/400/04ab55/ffffff" width={400} height={400} alt="" className="aspect-[16/12] object-cover" />
                  <Image src="https://dummyimage.com/400/04ab55/ffffff" width={400} height={400} alt="" className="aspect-[16/12] object-cover" /> */}
              </div>

              <a href="#" className="button self-center bg-royal-blue">дивитись роботи</a>

              <p className="max-w-screen-md self-center text-center p-base text-pretty">Для роботи на курсі потрібен ПК з встановленими програмами After Effects та Illustrator (або інші альтернативні програми для створення графіки, в яких вам зручно працювати). Ви будете самостійно створювати ілюстрації та анімацію, тож треба мати відповідні навички. Якщо ви не впевнені, чи достатньо ваших скілів для участі в курсі – напишіть мені!</p>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>

    </main>
  );
}