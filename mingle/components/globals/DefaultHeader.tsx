"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Tabs } from "@/prefs/consts";
import DefaultButton from "./DefaultButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default () => {
    const pathName= usePathname();
    return (
        <header className="md:w-[90%] w-full h-[10vh] rounded-none top-0 md:rounded-full md:left-[50%] md:-translate-x-[50%] md:top-[2.5vh] md:h-[8vh] items-center md:justify-between lg:justify-between justify-start flex flex-row fixed bg-background lg:px-16 md:px-4 px-2 gap-2 lg:gap-0 md:gap-0 lg:py-2 py-1
        md:shadow-header
        ">
            <div className="flex lg:hidden md:hidden">
                <DefaultButton title="" variant="primaryIcon" onClick={() => { return; }} icon={faBars} />
            </div>
            <Link href={"/"}>
                <Image
                    alt="Mingle Logo" src="/logo-pink.png"
                    width={48} height={48}
                ></Image>
            </Link>
            <nav className="flex-row items-center justify-center gap-4 lg:flex md:flex hidden">
                {Tabs.map((tab, i) => <Link href={tab.href} key={i} className={(tab.href === pathName ? "text-pink font-bold" : "text-secondary hover:text-primary hover text-bold font-normal hover:font-bold transition-all duration-500 ease-in-out") + " text-sm font-secondary"}>
                    {tab.label}
                </Link>)}
            </nav>
            <div className="lg:flex hidden">
                <DefaultButton title="Collect your Art" variant="primary" onClick={ ()=> { window.open("/contact/", "_self"); }} />
            </div>
        </header>
    )
}
