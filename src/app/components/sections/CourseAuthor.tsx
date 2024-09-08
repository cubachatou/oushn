import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";

const socials: { icon: StaticImport, link: string, alt: string }[] = [
  {
    icon: require("@images/socials/instagram.svg"),
    link: 'https://www.instagram.com/yelizatarasova/',
    alt: "Instagram автора"
  },
  {
    icon: require("@images/socials/instagram.svg"),
    link: 'https://www.instagram.com/2.5__d/ ',
    alt: "Instagram курсу"
  },
  {
    icon: require("@images/socials/youtube.svg"),
    link: 'https://www.youtube.com/@2.5__d',
    alt: "Yotube канал курсу"
  },
];

export default function CourseAuthorSection({ name, title, image, bgColor }: { name: string, title: string, image: StaticImageData, bgColor: string }) {
  return (
    <section className={`py-16 text-white ${bgColor ? `${bgColor}` : 'bg-inherit'}`}>
      <div className="container">
        <div className="max-w-screen-md mx-auto grid sm:grid-cols-2 sm:gap-16 gap-8">
          <Image src={image} alt="Liza Tarasova" className="object-cover" />

          <div className="flex flex-col max-md:items-center gap-4">
            <div className="mb-auto flex flex-col max-md:items-center gap-4 max-md:text-center">
              <span className="lg:h2 md:h3 h2">Ліза Тарасова</span>
              <p className="p-medium">Кураторка курсу та
                авторка програми</p>
            </div>

            <ul className="w-fit flex sm:grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <li key={social.alt}>
                  <a href={social.link} target="_blank" rel="noreferrer nofollow" className="inline-flex items-center justify-center size-12 rounded-full bg-royal-blue">
                    <Image src={social.icon} alt={social.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}