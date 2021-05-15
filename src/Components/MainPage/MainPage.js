import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import BrowsbyCatogary from './BrowsbyCatogary'
import Explore from './Explore'
import Populartools from './Populartools'

const MainPage = () => {
    return (
        <div>
            <Banner/>
            <Populartools/>
            <Explore/>
            <BrowsbyCatogary/>
            <Footer/>
        </div>
    )
}

export default MainPage
