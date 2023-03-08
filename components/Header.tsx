import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex justify-between items-center w-full mt-5 border-b-2 border-slate-500 pb-3 sm:px-4 px-2'>
      <Link href='/' className='flex space-x-3'>
        <Image
          alt='header text'
          src='/favicon.ico'
          className='sm:w-10 sm:h-10 w-9 h-9 -mr-3 '
          width={26}
          height={26}
        />
        <h1 className='sm:text-base text-base font-bold ml-2 tracking-tight mt-2 dark:md:hover:text-slate-600 '>
          subiRegex.com
        </h1>
      </Link>

      {/* <Image
          alt='Vercel Icon'
          src='/vercel.svg'
          className='sm:w-8 sm:h-[27px] w-8 h-[28px]'
          width={32}
          height={28}
        /> */}
      <h1 className='sm:text-base text-base font-bold ml-2 tracking-tight mt-1.5 '>
        <Link href='/about' className='dark:md:hover:text-slate-600'>
          About
        </Link>

        <span className='mr-5'> </span>

        <Link
          href='https://en.wikipedia.org/wiki/Regular_expression#:~:text=A%20regular%20expression%20(shortened%20as,strings%2C%20or%20for%20input%20validation.'
          className='dark:md:hover:text-slate-600'
          target='_blank'
        >
          RegEx101
        </Link>
      </h1>
    </header>
  )
}
