"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";

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

export default function Footer() {
  const pathname = usePathname();
  const isHidden = pathname.includes("/studio");

  return (
    <footer className="-mt-[100vh] bg-dark-sienna text-white" hidden={isHidden}>
      <div className="h-[100vh]"></div>

      <div className="sticky bottom-0 flex flex-col gap-40 pt-24 pb-8">
        <div className="container">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-3xl font-bold">Have a project in mind?</span>
            <span className="text-xl font-GillLight">Drop us a line</span>
            <a href="mailto:hello@oushn.tv" className="p-base font-semibold underline">hello@oushn.tv</a>
          </div>
        </div>

        <div className="container max-w-none md:px-8">
          <div className="flex items-end justify-between">
            <span className="text-sm font-GillLight">Oushn ©2024. All rights reserved.</span>

            <ul className="flex items-center gap-4">
              {socials.map((social, index) => (
                <li key={index} className="inline-block">
                  <a href="/" className="p-base">
                    <Image src={social.url} alt={social.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}