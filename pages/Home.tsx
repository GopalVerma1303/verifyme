import React from 'react'
import Navbar from '../components/Navbar'
// import User from '../assets/User'
import { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widge from '../components/Widget'
import Tabs from '../components/Tabs'
import PostBox from "../components/PostBox"
import { useState, useEffect } from 'react'
import { useSession, useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Post from '../components/Post'
import CommunitySidebar from '../components/CommunitySidebar'
import Link from 'next/link'


const Home: NextPage = () => {
    const supabase = useSupabaseClient()
    const user = useUser()
    const session = useSession()
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState(null)
    const [full_name, setfullname] = useState(null)
    const [avatar_url, setAvatarUrl] = useState(null)
    const [clubNames, setClubNames] = useState(null)
    const [allPosts, setAllPosts] = useState(null)
    const [allClubs, setAllClubs] = useState(null)

    useEffect(() => {
        getProfile()
    }, [session])

    async function getProfile() {
        try {
            setLoading(true)

            let { data, error, status } = await supabase
                .from('profiles')
                .select(`username, avatar_url,full_name`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) {
                throw error
            }

            if (data) {
                setUsername(data.username)
                setAvatarUrl(data.avatar_url)
                setfullname(data.full_name)
            }
        } catch (error) {
            alert('Error loading user data!')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

   

    return (

        <div>
        
            <div className='  w-full relative'>
                <Navbar  userId={user.id} username={username} avatar_url={avatar_url} />
            </div>
            
            {/* <div className=''>
                <div className='sticky top-0 z-10 flex my-7 mx-auto max-w-5xl'>
                    <PostBox username={username} avatar_url={avatar_url} clubName={clubNames} session={session} user={user} />
                </div>
                <div className='flex my-7 mx-auto max-w-5xl'>
                    <Feed posts={allPosts} />
                    <div className='sticky top-20 mt-10 mx-5 ml-5 hidden h-fit min-w-[300px] rounded-md border border-grap-300 bg-white lg:inline'>
                        <p className='text-md mb-1 p-4 pb-3 font-bold '>All Communities</p>
                        <CommunitySidebar clubName={allClubs} adminList={clubNames} />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Home