"use client"
import React from "react";
import { usePathname } from "next/navigation";


export default () => {
    const pathName= usePathname();
    return (
        <header></header>
    )
}
