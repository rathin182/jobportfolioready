import React from "react";

const HeroSec = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row gap-10 w-full h-auto min-h-screen px-[10vw] py-[10vh] items-center"
    >
      {/* Text Section */}
      <div className="w-full md:w-[60%] flex flex-col justify-center text-xl md:text-2xl">
        <h1 className="text-base md:text-lg">Hi, I am</h1>
        <h2 className="text-2xl md:text-4xl font-bold">Rathin Bagchi</h2>
        <p className="text-sm md:text-base mt-3 text-justify tracking-tight">
          I'm a web developer and currently a 2nd-year student. I enjoy creating
          websites and working on different kinds of web projects. I have
          experience with Git, GitHub, Tailwind CSS, Express.js, MongoDB,
          React.js, Node.js, and JavaScript. I'm always curious to learn more
          and improve my skills. Whether it's designing a clean UI or building
          the backend logic, I love being involved in the full process of
          development.
        </p>

        {/* 👇 Button Section */}
        <div className="mt-5">
          <a
            href="/resume.pdf" // You can change this path to your actual resume file
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-full bg-[#8245ec] text-white hover:bg-[#6936c5] transition duration-300 text-sm md:text-base"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[40%] flex justify-center items-center">
        <img
          src="/Images/heroIMG.png"
          alt="hero"
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] object-cover rounded-full bg-[#ec4040] p-1"
        />
      </div>
    </div>
  );
};

export default HeroSec;
