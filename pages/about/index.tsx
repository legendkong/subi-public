import Head from 'next/head'
import styles from '@/styles/root.module.css'
import Header from '@/components/Header'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className='flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen'>
        <Head>
          <title>
            subiRegex - English to RegEx converter | Auto RegEx conversion
          </title>
          <meta
            name='description'
            content='The best RegEx tool you ever need. Automatically convert english to RegEx in a matter of seconds.'
          />
          <meta
            name='og:title'
            content=' subiRegex - English to RegEx converter | Auto RegEx conversion'
          />
          <meta
            property='og:description'
            content='The best RegEx tool you ever need. Automatically convert english to RegEx in a matter of seconds.'
          />
          <meta property='og:url' content='https://subiregex.com/' />
          <meta property='og:type' content='website' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        </Head>
        <Header />

        <main className='flex flex-1 w-full flex-col items-center text-center px-4 mt-12 sm:mt-20'>
          <Image
            src='/aboutmeme.jpeg'
            alt='a meme about RegEx'
            width={400}
            height={300}
          ></Image>
          <div>
            <h3 className='sm:text-3xl text-l max-w-[708px] font-bold text-white mt-10 mb-10'>
              I generally don&apos;t believe anyone who <br></br>says
              they&apos;ve &quot;learned
              <span className={styles.titleGradient}> RegEx</span>&quot;.
            </h3>
            <p className='mb-2'>You either:</p>
            <p className='text-left'>
              <li>
                Google for your answers and have infinite tabs of
                StackOverflow/Quora/Reddit opened
              </li>
              <li>Turn to that handsome blue-eyed man on Youtube</li>
              <li>Quit your job</li>
            </p>
            <h3 className='sm:text-3xl text-md max-w-[708px] font-bold text-white mt-20 mb-10'>
              <p className='animate-bounce'>Not anymore!</p> <br></br>With
              <Link href='/'>
                <span className={styles.titleGradient}> subiRegEx.com</span>
              </Link>
              , learning and using
              <span className={styles.titleGradient}> RegEx</span> is so much
              simpler.
            </h3>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
