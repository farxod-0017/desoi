import React from 'react'
import HomeHero from '../components/HomeHero'
import BestSellers from '../components/BestSellers'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import FreshP from '../components/FreshP'
import Ingredients from '../components/Ingredients'
import NewP from '../components/NewP'
import ReferF from '../components/ReferF'
import Join from '../components/Join'

import fresh from '../images/freshP.png'

function HomePage() {
  return (
    <div>
      <HomeHero/>
      <BestSellers title="Our best sellers"/>
      <Banner/>
      <Brands/>
      <FreshP type="New in" title="Rich and fruity" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " img={fresh} />
      <Ingredients/>
      <NewP/>
      <ReferF/>
      <Join/>
    </div>
  )
}

export default HomePage