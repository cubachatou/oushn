import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import IntroTextSection from "@/app/components/sections/intro-text";
import VideoIntro from "@/app/components/video-intro";
import WhiteWrapperLayout from "@/app/layouts/white-wrapper";
import logo from "@images/logos/logo-blue.svg";

export default function ArtDirectionCoursePage() {
  return (
    <main>
      <Header logo={logo} />

      <VideoIntro />

      <WhiteWrapperLayout>
        <IntroTextSection title="Art direction in Motion design course" description="Це курс про режисуру моушн дизайн відео. Про те, як робити комерційні експлейнери та власні творчі короткометражні анімаційні роботи. Він побудований навколо створення одного проєкту, від пошуку ідеї та написання сценарію до дизайну сцен та створення готової фінальної анімації.
      " titleColor="text-royal-blue" maxWidth={640} />
      </WhiteWrapperLayout>

      <Footer />
    </main>
  );
}