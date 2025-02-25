// src/components/pages/home-page.tsx
'use client'

import { useCounterStore } from '@/providers/counter-store-provider'
import { useLoadingStore } from '@/providers/loading-store-provider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const HomePage = () => {
  const router = useRouter()
  const { count, incrementCount, decrementCount } = useCounterStore(
    (state) => state,
  )

  const loading = useLoadingStore((state) => state.loading)

  useEffect(() => {
    console.log("home",loading)
  },[loading])

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1 className='text-2xl'>Count: {count}</h1>
      <hr />
      <button type="button" className='px-4 py-4 bg-green-700 text-white mx-5 rounded-lg' onClick={() => router.push('/about')}>ke about</button>
      <button type="button" className='px-4 py-4 bg-green-700 text-white mx-5 rounded-lg' onClick={incrementCount}>
        Increment Count
      </button>
      <button type="button"  className='px-4 py-4 bg-red-700 text-white mx-5 rounded-lg' onClick={decrementCount}>
        Decrement Count
      </button>
    </div>
  )
}
