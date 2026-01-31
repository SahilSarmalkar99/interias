import React from 'react'

const Content1 = () => {
  return (
    <div>
        <div className="flex md:flex-row flex-col justify-between items-start h-[300px] md:h-full">
          {/* LEFT: STUDIO */}
          <div className="flex items-center gap-3 ">
            <div className="w-2.5 h-2.5 rounded-full bg-[#807B6C]" />
            <p className="text-2xl md:text-sm">Studio</p>
          </div>

          {/* CENTER: HEADING */}
          <div className="w-[300px] md:max-w-[360px]">
            <h2 className="text-[28px]  md:text-[32px] leading-tight tracking-tighter">
              Rooted in Clear Vision. <br />
              Driven by Detail.
            </h2>
          </div>

          {/* RIGHT: DESCRIPTION */}
          <div className="max-w-[360px]">
            <p className="text-[18px]  md:text-[16px] leading-tight tracking-tighter text-black/80">
              Our design philosophy blends story, structure, and soul to craft
              environments.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xl sm:text-black md:text-sm">
              <span>About Us</span>
              <span className="text-lg">↗</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Content1