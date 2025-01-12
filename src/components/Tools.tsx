import React from 'react'
import { AnimatedBeamDemo } from './AnimatedBeam';

const Tools = () => {
  return (
    <>
      <div className="main w-[80rem]">
        <div className="head flex justify-center items-center mb-3">
          <h2 className="text-5xl font-bold">
            The Tools that Power Your Success
          </h2>
        </div>
        <div className="head-cnt flex justify-center items-center">
          <p className='text-2xl '>
            Access the power of premium tools from trusted partners,<span className='text-logo-gradient'> all
            integrated into one seamless experience</span>
          </p>
        </div>
        <div className="animated-beam mt-5">
            <AnimatedBeamDemo />
        </div>
      </div>
    </>
  );
}

export default Tools