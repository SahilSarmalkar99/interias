import React from 'react'
import img from "../../assets/shop/shop1.jpeg";

const Image1 = () => {
  return (
    <div>
        <div className="mt-16 w-full overflow-hidden rounded-[24px]">
          <img
            src={img}
            alt="Interior"
            className="w-full md:h-[520px] object-cover"
          />
        </div>
    </div>
  )
}

export default Image1