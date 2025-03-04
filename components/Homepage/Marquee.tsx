import React from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'

const scrollItems = [
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque natus consequatur rem atque quia quibusdam consequuntur quas tenetur qui?",
      name: "John",
      title: "Lead",
      
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque natus consequatur rem atque quia quibusdam consequuntur quas tenetur qui?",
      name: "Smith",
      title: "Lead",
      
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque natus consequatur rem atque quia quibusdam consequuntur quas tenetur qui?",
      name: "Laurie",
      title: "Lead",
      
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque natus consequatur rem atque quia quibusdam consequuntur quas tenetur qui?",
      name: "Mike",
      title: "Lead",
      
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque natus consequatur rem atque quia quibusdam consequuntur quas tenetur qui?",
      name: "Kevin",
      title: "Lead",
      
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cumque natus consequatur rem atque quia quibusdam consequuntur quas tenetur qui?",
      name: "Lee",
      title: "Lead",
      
    },
]

const Marquee = () => {
  return (
    (<div className="flex flex-col h-[40rem] antialiased">
        <InfiniteMovingCards items={scrollItems} 
              direction='right' 
              speed='slow' />
    </div>)
  )
}

export default Marquee