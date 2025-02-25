import About from '@/components/About/About'
import Head from 'next/head'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'about',
  description: '...',
}
const page = () => {
  return (
    <div>
      <About />
      </div>
  )
}

export default page