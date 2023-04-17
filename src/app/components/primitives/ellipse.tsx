import { Children } from 'react'

const Ellipse = () => {
  return (
    <div className="ellipse items-center justify-center border-2 border-black bg-cream py-3 pt-1 text-center text-2xl text-lg font-black text-pink text-pink md:h-[64px] md:w-[144px] md:pt-4 md:text-base">
      {Children}
    </div>
  )
}

export default Ellipse
