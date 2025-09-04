import React from "react";

const Hero = () => {
  return (
    <div className='h-[80vh] w-full bg-[url("/hero.png")] bg-cover bg-center flex'>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="block">
          <h2 className="leading-[80px] tracking-[-2px] bg-gradient-to-b from-white/10 via-white to-white/100 bg-clip-text text-transparent font-medium text-7xl block">
            More than.
          </h2>
          <h2 className="leading-[80px] tracking-[-2px] text-white font-medium text-7xl block">
            just a game.
          </h2>
          <h2 className="leading-[80px] tracking-[-2px] bg-gradient-to-b from-white/100 via-white to-white/10 bg-clip-text text-transparent font-medium text-7xl block">
            It’s a lifestyle.
          </h2>
        </div>
        <div className="font-normal text-[20px] text-[#FEFEFE] leading-[32px] opacity-80">
            Whether you’re just starting out, have played <br />
            your whole life or you're a Tour pro, your <br />
            swing is like a fingerprint.
        </div>
      </div>
    </div>
  );
};

export default Hero;

