import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import 'react-loading-skeleton/dist/skeleton.css'
import React, { Suspense } from 'react';
import UpArrow from './Components/UpArrow';
import LoadingSkeleton from './Components/LoadingSkeleton';
const BlogHero = React.lazy(() => import('./Components/BlogHero'));
const Blogs = React.lazy(() => import('./Components/Blogs'));
function App() {
  return (
    <div className="componentContainer">
     <Navbar/>
     <Suspense  fallback={<LoadingSkeleton/>}>
      <BlogHero/>
      <Blogs/>
     </Suspense>
      <Footer/>
      <UpArrow/> 
    </div>
  );
}

export default App;

