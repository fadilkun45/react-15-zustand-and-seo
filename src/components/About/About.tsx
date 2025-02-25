"use client"

import { useLoadingStore } from "@/providers/loading-store-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const About = () => {
  const { loading, setLoading } = useLoadingStore((state) => state)
  const router = useRouter()

  useEffect(() => {
    console.log("Loading", loading)

  }, [loading])

  return (

    <div className="flex items-center justify-center flex-col">
      About
      <button type="button" className='px-4 py-4 bg-green-700 text-white mx-5 rounded-lg' onClick={() => router.push('/')}>ke home</button>

      <button className="px-4 text-xl py-2 border text-white my-4 rounded-lg bg-blue-600" onClick={() => setLoading(!loading)}>SetLoading {String(!loading)}</button>
      <p className="text-xl">current {loading.toString()}</p>
    </div>
  )
}

export default About