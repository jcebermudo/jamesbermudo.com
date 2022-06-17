import Head from 'next/head';
import Nav from './Nav'
import Footy from './Footy'

const Layout = ({children}) => {
    return(
    <div>
    <div className="container bg-[#1B1A1D] pt-12 pb-24 sm:pt-24 min-h-fit mx-auto max-w-4xl selection:bg-[#d4cae9] selection:text-[#18181a]">
        <div className='mx-6 sm:mx-44'>
            <Nav/>
                <main>{children}</main>
            <Footy/>
            </div>
        </div>
    </div>
    )
}

export default Layout;