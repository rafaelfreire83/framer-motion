import { Card } from '@/components/Card'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-6 pb-12 bg-gray-900 text-white">
      <div className="container w-[1200px] space-y-24">
        <Header />

        <h1 className='font-extrabold italic leading-tight text-center text-[80px]'>Construa sites modernos com agilidade sem precisar sair do HTML</h1>

        <div className='grid w-full grid-cols-3 gap-12 px-8'>
          <Card 
            href="/nextjs"
            imgSrc='/nextjs.svg'
            layoutId='nextjs-logo'
          />
          <Card 
            href="tailwind"
            imgSrc='/tailwind.svg'
            layoutId='tailwind-logo'
          />
          <Card 
            href="framer-motion"
            imgSrc='/framer-motion.svg'
            layoutId='framer-motion-logo'
          />
        </div>
      </div>
    </main>
  )
}
