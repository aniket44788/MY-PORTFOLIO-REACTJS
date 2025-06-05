import axios from "axios"
import "./content1.css"
import React, { useEffect, useState } from 'react'

function Content1() {
    const [contentpage, setContentpage] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(import.meta.env.VITE_API_URL_RESUMEGET);
            setContentpage(response.data.result)
            // console.log(response)
        }
        fetchData()
    }, [])
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf"
        link.download = "resume.pdf";
        link.click();
    };
    return (
        <>

            {contentpage.map((item, index) => {
                return (
                    <>
                        <div class="profilebox">
                            <img src={`${import.meta.env.VITE_API_URL_MAINURL}${item.profile.replace(/\\/g, "/")}`} alt={item.profile} />
                            <h1>I'm <span class="name">{item.name}</span></h1>
                            <p>
                                {item.description}
                            </p>
                            <br />
                            <br />
                            <div className="p-4">
                                <button onClick={handleDownload} class="button">
                                    <span> Download Resume </span>
                                </button>

                            </div>

                        </div>

                    </>
                )
            })}
        </>
    )
}

export default Content1