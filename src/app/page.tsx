import Image from "next/image";
import Footer from "./components/footer";
import Header from "./components/header";
import IntroTextSection from "./components/sections/intro-text";
import VideoIntro from "./components/video-intro";
import WhiteWrapperLayout from "./layouts/white-wrapper";
import logo from "@images/logos/logo-red.svg";

// 
const clientImages: any[] = [];
for (let i = 1; i <= 12; i++) {
  clientImages.push(require(`@images/clients/client_${String(i).padStart(2, '0')}.svg`));
}

export default function Home() {
  return (
    <main className="relative">

      <Header logo={logo} />

      <VideoIntro />

      <WhiteWrapperLayout>
        <IntroTextSection title="in love with animation" description="We’re Oushn, an animation and motion design studio from Ukraine, working worldwide. We create bright explainers, illustrations and cool animated content for brands with focus on storytelling and emotions. We do all cycle of animation production - from idea to last details in sound design" titleColor="text-dark-terra-cotta" />

        <section className="pb-8">
          <div className="container">
            <div className="flex flex-col items-center gap-32">
              <div className="grid grid-cols-3 gap-x-8 gap-y-16">
                {Array.from({ length: 6 }).map((_, index) => (
                  <figure key={index} className="flex flex-col items-center text-center gap-4">
                    <Image src="https://dummyimage.com/600/04ab55/ffffff" alt="" width={400} height={400} className="w-full aspect-[16/12] object-cover" />
                    <figcaption>
                      <h3 className="text-4xl font-bold text-dark-sienna">Pumb values</h3>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <a href="/" className="button bg-dark-terra-cotta">all projects</a>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container max-w-none">
            <div className="flex flex-col items-center gap-24">
              <h2 className="text-5xl font-bold text-dark-sienna">Our clients</h2>

              <div className="w-full grid grid-cols-6 gap-x-8 gap-y-16">
                {clientImages.map((src, index) => (
                  <div key={index} className="flex justify-center">
                    <Image src={src} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </WhiteWrapperLayout>

      <Footer />

    </main>
  );
}
