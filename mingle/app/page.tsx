import Image from "next/image";
import { HeroSection } from "@/components/home";
import { Metadata } from "next";

export const metadata: Metadata= {
    title: "Mingle - Home",
    description: "",
    keywords: "",
};

export default function Home() {
  return (
    <main>
        <HeroSection />
    </main>
  );
}
