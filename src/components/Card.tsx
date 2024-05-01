"use client"

import { motion } from 'framer-motion'
import Link from "next/link"

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}

export function Card({href, imgSrc, layoutId}: CardProps) {
  return (
    <Link href={href}>
      <div className="bg-gray-800 rounded-2xl flex justify-center items-center h-[140px]">
      <motion.img 
        src={imgSrc}
        layoutId={layoutId}
      />
      </div>
    </Link>
  )
}
