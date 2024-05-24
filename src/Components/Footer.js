import React, { useContext } from 'react'
import { myContext } from '../Context/ContextApi'

function Footer() {
  const {darkClass} = useContext(myContext)
  return (
    <>
      <section className={`footer ${darkClass} bg-[#d9e4f3]`}>
        <div className="sub_footer text-center p-4 text-lg font-[sans-serif] mt-8">
            <h3>All rights reserved Developed By<span className='text-[#4d47fa]'> Hassanjavaid!</span></h3>
        </div>
      </section>
    </>
  )
}

export default Footer
