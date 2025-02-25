import { HomePage } from "@/components/Home/Home";
import { FetchData } from "@/Services/Fetch";
import ListFetch from "@/Services/ListFetch";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Home',
  description: '...',
  keywords: ['home', 'page'],
}

export default async function Home() {

  return (
    <HomePage   />
  );
}
