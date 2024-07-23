import React from 'react'

const Hero = () => {
  return (
    <div className="font-abc pt-20 bg-gray-400 text-gray-950" id='home'>
      <div>
        <p className=" uppercase text-center pt-20 pb-10 md:pb-20">
          Let us build something together
        </p>
        <h1 className="text-4xl md:text-6xl text-center font-semibold">
          Hi, I'm <span className='text-blue-600'>Patrick Iyiakimo.</span> An aspirant Backend Engineer
        </h1>
        <p className='text-center pt-7'>
          I am an aspiring backend engineer with a strong passion for creating
          efficient, scalable, and reliable server-side applications.
        </p>
      </div>
    </div>
  );
}

export default Hero