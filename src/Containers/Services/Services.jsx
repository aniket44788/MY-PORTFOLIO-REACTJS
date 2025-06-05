import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./service.css"
function Services() {
  const [service, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const mydata = await axios.get(import.meta.env.VITE_API_URL_SERVICEGET)
      setServices(mydata.data.result)
      console.log(mydata.data.result)
    }
    fetchData()

  }, [])
  return (
    <>
        <div className="title">
                <h1>My Services</h1>
            </div>
      <div className="services-container">
        {service.map((item, index) => (
          <>
            <div key={index} className="service-card">
              <h2>{item.no}</h2>
              <h3>
                <span className="gradient-text">{item.title}</span>
              </h3>
              <p>{item.description}</p>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Services