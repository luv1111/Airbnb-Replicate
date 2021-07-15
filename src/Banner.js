import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";

import Search from './Search'
import Card from './card'


function Banner() {
    const [showSearch, setShowSearch] = useState
        (false);
    return ( <
        div className = 'banner' >
        <
        div className = 'banner__search' > {
            showSearch && < Search / >
        } <
        Button onClick = {
            () => setShowSearch(!showSearch)
        }

        className = 'banner__searchButton'
        variant = 'outlined' > Search Dates <
        /Button>

        <
        /div>


        <
        div className = 'banner__info' >
        <
        h1 > Not sure where to go ? Perfect. < /h1>  <
        h5 > Discover Experiences Unique activities with local experts– in person or online. <
        /h5> <
        Button variant = 'outlined' > Explore Nearby < /Button>  < /
        div >


        <
        /div>
    )
}

export default Banner;