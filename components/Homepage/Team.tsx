import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import img1 from '@/public/images/person-one.jpg'
import img2 from '@/public/images/person-two.jpg'
import img3 from '@/public/images/person-three.jpg'
import img4 from '@/public/images/person-four.jpeg'

const people = [
  {
    id: 1,
    name: "John",
    designation: "Lead",
    image: img1.src
  },
  {
    id: 2,
    name: "Smith",
    designation: "Lead",
    image: img2.src
  },
  {
    id: 3,
    name: "Laurie",
    designation: "Lead",
    image: img3.src
  },
  {
    id: 4,
    name: "Mike",
    designation: "Lead",
    image: img4.src
  },
]

const Team = () => {
  return (
     <div className="flex -mt-3 flex-row">
        <AnimatedTooltip items={people}/>
      </div>
     
  )
}

export default Team