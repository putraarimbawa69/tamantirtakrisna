import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './components/Home'
import Benefits from './components/Benefits'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomePage />
      <Benefits />
    </>
  )
}
