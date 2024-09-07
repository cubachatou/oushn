import introVideo from "@videos/intro.mp4";
import BackgroundVideo from "next-video/background-video";
import Image from "next/image";

import burger from "@images/icons/burger.svg";
import logo from "@images/logos/logo-red.svg";
// 
const clientImages: any[] = [];
for (let i = 1; i <= 12; i++) {
  clientImages.push(require(`@images/clients/client_${String(i).padStart(2, '0')}.svg`));
}
// 
const socials = [
  {
    name: 'Instagram',
    url: require('@images/socials/instagram.svg'),
    icon: 'instagram',
  },
  {
    name: 'Facebook',
    url: require('@images/socials/facebook.svg'),
    icon: 'facebook',
  },
  {
    name: 'LinkedIn',
    url: require('@images/socials/linkedin.svg'),
    icon: 'linkedin',
  },
];

export default function Home() {
  return (
    <main className="relative">

      <header className="absolute inset-0 z-10">
        <div className="h-[77.5vh]"></div>

        <div className="sticky top-0 py-8">
          <div className="container max-w-none md:px-8">
            <div className="flex items-center justify-between gap-8">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>

              <button className="flex items-center justify-center size-12 rounded-full shadow-[0px_0px_8px_-4px] shadow-black">
                <Image src={burger} alt="menu" width={24} height={24} className="size-6"/>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section style={{ '--height': '77.5vh' }} className="-mb-[var(--height)] bg-gray">
        <BackgroundVideo src={introVideo} className="h-[var(--height)] !sticky !top-0">
        </BackgroundVideo>
        <div className="h-[var(--height)]"></div>
      </section>

      <div className="relative z-1 bg-white shadow-[0px_0px_24px_-16px] shadow-black">
        <section className="py-24">
          <div className="container">
            <header className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-7xl font-California font-bold text-dark-terra-cotta">in love with animation</h1>
              <p className="max-w-screen-md text-2xl text-dark-sienna">We’re Oushn, an animation and motion design studio from Ukraine, working worldwide. We create bright explainers, illustrations and cool animated content for brands with focus on storytelling and emotions. We do all cycle of animation production - from idea to last details in sound design</p>
            </header>
          </div>
        </section>

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
      </div>

      <footer className="-mt-[100vh] bg-dark-sienna text-white">
        <div className="h-[100vh]"></div>

        <div className="sticky bottom-0 flex flex-col gap-40 pt-24 pb-8">
          <div className="container">
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="text-3xl font-bold">Have a project in mind?</span>
              <span className="text-xl font-GillLight">Drop us a line</span>
              <a href="mailto:hello@oushn.tv" className="text-2xl font-semibold underline">hello@oushn.tv</a>
            </div>
          </div>

          <div className="container max-w-none md:px-8">
            <div className="flex items-end justify-between">
              <span className="text-sm font-GillLight">Oushn ©2024. All rights reserved.</span>

              <ul className="flex items-center gap-4">
                {socials.map((social, index) => (
                  <li key={index} className="inline-block">
                    <a href="/" className="text-2xl">
                      <Image src={social.url} alt={social.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
