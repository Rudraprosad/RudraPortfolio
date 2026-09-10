import React, { useState } from "react";
import axios from "axios";
import "./Info.scss";
import Button from "../Button/Button";

const infoMeData = {
  one: {
    content: [
      {
        header: "💭 About this minecraftfolio",
        paragraphs: [
          "This folio was created just to showcase my creativty and nature towards the world! Click the button above to contact me and hire me to create a portfolio like this from baking textures to custom camera movements!!!",
        ],
      },
      {
        header: "🎉 Special Thanks, Credits, & Inspiration",
        paragraphs: [
          " - A big thanks to *MCprep Blender addon creators*. It saves so much time working with Minecraft-like things in Blender. Would not have been possible otherwise.",
          " - Special thanks to ❤️*my mom*❤️ for the inspiration for the house design!!!",
          " - Thank you *JDGraphics*, the Minecraft font is super awesome.",
          " - Big shoutout to *Andrew Won's three.js journey* course and all the helpers in the Discord channel. If I didn't start my journey with this course, I don't think I'd be where I am now.",
          " - Shoutout to *Shraddha Mam from Apna College*, learned a lot on the MERN stack app building.",
          " - Audio was sourced from *myinstants.com, voicemod.net, and downloads.khinsider.com*",
          " - Amazing mob models all credited to *Vincent Yanez* on Sketchfab!! Thank you for them Vincent!",
        ],
      },
      {
        header: "🤖 Tools, Technologies, & More",
        paragraphs: [
          " - Entire project was spanned over two months, some days I spent 12 hours and some days I spent like 30 minutes, so I don't even remember how long it took me (at least 100 hours), but it was really fun!!!",
          " - *Blender* was used for all 3D stuff (driver animations, baking, modeling, rigging etc.). Notable plugins include MCprep, SimpleBake, and UVPackMaster 3.",
          " - *Audacity* was used to convert mp3 files into ogg files for smaller file sizes and retaining quality.",
          " - *Figma* was used to edit baked textures and create custom SVGs.",
          " - *Poly Haven* was used for the HDRI.",
          " - Global state management stores were handled with *zustand*.",
          " - Vite's default *React template* was used.",
          " - *SCSS* was the choice for the website styles.",
          " - *Vercel* was used for deployment and *SquareSpace* for the domain name. Vercel was free which is amazing. Domain name cost 14 USD for one year.",
          " - React three fiber and lot's of react three drei helpers were used to speed up the 3D web development process.",
          " - Notable command line tools like *gltf-transform* and *gltfjsx* were used to optimize models for the web and code.",
          " - All meshes utilized *KTX textures* and were created using KTX Software on GitHub.",
          " - *Transfonter* was used to convert fonts from otf to woff files.",
          " - *Favicon generator* was used to convert PNG image to well set up favicons for different devices and browsers.",
          " - Read a lot of documentation. A lot. I really appreciate all of those who spent so much time on the documentation for their tools it really helps out a ton. The react three drei docs are incredible.",
          " - *Squoosh* by Google was used for quick image compression and conversion to webp image format.",
          " - *ChatGPT* helped out with some of the redundant code really well.",
          " - Online viewers like *sandbox.babylonjs.com*, *gltf-viewer.donmccurdy.com*, and *gltf-report.com* were incredibly helpful for quickly reviewing model animations and textures, saving a lot of time.",
          " - I'm sure I'm forgetting a lot of things at the moment, but will come back here to update this list. Feel free to reach out to me at *paulrudraprosad1@gmail.com* if you have any questions!",
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

     const handleSubmit = async (e) => {
      e.preventDefault();

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
 

<Button className="contact-submit" type="submit">
  Send Me a Message
</Button>

{successMessage && (
  <p className="success"> {successMessage} </p>
)}

</form>
</div>


        {data.content.map((section, index) => (
          <div key={index} className="data-section">
            <h2 className="info-section-header">{section.header}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={`${index}-${pIndex}`} className="section-paragraph">
                {parseText(paragraph)}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Info;