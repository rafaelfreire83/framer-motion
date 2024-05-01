"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TailwindPage() {
  return (
    <div className="container w-screen h-screen flex flex-col gap-8 justify-center items-center">
      <motion.img 
        src='/tailwind.svg'
        layoutId='tailwind-logo'
        className='w-[500px]'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/" className='bg-gray-800 rounded py-2 px-3'>Voltar</Link>
      </motion.div>
    </div>
  )
}
