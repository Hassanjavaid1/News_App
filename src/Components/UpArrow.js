import React from 'react'

function UpArrow() {
    const scrollToTop = ()=>{
       window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
    <div>
     <h2 title='Scroll To Top!' onClick={scrollToTop} className='scrolltoTop text-[2rem] border-2 border-[#6F6AF8] rounded-[50px] w-12 h-12 text-center font-mono cursor-pointer text-[#6F6AF8] z-50 fixed right-16 bottom-16'>&uarr;</h2>
    </div>
  )
}

export default UpArrow
