import React from 'react'
import '../App.css'
import Hero from './Hero'
import Categories from './Categories'
import RecentBlog from './RecentBlog'

const Home = () => {
  return (
    <>
    <div className='emptySpace'></div>
    <Hero/>
    <Categories/>
    <RecentBlog/>
    </>
  )
}

export default Home