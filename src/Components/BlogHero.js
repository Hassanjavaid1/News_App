import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../Context/ContextApi";
import axios from "axios";
function BlogHero() {
  const {darkClass,perimeter} = useContext(myContext)
 const [data,setData] = useState([])
  const fetchData = async()=>{
   let response = await axios.get(`https://newsapi.org/v2/everything?q=${perimeter}&apiKey=5c5d00e5c5ac482cbe4ddc59aef9ef68`)
    setData(response.data.articles)
 }
 useEffect(()=>{
   fetchData()
  },[perimeter])
  const randomNews = Math.floor(Math.random() * data.length)
  const {author,title,description,publishedAt,urlToImage,url} = data[randomNews] || []
  return (
    <>
      <article>
        <div className={`HeroSection ${darkClass} bg-[#eaedf1] px-12 py-8 flex items-center justify-center gap-4 w-[90%] overflow-hidden m-auto mt-16`}>
          <img src={urlToImage} title={author} className="hero_img h-80 w-[35rem] object-cover" alt="" />
          <div className="heroBlog_detail flex flex-col items-baseline gap-3">
            
            <h3 className="blog_category hover:underline"><a href={url} target="_blank" rel="noopener noreferrer">{author}</a></h3>
            <h2 className="blog_title hover:underline"><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
            <p className="blog_summary">
              {description}
            </p>
            <div className="bloger_detail flex items-center gap-3">
                <img src={urlToImage} className="bloger_img" alt="" />
                <div className="moreDetail">
                    <h4 className="bloger_name">{author}</h4>
                    <p className="blog_date_time">{new Date(publishedAt).toDateString()} <span className="blog_release_time">{new Date(publishedAt).toLocaleTimeString()}</span></p>
                </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BlogHero;
