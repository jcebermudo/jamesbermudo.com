import Head from 'next/head';
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {

  return (
      <>
      <Head>
        <meta charSet='utf-8'/>
        <title>James Bermudo</title>
        <meta name="title" content="James Bermudo" />
        <meta name="robots" content="index,follow" />
        <meta name="description" content="A Filipino designer." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="James Bermudo" />
        <meta property="og:description" content="A Filipino designer." />
        <meta property="og:site_name" content="James Bermudo" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
    </Head>
      <p className='text-[#A4A3A5] text-base mt-14'>I&apos;m a Filipino designer who loves crafting digital products. Currently, I work on freelance personal projects all while finishing high school as a 15 year old.<br /><br /> This is my little corner of the internet. You&apos;ll see the things I&apos;ve made along with <Link href="/writing"><a className='text-[#D1D1D2] duration-150 hover:text-indigo-300 underline'>essays</a></Link> about my thoughts and experiments. I&apos;m always active on <a href="https://twitter.com/jcebermudo" target="_blank" rel="noreferrer" className='text-[#D1D1D2] duration-150 hover:text-indigo-300 underline'>Twitter</a> so if you&apos;d like to chat, slide in my dms.</p>
      <div className="flex space-x-4 mt-7">
        <a target="_blank" rel="noreferrer" href="mailto:bermudo.elumba@gmail.com" className='group text-[#D1D1D2] underline text-base duration-150 hover:text-indigo-300'>
          Email
          <span className='inline-block align-middle ml-[5px]'><svg className='stroke-2 stroke-[#D1D1D2] duration-150 group-hover:stroke-indigo-300 group-hover:-translate-y-px group-hover:translate-x-px' width="9" height="9" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10L10 1M10 1H3M10 1V8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg></span>
        </a>
        <a href="https://twitter.com/jcebermudo" target="_blank" rel="noreferrer" className='group text-[#D1D1D2] underline text-base duration-150 hover:text-indigo-300'>
          Twitter
          <span className='inline-block align-middle ml-[5px]'><svg className='stroke-2 stroke-[#D1D1D2] duration-150 group-hover:stroke-indigo-300 group-hover:-translate-y-px group-hover:translate-x-px' width="9" height="9" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10L10 1M10 1H3M10 1V8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg></span>
        </a>
        <a href="https://github.com/jcebermudo" target="_blank" rel="noreferrer" className='group text-[#D1D1D2] underline text-base duration-150 hover:text-indigo-300'>
          GitHub
          <span className='inline-block align-middle ml-[5px]'><svg className='stroke-2 stroke-[#D1D1D2] duration-150 group-hover:stroke-indigo-300 group-hover:-translate-y-px group-hover:translate-x-px' width="9" height="9" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10L10 1M10 1H3M10 1V8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg></span>
        </a>
      </div>
      <hr className='mt-7 border-[#767677] border-dashed opacity-30'/>
      <h2 className='text-[#D1D1D2] text-base font-semibold mt-7'>Projects</h2>
      </>
  )
}
