import { HomePage } from "@/components/Home/Home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Home',
  description: '...',
  keywords: ['home', 'page'],
}

export default function Home() {
  
  return (
    <HomePage />
  );
}
