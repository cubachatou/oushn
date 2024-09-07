"use client"

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
//
import burger from "@images/icons/burger.svg";
import close from "@images/icons/close.svg";
import logoBlue from "@images/logos/logo-blue.svg";
import logoPink from "@images/logos/logo-pink.svg";
import logoRed from "@images/logos/logo-red.svg";
import logoWhite from "@images/logos/logo-white.svg";

export default function Header() {
  const pathname = usePathname();
  const logo = pathname === "/school/character-course" ? logoPink : pathname === "/school/art-direction-course" ? logoBlue : logoRed;
  const isActive = (path: string) => pathname === path;
  const isSchoolPath = pathname.includes("/school");
  //
  const [zIndex, setZIndex] = useState(0);
  const [clipPath, setClipPath] = useState('circle(0% at 50% 50%)');
  const [transitionDuration, setTransitionDuration] = useState('700ms');

  const menuOpen = () => {
    setClipPath('circle(100% at 50% 50%)');
    setTransitionDuration('700ms');
    setZIndex(100);
  };
  const menuClose = () => {
    setClipPath('circle(0% at 50% 50%)');
    setTransitionDuration('300ms');
    setZIndex(0);
  };

  return (
    <header className="absolute inset-0 z-10 pointer-events-none">
      <div className="h-[77.5vh]"></div>

      <div className="sticky top-0 py-8">
        <div className="container max-w-none md:px-8">
          <div className="flex items-center justify-between gap-8">
            <a href="#" className="pointer-events-auto">
              <Image src={logo} alt="logo" />
            </a>

            <button onClick={menuOpen} className="pointer-events-auto flex items-center justify-center size-12 rounded-full shadow-[0px_0px_8px_-4px] shadow-black bg-white">
              <Image src={burger} alt="menu" width={24} height={24} className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 w-full h-full bg-[#121013] transition-[clip-path]" style={{ zIndex, clipPath, transitionDuration }}>
        <div className="container max-w-none md:px-8 py-8">
          <div className="flex items-center justify-between gap-8">
            <a href="#" className="pointer-events-auto">
              <Image src={logoWhite} alt="logo" />
            </a>

            <button onClick={menuClose} className="pointer-events-auto flex items-center justify-center size-12 rounded-full shadow-[0px_0px_8px_-4px] shadow-black bg-white">
              <Image src={close} alt="menu" width={32} height={32} className="size-8" />
            </button>
          </div>

          <nav className="absolute -z-1 inset-0 w-full h-full text-white">
            <ul className="pointer-events-auto h-full flex flex-col items-center justify-center gap-4 text-9xl font-California text-center">
              <li className={`hover:text-dark-terra-cotta transition-colors ${isActive("/") ? "text-dark-terra-cotta" : ""}`}>
                <a href="/">Studio</a>
              </li>
              <li>
                <span className={`cursor-default ${isSchoolPath ? "text-[#FFE227]" : ""}`}>School:</span>
                <ul className="text-7xl">
                  <li className={`hover:text-royal-blue transition-colors ${isActive("/school/art-direction-course") ? "text-royal-blue" : ""}`}><a href="/school/art-direction-course">Art Direction Course</a></li>
                  <li className={`hover:text-middle-pink transition-colors ${isActive("/school/character-course") ? "text-middle-pink" : ""}`}><a href="/school/character-course">Character Course</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}