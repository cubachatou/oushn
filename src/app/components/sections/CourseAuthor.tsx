import { urlFor } from "@/sanity/lib/image";
import InstagramIcon from "@images/socials/instagram.svg";
import YoutubeIcon from "@images/socials/youtube.svg";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/legacy/image";

const socials = [
  {
    link: "https://www.instagram.com/yelizatarasova/",
    Icon: InstagramIcon,
  },
  {
    link: "https://www.instagram.com/2.5__d/ ",
    Icon: InstagramIcon,
  },
  {
    link: "https://www.youtube.com/@2.5__d",
    Icon: YoutubeIcon,
  },
];

export default function CourseAuthorSection({
  name,
  position,
  image,
  bgColor,
  socialsBgColor,
}: {
  name: string;
  position: string;
  image: string;
  bgColor: string;
  socialsBgColor: string;
}) {
  return (
    <section
      className={`py-16 text-white ${bgColor ? `${bgColor}` : "bg-inherit"}`}
    >
      <div className="container">
        <div className="max-w-screen-md mx-auto grid sm:grid-cols-2 sm:gap-16 gap-8">
          <div className="relative aspect-square">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>

          <div className="flex flex-col max-md:items-center gap-4">
            <div className="mb-auto flex flex-col max-md:items-center gap-4 max-md:text-center">
              <span className="lg:h2 md:h3 h2">{name}</span>
              <p className="p-medium">{position}</p>
            </div>

            <ul className="w-fit flex sm:grid grid-cols-2 gap-4">
              {socials.map(({ link, Icon }) => (
                <li key={link}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer nofollow"
                    className={`inline-flex items-center justify-center size-12 rounded-full ${socialsBgColor ? `${socialsBgColor}` : "bg-dark-sienna"}`}
                  >
                    <Icon className="size-6 text-white" />
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
