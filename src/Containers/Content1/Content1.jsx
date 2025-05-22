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
    return (
        <>
            {contentpage.map((item, index) => {
                return (
                    <>
                        <div class="profilebox">
                            <img src={`${import.meta.env.VITE_API_URL_MAINURL}${item.profile}`} alt={item.profile} />
                            <h1>I'm <span class="name">{item.name}</span></h1>
                            <p>
                                {item.description}
                            </p>
                        </div>

                    </>
                )
            })}

        </>
    )
}

export default Content1