"use client";

import { useGSAP } from "@gsap/react";
import burger from "@images/icons/burger.svg?url";
import close from "@images/icons/close.svg?url";
import logoBlue from "@images/logos/logo-blue.svg?url";
import logoPink from "@images/logos/logo-pink.svg?url";
import logoRed from "@images/logos/logo-red.svg?url";
import logoWhiteBlue from "@images/logos/logo-white-blue.svg?url";
import logoWhitePink from "@images/logos/logo-white-pink.svg?url";
import logoWhiteRed from "@images/logos/logo-white-red.svg?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const pathname = usePathname();
  const logo =
    pathname === "/school/character-course"
      ? logoPink
      : pathname === "/school/art-direction-course"
        ? logoBlue
        : logoRed;
  const logoWhite =
    pathname === "/school/character-course"
      ? logoWhitePink
      : pathname === "/school/art-direction-course"
        ? logoWhiteBlue
        : logoWhiteRed;
  const isActive = (path: string) => pathname === path;
  const isSchoolPath = pathname.includes("/school");
  const isWorksPath = pathname.includes("/works");
  const isHidden = pathname.includes("/studio");
  //
  const [zIndex, setZIndex] = useState(0);
  const [clipPath, setClipPath] = useState("circle(0% at 50% 50%)");
  const [transitionDuration, setTransitionDuration] = useState("700ms");

  const menuOpen = () => {
    setClipPath("circle(100% at 50% 50%)");
    setTransitionDuration("700ms");
    setZIndex(100);
  };
  const menuClose = () => {
    setClipPath("circle(0% at 50% 50%)");
    setTransitionDuration("400ms");
    setZIndex(0);
  };

  const stickySection = useRef(null);
  const stickyLogo = useRef(null);
  useGSAP(() => {
    if (stickySection.current) {
      ScrollTrigger.create({
        trigger: stickySection.current,
        start: "top top",
        end: "bottom top",
        onEnter: () => {
          gsap.fromTo(
            stickySection.current,
            {
              backgroundColor: "transparent",
            },
            {
              backgroundColor: "white",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
              boxShadow: "0px 0px 8px -4px black",
            },
          );
          gsap.to(stickyLogo.current, {
            width: 160 / 16 + "rem",
          });
        },
        onLeaveBack: () => {
          gsap.to(stickySection.current, {
            backgroundColor: "transparent",
            paddingBottom: "2rem",
            paddingTop: "2rem",
            boxShadow: "none",
          }),
            gsap.to(stickyLogo.current, {
              width: 210 / 16 + "rem",
            });
        },
      });
    }
  });

  return (
    <header
      className="absolute inset-0 z-10 pointer-events-none"
      hidden={isHidden}
    >
      <div className="h-[77.5vh]" hidden={isWorksPath}></div>

      <div ref={stickySection} className="sticky top-0 py-8">
        <div className="container max-w-none md:px-8">
          <div className="flex items-center justify-between gap-8">
            <a href="#" className="pointer-events-auto">
              <Image
                ref={stickyLogo}
                src={logo}
                alt="logo"
                className="md:w-52 w-40"
              />
            </a>

            <button
              onClick={menuOpen}
              className="pointer-events-auto flex items-center justify-center size-12 rounded-full shadow-[0px_0px_8px_-4px] shadow-black bg-white"
            >
              <Image
                src={burger}
                alt="menu"
                width={24}
                height={24}
                className="size-6"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="fixed inset-0 w-full h-full bg-[#121013] transition-[clip-path]"
        style={{ zIndex, clipPath, transitionDuration }}
      >
        <div className="container max-w-none md:px-8 py-8">
          <div className="flex items-center justify-between gap-8">
            <a href="#" className="pointer-events-auto">
              <Image src={logoWhite} alt="logo" className="md:w-52 w-40" />
            </a>

            <button
              onClick={menuClose}
              className="pointer-events-auto flex items-center justify-center size-12 rounded-full shadow-[0px_0px_8px_-4px] shadow-black bg-white"
            >
              <Image
                src={close}
                alt="menu"
                width={32}
                height={32}
                className="size-8"
              />
            </button>
          </div>

          <nav className="absolute -z-1 inset-0 w-full h-full text-white">
            <ul className="pointer-events-auto h-full flex flex-col items-center justify-center gap-[0.25em] md:text-9xl text-7xl font-California text-center">
              <li
                className={`hover:text-dark-terra-cotta transition-colors ${isActive("/") ? "text-dark-terra-cotta" : ""}`}
              >
                <Link onClick={menuClose} href="/">
                  Studio
                </Link>
              </li>
              <li>
                <span
                  className={`cursor-default ${isSchoolPath ? "text-light-beige" : ""}`}
                >
                  School:
                </span>
                <ul className="md:text-7xl sm:text-5xl text-4xl">
                  <li
                    className={`hover:text-royal-blue transition-colors ${isActive("/school/art-direction-course") ? "text-royal-blue" : ""}`}
                  >
                    <Link
                      onClick={menuClose}
                      href="/school/art-direction-course"
                    >
                      Art Direction Course
                    </Link>
                  </li>
                  <li
                    className={`hover:text-middle-pink transition-colors ${isActive("/school/character-course") ? "text-middle-pink" : ""}`}
                  >
                    <Link onClick={menuClose} href="/school/character-course">
                      Character Course
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
