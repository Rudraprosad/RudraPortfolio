import React, { useState } from "react";
import axios from "axios";
import "./Info.scss";
import Button from "../Button/Button";
import { SyncLoader } from "react-spinners";



const infoMeData = {
  one: {
    content: [
      {
        header: "COPYRIGHT",
        paragraphs: [
          "PRIVACY POLICY || TERMS OF USE",
          "© 2025 rudrapaulportfolio.vercel.app. All rights reserved."
        ],
      },
    ],
  },
};



const Info = () => {
  const data = infoMeData["one"];
  
  const [userName, setUserName] = useState("");
   const [userEmail, setUserEmail] = useState("");
    const [userContact, setUserContact] = useState("");
     const [userMessage, setUserMessage] = useState("");
     const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [isSending, setIsSending] = useState(false);
     const handleSubmit = async (e) => {
      e.preventDefault();
      
        setLoading(true);
        setIsSending(true)

      try{
     const response = await axios.post("https://mine-crafted-portfolio-backend-1.onrender.com/newUser", {
      name: userName,
      email: userEmail,
      contact: userContact,
      message: userMessage,
     });

     console.log(response.data);

     setUserName("");
     setUserEmail("");
     setUserContact("");
     setUserMessage("");
      
     setLoading(false);
     setIsSending(false);
     setSuccessMessage("Message sent successfully!");

     setTimeout(() => {
      setSuccessMessage("");
     }, 3000);

    } catch (error) {
      console.error("Error sending message:", error);
    }
    };
  const parseText = (text) => {
    const parts = text.split(/(\*[^*]+\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const content = part.slice(1, -1);
        return (
          <span key={index} className="yellow-text">
            {content}
          </span>
        );
      }
      return part;
    });
  };



  return (
    <>
      <div className="data-container">
        <Button href="https://www.instagram.com/vulgardisplaypower?igsh=ZXloMXZyOWxhZmRp" type={"link"}>
          my social links
        </Button>

<h2 className="hire-me-title">⚡ Hire Me</h2>
          <p className="hire-me-subtitle">
            You imagine, I code
            <br />
            Got a project in mind? Let&apos;s build something awesome together!
            Reach out via email or give me a call.
          </p>

<div>
  <h2 className="contact-form-title">
    Contact Me 
  </h2>
  <h1 className="hire-me-subtitle">
  my email: paulrudraprosad1@gmail.com
 
  </h1>
  <h1 className="hire-me-subtitle">
    my contact Number: 8670848233
  </h1>

  <form className="contact-form" onSubmit={handleSubmit}>
<div className="contact-form-title">
    <label htmlFor="name" >Your Name: </label>
    <input
    className="contact-input"
    type="text"
    id="name"
    name="name"
    palceholder="Enter your name"
    onChange={(e) => setUserName(e.target.value)}
    value={userName}
    required
    />
</div>

<div className="contact-form-title">
    <label htmlFor="email" >Your Email: </label>
    <input
    className="contact-input"
    type="text"
    id="email"
    name="email"
    palceholder="Enter your email"
    onChange={(e) => setUserEmail(e.target.value)}
    value={userEmail}
    required
    />
</div>

<div className="contact-form-title">
    <label htmlFor="contact" >Your Number:</label>
    <input
    className="contact-input"
    type="number"
    id="contact"
    name="contact"
    palceholder="Enter your contact number"
   onChange={(e) => setUserContact(e.target.value)}
    value={userContact}
    required
    />
</div>

<div className="contact-form-title">
    <label htmlFor="message">Your Thoughts:</label>
    <input
    className="contact-textarea"
    type="text"
    id="message"
    name="message"
    palceholder="Enter your message"
    onChange={(e) => setUserMessage(e.target.value)}
    value={userMessage}
    required
    />
</div>
 

<Button className="contact-submit" type="submit" disabled={isSending}>
 {isSending ? 'sending' : ' Send Me a Message'}
  <SyncLoader className="loader"  loading={loading}> </SyncLoader>
</Button>


{successMessage && (
  <p className="contact-status success"> {successMessage} </p>
)}

</form>
</div>

<div className="info-section-header">
  🤖 my freelance work
  </div>

  <div className="hover-reveal-container">
    <p className="info-section-header">Vibecheck- 
itinerary Platform</p>
    <img
      className="hover-reveal-image"
      src="/images/vibecheck.webp"
      alt="Client testimonial"
    />
  </div>

 <div className="hover-reveal-container">
    <p className="info-section-header">Mindful- Mental health site</p>
    <img
      className="hover-reveal-image"
      src="/images/mindful.webp"
      alt="Client testimonial"
    />
  </div>

 <div className="hover-reveal-container">
    <p className="info-section-header">Devorbit- Freelance site</p>
    <img
      className="hover-reveal-image"
      src="/images/devorbit.webp"
      alt="Client testimonial"
    />
  </div>

        
      </div>
      {data.content.map((section, index) => (
          <div key={index} className="data-section">
            <h2 className="info-section-header1">{section.header}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={`${index}-${pIndex}`} className="section-paragraph1">
                {parseText(paragraph)}
              </p>
            ))}
          </div>
        ))}
    </>
  );
};

export default Info;