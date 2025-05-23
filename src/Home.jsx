import React from 'react'

import Navbar from './Containers/Navbar/Navbar'
import Content1 from './Containers/Content1/Content1'
import About from './Containers/About page/About'
import Services from './Containers/Services/Services'
import Myproject from './Containers/My Projects/Myproject'
import Nodemailer from './Containers/Contact & Footer/Nodemailer'
import End from "./Containers/End"

function Home() {
    return (
        <>
    <Navbar/>
            <section id="home"><Content1 /></section>
            <section id="about"><About /></section>
            <section id="services"><Services /></section>
            <section id="projects"><Myproject /></section>
            <section id="contact"><Nodemailer /></section>
            <End />

        </>
    )
}

export default Home