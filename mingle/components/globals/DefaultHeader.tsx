"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Tabs } from "@/prefs/consts";
import DefaultButton from "./DefaultButton";


export default () => {
    const pathName= usePathname();
    return (
        <header className="w-[90%] rounded-full left-[50%] -translate-x-[50%] top-[2.5vh] h-[8vh] items-center md:justify-between lg:justify-between justify-start flex flex-row fixed bg-background lg:px-16 px:2 lg:py-2 py-1
        shadow-pink/50 shadow-xl
        ">
            <Link href={"/"}>
                <Image
                    alt="Mingle Logo" src="/logo-pink.png"
                    width={48} height={48}
                ></Image>
            </Link>
            <nav className="flex flex-row items-center justify-center gap-4">
                {Tabs.map((tab, i) => <Link href={tab.href} key={i} className={(tab.href === pathName ? "text-pink font-bold" : "text-secondary hover:text-primary hover text-bold font-normal hover:font-bold transition-all duration-500 ease-in-out") + " text-sm font-secondary"}>
                    {tab.label}
                </Link>)}
            </nav>
            <DefaultButton title="Collect your Art" variant="primary" onClick={ ()=> { window.open("/contact/", "_self"); }} />
        </header>
    )
}
