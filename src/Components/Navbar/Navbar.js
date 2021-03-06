import React from 'react'
import "./Navbar.css";
import requests from "../../helpers/requests";

const Navbar = ({setselectedOption}) => {
    return (
        <div className="nav">
            <h2 onClick={()=>setselectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={()=>setselectedOption(requests.fetchTV)}>Movie</h2>
            
        </div>
    )
}

export default Navbar
