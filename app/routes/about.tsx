import React from 'react'
import { MyFotter } from '~/components/MyFotter'
import { MyHeader } from '~/components/MyHeader'
import { MyHero } from '~/components/MyHero'

const about = () => {
  const user = {
    title: 'About Us',
    subtitle: 'We are a team of passionate developers.',
    image: 'https://www.rentallscript.com/resources/content/images/2021/09/React--1-.gif',
  }
 
  return (
   <div>
    <MyHeader/>
     <MyHero {...user}  />
    <MyFotter/>
    
    
   </div>
  )
}

export default about