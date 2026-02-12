import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import useRevealAnimation from '../../hooks/useRevealAnimation'

const Content1 = () => {
  const sectionRef = useRef(null);
  useRevealAnimation(sectionRef)
  return (
    <section ref={sectionRef}>
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
              Our approach weaves innovation, intention, and craftsmanship to create spaces that truly resonate.
            </p>

            <Link to="/about" >
            <div className="mt-4 flex items-center gap-2 text-xl sm:text-black md:text-sm">
              <span>About Us</span>
              <span className="text-lg">↗</span>
            </div>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Content1