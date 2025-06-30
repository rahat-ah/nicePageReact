import { useState } from "react"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./sectionThree"
import SectionFour from "./SectionFour"
import SectionFive from "./SectionFive"
import SectionSix from "./SectionSix"
import SectionSeven from "./sectionSeven"

function Main() {
  const [topicInView,setTopicInView] = useState(false)
  return (
    <>
      <SectionOne onTopicViewChenge = {setTopicInView} />
      <SectionTwo topicViewStatus={topicInView} />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>  
  )
}

export default Main