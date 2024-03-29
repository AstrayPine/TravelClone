import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className="flexBetween max-container 
      padding-container relative z-30 py-5"
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16
           text-gray-50 flexCenter cursor-point pb-1.5 transition-all
            hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="flex"></div>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      {/* HAMBURGER MENU MOBILE */}
      <div className="md:hidden inline-block cursor-pointer lg:hidden">
        <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400">
          <Image
            src="menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
