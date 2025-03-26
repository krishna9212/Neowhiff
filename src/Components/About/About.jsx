import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [content, setContent] = useState({
    title: "FOUNDER & DIRECTOR",
    name: "Arun Chauhan",
    description:
      "Arun Chauhan is the Founder and Director of Neowhiff, bringing over 12 years of expertise in sales and business development. His innovative leadership has driven the company to offer creative and results-oriented solutions that help businesses connect with their audiences. Arun’s strategic insights and passion for excellence continue to shape Neowhiff as a trusted leader in the industry.",
  });

  const contentData = {
    ex1: {
      title: "About Us - Neowhiff Solutions",
      name: "WHAT WE DO",
      description:
        "Neowhiff is a leading communication provider helping businesses connect with customers effectively through API-based solutions. We serve all types of businesses, from startups to market leaders, ensuring seamless communication across internet and telecom channels.",
    },
    ex2: {
      title: "Our Story",
      name: "Neowhiff Story",
      description:
        "We empower organizations with effective communication strategies and advanced tools.",
      additionalInfo:
        "Established in July 2021 | 100+ Enterprise Clients by May 2023 | 250+ Clients by March 2024",
    },
    ex3: {
      title: "Company Vision",
      name: "OUR VISION",
      description:
        "Our vision is to build a high-quality, secure communication platform for businesses to connect, engage, and create lasting relationships with customers.",
    },
    ex4: {
      title: "Company Mission",
      name: "OUR MISSION",
      description:
        "Our mission is to develop a secure, cloud-based communication platform that enables businesses to engage with customers effortlessly.",
    },
  };

  return (
    <section className="about-container">
      {/* Left Section - Interactive Boxes */}
      <div className="about-options">
        {Object.keys(contentData).map((key) => (
          <div
            className="about-box"
            key={key}
            onClick={() => setContent(contentData[key])}
          >
            <h1 style={{ fontFamily: "inherit", fontWeight: "900" }}>
              {contentData[key].name}
            </h1>
          </div>
        ))}
      </div>

      {/* Right Section - Dynamic Content */}
      <article className="about-content">
        <h3>{content.title}</h3>
        <h2 style={{ color: "#ffa641" }}>{content.name}</h2>
        <p>{content.description}</p>
        {content.additionalInfo && (
          <p className="highlight-text" style={{ color: "black" }}>
            {content.additionalInfo}
          </p>
        )}
      </article>
    </section>
  );
};

export default About;
