import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {

  return (
      <>
      <Head>
        <title>James Bermudo</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
        <meta name="description" content="A designer making delightful web experiences." />
        <meta name="keywords" content="James Bermudo, Bermudo, James, Designer, Product Designer, Developer, Frontend" />
        <meta name="author" content="James Bermudo" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <p className='text-[#A4A3A5] text-base mt-14'>I&apos;m a Filipino designer who loves building digital products with delightful experiences. Currently, I work on freelance personal projects all while finishing high school as a 15 year old.<br /><br /> This is my little corner of the internet. You&apos;ll see the things I&apos;ve made along with <Link href="/writing"><a className='text-[#D1D1D2] duration-150 hover:text-indigo-300 underline'>essays</a></Link> about my thoughts and experiments. I&apos;m always active on <a href="https://twitter.com/jcebermudo" target="_blank" rel="noreferrer" className='text-[#D1D1D2] duration-150 hover:text-indigo-300 underline'>Twitter</a> so if you&apos;d like to chat, slide in my dms.</p>
      <div className="flex space-x-4 mt-7">
        <a target="_blank" rel="noreferrer" href="mailto:bermudo.elumba@gmail.com" className='text-[#D1D1D2] text-base duration-150 hover:text-indigo-300'><span className='underline'>Email</span>↗</a>
        <a href="https://twitter.com/jcebermudo" target="_blank" rel="noreferrer" className='text-[#D1D1D2] text-base duration-150 hover:text-indigo-300'><span className='underline'>Twitter</span>↗</a>
        <a href="https://github.com/jcebermudo" target="_blank" rel="noreferrer" className='text-[#D1D1D2] text-base duration-150 hover:text-indigo-300'><span className='underline'>GitHub</span>↗</a>
      </div>
      <hr className='mt-7 border-[#767677] opacity-30'/>
      <h2 className='text-[#D1D1D2] text-base font-semibold mt-7'>Projects</h2>
      </>
  )
}
