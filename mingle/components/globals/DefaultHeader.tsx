"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default () => {
    const pathName= usePathname();
    return (
        <header></header>
    );

}
