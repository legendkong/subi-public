import Head from 'next/head'
import styles from '@/styles/root.module.css'
import Header from '@/components/Header'
import Github from '@/components/GitHub'
import Example from '@/components/Example'
import TextArea from '@/components/TextArea'
import Footer from '@/components/Footer'

export default function Home() {
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
          <a
            className='flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100 mb-5'
            href='https://github.com/legendkong/subi'
            target='_blank'
          >
            <Github />
            <p>Star on GitHub</p>
          </a>
          <h1 className='sm:text-6xl text-4xl max-w-[708px] font-bold text-white'>
            Generate <span className={styles.titleGradient}>RegEx</span>{' '}
            <br></br>
            using plain English
          </h1>
          <p className='text-slate-500 mt-5'>
            8,232 stressed out coders saved so far 😖
          </p>
          <Example />
          <TextArea />
        </main>
        <Footer />
      </div>
    </>
  )
}
