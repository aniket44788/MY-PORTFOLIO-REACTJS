import React, { useEffect, useState } from 'react';
import axios from "axios"

import "./myproject.css"
function Myproject() {
    const [project, setProject] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const responseData = await axios.get(import.meta.env.VITE_API_URL_PROJECTGET);
            setProject(responseData.data.result)
            console.log(responseData.data.result)
        }
        fetchData()
    }, [])
    return (
        <>
            <div className="title">
                <h1>My Projects</h1>
            </div>
            <div className="imagesbox">
                {project.map((item, index) => (
                    <>
                        <div key={index} className="images">
                           <img src={`${import.meta.env.VITE_API_URL_LOCALHOST}${item.projectimages}`} />
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Myproject