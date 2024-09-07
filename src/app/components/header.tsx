"use client"

import burger from "@images/icons/burger.svg";
import close from "@images/icons/close.svg";
import logoWhite from "@images/logos/logo-white.svg";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  logo: string;
}

export default function Header({ logo }: HeaderProps) {
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
              <li><a href="/" className="hover:text-[#FFE227] transition-colors">Studio</a></li>
              <li>
                <span>School</span>
                <ul className="text-7xl list-disc list-inside [&_a]:-ml-[0.5em] marker:text-[#FFE227]">
                  <li><a href="/school/art-direction-course" className="hover:text-[#FFE227] transition-colors">Art Direction Course</a></li>
                  <li><a href="/school/character-course" className="hover:text-[#FFE227] transition-colors">Character Course</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}