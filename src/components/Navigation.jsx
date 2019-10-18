import React from 'react';


import {NavLink} from 'react-router-dom'




function Navigation () {
    return (
      <div className='Navigation'>
        <NavLink to='/category/top_rated' >Top rated</NavLink>
        <NavLink to='/category/upcoming' >Upcoming</NavLink>
        <NavLink to='/category/popular' >Popular</NavLink>
      </div>
    );
}

export default Navigation;