import React, { useEffect, useState } from 'react'
import "./about.css"
import axios from 'axios';
function About() {
    const [aboutpage, setaboutpage] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const fetchApi = await axios.get(import.meta.env.VITE_API_URL_ABOUTPAGE)
            setaboutpage(fetchApi.data.result)
            // console.log(fetchApi.data)
        }
        fetchData()
    }, [])
    return (
        <>
            {aboutpage.map((allItems, index) => {
                return (
                    <>
                        <section className="about-section">
                            <h2 className="section-title">
                                {allItems.abouttitle}
                                <span className="triangle" />
                            </h2>
                            <div className="about-container">
                                <div className="about-image">
                                    <img src={`${import.meta.env.VITE_API_URL_MAINURL}${allItems.myimage}`} alt="Item" />

                                </div>
                                <div className="about-content">
                                    <p>
                                        {allItems.about}
                                    </p>
                                    <div className="skills">
                                        <div className="skill">
                                            <span>HTML & CSS</span>
                                            <div className="bar">
                                                <div className="fill htmlcss"></div>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <span>React JS</span>
                                            <div className="bar">
                                                <div className="fill reactjs"></div>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <span>JavaScript</span>
                                            <div className="bar">
                                                <div className="fill javascript"></div>
                                            </div>
                                        </div>
                                        <div className="skill">
                                            <span>Express JS</span>
                                            <div className="bar">
                                                <div className="fill expressjs"></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </>

                )
            })}





        </>
    )
}

export default About