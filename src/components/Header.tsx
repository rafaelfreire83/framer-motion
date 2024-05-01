import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className='flex items-center justify-between'>
      <a href=''>
        <Image 
          src='/logo.svg'
          width={200}
          height={100}
          alt='Logo'
        />
      </a>
      <nav className='flex gap-4 items-center'>
        <Link href="/nextjs">Next.js</Link>
        <Link href="/tailwind">Tailwind</Link>
        <Link href="framer-motion">Framer Motion</Link>
      </nav>
    </header>
  )
}
