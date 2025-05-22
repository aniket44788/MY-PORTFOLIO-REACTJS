import React from 'react'
import axios from "axios"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import "./nodemailer.css"
import { useState } from 'react';
function Nodemailer() {
    const [message, setMessage] = useState("")
    const [mail, setMail] = useState({
        name: "",
        email: "",
        msg: "",
    });

    const mailChange = (e) => {
        setMail({
            ...mail,
            [e.target.name]: e.target.value
        })
    }
    const submitmail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL_NODEMAILER, mail);
            alert("Message sent successfully!");
            setMail({
                name: "",
                email: "",
                msg: ""
            })
            console.log(response)
        } catch (error) {
            console.log(error , "Failed to send Email");
            setMessage("Failed to send Mail")
        }
    }
    return (
        <>
            <div className="main-div">
                <div className="personalinfo">.

                    <div className="contact-card">
                        <h2 className="contact-title">Let's talk</h2>
                        <p className="contact-text">
                            I'm currently available to take on new projects, so feel free to send
                            me a message about anything that you want me to work on. You can
                            contact anytime.
                        </p>
                        <div className="contact-details">
                            <a className="contact-link">
                                <span className='icons-email'> <TfiEmail /> </span>
                                aniketyt266@gmail.com
                            </a>
                            <a className="contact-link">
                                <span className='icons-call'> <IoCall /> </span>    +91 83519 27365 <br />
                                <span className='icons-whatsapp'> <TbBrandWhatsappFilled /> </span>    +91 62305 08024
                            </a>

                            <p className="contact-location" >

                                <span> <FaLocationDot /> </span> Dharamshala HP    </p>
                        </div>
                    </div>
                </div>

                <div className="nodemailerinfo">
                    <div className="form-box">
                        <form onSubmit={submitmail}>
                            <label> Your Name</label>
                            <input value={mail.name} name='name' onChange={mailChange}  required placeholder='Enter your name' type="text" /> <br />

                            <label > Your Email</label>
                            <input value={mail.email} name='email' onChange={mailChange}  placeholder='Enter your email' required type="email" /> <br />

                            <label>Write your message here </label>
                            <input value={mail.msg} name='msg' onChange={mailChange} placeholder='Drop your message ' required type="text" /> <br />

                            <button type='Submit'> Submit </button>
                        </form> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default Nodemailer