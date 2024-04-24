import React from 'react'
import ShopHero from '../components/ShopHero'
import PdPhero from '../components/PdPhero'
import BenefitSwiper from '../components/BenefitSwiper'
import Enjoy from '../components/Enjoy'
import Unique from '../components/Unique'
import FreshP from '../components/FreshP'
import yellow from '../images/yellow.png'
import Faq from '../components/Faq'
import Join from '../components/Join'

function PdPPage() {
  return (
    <div>
      <ShopHero/>
      <PdPhero/>
      <BenefitSwiper/>
      <Enjoy/>
      <Unique/>
      <FreshP type="Try this" title="Variety Pack" text="Dont know what to choose? Our variety pack is a three-bottle kit with De Sois Light, Medium and Full bodied flavors. Taste all 3 flavors at once!" img={yellow} />
      <Faq/>
      <Join/>
    </div>
  )
}

export default PdPPage