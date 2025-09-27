import { useState } from 'react'
import './App.css'
import Header from "./components/header.jsx"
import Footer from "./components/footer.jsx"
import Section from "./components/section.jsx"
import Subsection from "./components/subsection.jsx"

export default function App() {
  return(
  <>
  <Header />
  <Section title={"Highlights"}>
    <Subsection title={"Remember to live out our values"}>
      <ol>
            <li>Relentless Learning and Growth</li>
            <li>Creative Problem Solving</li>
            <li>Curiosity-Driven Exploration</li>
      </ol>
    </Subsection>
    <Subsection title={"Upcoming Events"}>
      <ul>
            <li><b>Feb 7: </b> Employee Hack-a-ston</li>
            <li><b>Mar 7: </b> Food Bank Volunteering</li>
            <li><b>Apr 4: </b> Company Retreat</li>
      </ul>
    </Subsection>
  </Section>
  <Section title={"Latest Event"}>
    <>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi laudantium eos atque sed debitis eum deleniti cumque saepe aut voluptatibus, dolores commodi corporis quibusdam
            numquam perferendis, molestias tenetur suscipit!.</p>     
  <img
    src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    style={{ width: "20%" }}
    alt="Kickball outing"
  />
  <img
    src="https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    style={{ width: "20%" }}
    alt="Happy Hour"
  />
</>

  </Section>

  <Footer />
  
  
  </>);
}


