"use client"

import { useLoadingStore } from "@/providers/loading-store-provider"
import { useProfileStore } from "@/providers/profile-store-provider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"


const About = () => {
  const { loading, setLoading } = useLoadingStore((state) => state)
  const profile = useProfileStore((state) => state.profile)
  const router = useRouter()


  const testLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  return (

    <div className="flex items-center justify-center flex-col">
      About
      <button type="button" className='px-4 py-4 bg-green-700 text-white mx-5 rounded-lg' onClick={() => router.push('/')}>ke home</button>

      <button className="px-4 text-xl py-2 border text-white my-4 rounded-lg bg-blue-600" onClick={() => testLoading()}>SetLoading {String(!loading)}</button>
      <p className="text-xl">current {loading.toString()}</p>
      <p className="text-center font-bold mt-4">Profile</p>
      <p className="text-center">Nama: {profile?.nama}</p>
      <p className="text-center">umur: {profile?.umur}</p>

    </div>
  )
}

export default About