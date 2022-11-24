import Head from 'next/head'
import Sidebar from '../Components/Sidebar'
import Header from "../Components/Header"
import Container from '../Components/Container'


export default function Customer() {
    return (
        <div>
            <div className='flex'>
                <div className='h-screen sticky top-0 border-r-2'>
                    <Sidebar />
                </div>
                <div className=' w-full pr-2'>
                    <Container />
                </div>
            </div>

        </div>
    )
}
