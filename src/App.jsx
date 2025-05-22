import React from 'react'
import Content1 from './Containers/Content1/Content1'
import Navbar from './Containers/Navbar/Navbar'
import About from './Containers/About page/About'
import Services from './Containers/Services/Services'
import Myproject from './Containers/My Projects/Myproject'
import Nodemailer from './Containers/Contact & Footer/Nodemailer'
import End from './Containers/End'
function App() {
  return (
    <>
      <Navbar/>
      <Content1 />
      <About />
      <Services />
      <Myproject />
      <Nodemailer/>
      <End/>
    </>
  )
}

export default App