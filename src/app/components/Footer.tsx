"use client";

import { usePathname } from "next/navigation";

// Import SVG icons
import FacebookIcon from "@images/socials/facebook.svg";
import InstagramIcon from "@images/socials/instagram.svg";
import LinkedinIcon from "@images/socials/linkedin.svg";

export default function Footer() {
  const pathname = usePathname();
  const isHidden = pathname.includes("/studio");

  // Social media data
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      Icon: FacebookIcon,
    },
    {
      href: "https://www.instagram.com",
      Icon: InstagramIcon,
    },
    {
      href: "https://www.linkedin.com",
      Icon: LinkedinIcon,
    },
  ];

  return (
    <footer className="-mt-[100vh] bg-dark-sienna text-white" hidden={isHidden}>
      <div className="h-[100vh]"></div>

      <div className="sticky bottom-0 flex flex-col xl:gap-40 md:gap-24 gap-16 sm:pt-24 pt-16 pb-8">
        <div className="container">
          <div className="flex flex-col items-center sm:gap-6 gap-3 text-center">
            <span className="sm:text-3xl text-2xl font-bold">
              Have a project in mind?
            </span>
            <span className="text-xl font-GillLight">Drop us a line</span>
            <a
              href="mailto:hello@oushn.tv"
              className="p-base font-semibold underline"
            >
              hello@oushn.tv
            </a>
          </div>
        </div>

        <div className="container max-w-none md:px-8">
          <div className="flex md:flex-row flex-col-reverse md:items-end items-center justify-between gap-4">
            <span className="text-sm font-GillLight">
              Oushn ©2024. All rights reserved.
            </span>

            <ul className="flex items-center gap-4">
              {socialLinks.map(({ href, Icon }) => (
                <li key={href} className="inline-block">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="p-base"
                  >
                    <Icon className="size-6" />
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
