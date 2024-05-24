import {React,useContext,useState} from 'react'
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { myContext } from '../Context/ContextApi';
import { useAuth0 } from '@auth0/auth0-react';
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const {darkClass,setDarkClass,toggle,settoggle,setPerimeter,setMoreData,setPage} =  useContext(myContext)
  const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
  const [hamburger,setHamburger] = useState('hide_burger')

  const [Mode,setMode] = useState(false)
  const lightMode = ()=>{
    setMode(true)
    setDarkClass('dark')
}
const darkMode = ()=>{
  setMode(false)
  setDarkClass('light')
}

const handleToggle = ()=>{
  if(toggle == 'hide'){
    settoggle('show')
  }else{
    settoggle('hide')
  }
}
const newsCategory = (category)=>{
    setPerimeter(category)
    setPage(1);
    setMoreData([])
    handleHamburger()
}

const handleHamburger = ()=>{
  if(hamburger == 'hide_burger'){
    setHamburger('show_burger')
  }else{
    setHamburger('hide_burger')
  }
}
  return (
    <>
     <nav className={`bg-[#F6F8FA] dark:bg-slate-900 ${darkClass}`}>
        <div className="navbar flex justify-center items-center gap-[15rem] font-[sans-serif] p-4">
            <h2 className="nav_title text-[2rem] font-semibold">My<span className='text-[#6F6AF8]'>Blog</span></h2>
            <ul className='nav_item flex items-center gap-12'>
              <div className={`flex items-center justify-center gap-4 text-nowrap ${hamburger} ${darkClass}`}>
                <li className='nav_link' onClick={  () => newsCategory('general')}>General Blogs</li>
                <li className='nav_link' onClick={  () => newsCategory('technology')}>Technology</li>
                <li className='nav_link' onClick={  () => newsCategory('business')}>Business</li>
                <li className='nav_link' onClick={  () => newsCategory('entertainment')}>Entertainment</li>
                <li className='nav_link' onClick={  () => newsCategory('health')}>Health</li>
                <li className='nav_link' onClick={ () => newsCategory('science')}>Science</li>
                <li className='nav_link' onClick={  () => newsCategory('sport')}>Sport</li>

              </div>
            <section className="user_profile">
              {
                isAuthenticated?(
                  <div>
                  <img src={user.picture} onClick={handleToggle} className='rounded-[50px] w-[2.8rem] border-1 hover:border-[#6F6AF8] cursor-pointer' title='Profile' alt={user.name}/>
                  <div className={`profile_detail ${toggle} ${darkClass}`}>
                    <h3 className="name"> <span className=' font-semibold'>Name</span>: {user.name}</h3>
                    <h3 className="email"><span className=' font-semibold'>Email</span>: {user.email}</h3>
                    <h3 className="email"><span className=' font-semibold'>Profile Updated</span>: {new Date(user.updated_at).toDateString()}</h3>
                    <p className="logout font-bold  capitalize text-red-600 hover:text-red-700 cursor-pointer hover:underline"onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign out</p>
                  </div>
              </div>
                ):(
                  <button className='login_btn btn' onClick={()=> loginWithRedirect()}>Log In</button>
                )
              }
            </section>
            {
              Mode == false?(
                document.body.style.background = 'white',
                <FiSun className='dark_icon' onClick={lightMode}/>
              ):(
                document.body.style.background = 'black',
                <FaRegMoon className='dark_icon hover:bg-transparent' onClick={darkMode}/>
              )
            }
            <GiHamburgerMenu onClick={handleHamburger} className='hamburger text-[3rem] cursor-pointer hidden'/>
            </ul>
        </div>
     </nav>
    </>
  )
}

export default Navbar
