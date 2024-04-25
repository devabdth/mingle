import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ButtonProps= {
    title: string;
    variant: "primary" | "secondary" | "shadow" | "primaryIcon" | "secondaryIcon" | "shadowIcon";
    icon?: any;
    onClick: () => void;
}

export default (props: ButtonProps) => {
    let stylingClasses: string;
    switch(props.variant) {
        default:
        case "primary":
            stylingClasses= "px-4 py-2 rounded-full bg-pink text-background font-secondary border-2 border-pink hover:bg-transparent hover:text-pink transition-all font-bold duration-500 ease-in-out";
            break;

        case "secondary":
            break;

        case "shadow":
            break;

        case "primaryIcon":
            break;

        case "secondaryIcon":
            break;

        case "shadowIcon":
            stylingClasses= "bg-transparent";
            break;
    }
    return (
        <button className={stylingClasses! + "cursor-pointer"} onClick={props.onClick}>
            {props.title}
            {props.icon!== undefined && <FontAwesomeIcon icon={props.icon!} width={32} height={32} size="lg" color={props.variant === "primaryIcon" ? "#d49ba7" : "#fff1f5"} />}
        </button>
    );
}
