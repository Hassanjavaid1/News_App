import axios from 'axios'
import React, { useContext, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { myContext } from '../Context/ContextApi'
import PostSkeleton from '../PostSkeleton'
function Blog() {
    const {darkClass,perimeter,setPage,page,moreData,setMoreData} = useContext(myContext)
    const [isLoading,setisLoading] = useState(true)
const fetchMoreData =async ()=>{
  try{
    //  let response = await axios.get(`https://newsapi.org/v2/everything?q=${perimeter}&apiKey=5dd5f0cda53b40fe99097c7db8ca2753&page=${page + 1}&pageSize=10`)
    // let moreRes = response.data.articles
    // setMoreData(prevData => [...prevData, ...moreRes])
    // setPage(prevPage => prevPage + 1)
    setTimeout(() => {
      setisLoading(false)
    }, 2000);
  }
  catch(error){
    console.log(error)
  }
}

 return (
    <>
    <div className="blog_Container w-fit m-auto mt-12">
        <h2 className={`latestBlog text-3xl font-[sans-serif] bg-[#EAEDF1] py-[0.4rem] px-3 ${darkClass}`}>Latest Blog!</h2>
       <section className="blogs">
          {moreData.map(({author,title,description,publishedAt,urlToImage,source,url},index)=>(
            <React.Fragment key={index}>
            { 
            isLoading? <PostSkeleton/> :(
              
      <div key={index} className={`blog ${darkClass} flex flex-col items-center w-96 gap-4 bg-[#EAEDF1] p-4 mt-7 transition duration-300`}>
          <img src={urlToImage} title={source.name} className="blog_img h-56 transition duration-100 hover:brightness-75" alt="" />
          <div className="blog_detail flex flex-col items-baseline gap-2">
            <h3 className="blog_category hover:underline"> <a href={url} target="_blank" rel="noopener noreferrer">{source.name}</a></h3>
            <h2 className="blog_title hover:underline"><a href={url} target="_blank" rel="noopener noreferrer"> {title}</a></h2>
            <p className="blog_summary">
{description}
            </p>
            <div className="bloger_detail flex items-center gap-3">
                <img src={urlToImage} className="bloger_img" title='Author Detail' alt="" />
                <div className="moreDetail">
                    <h4 className="bloger_name">{author}</h4>
                    <p className="blog_date_time">{new Date(publishedAt).toDateString()} <span className="blog_release_time">{new Date(publishedAt).toLocaleTimeString()}</span></p>
                </div>
            </div>
          </div>
        </div>  
        )
      }
      </React.Fragment>

                  ))}
        </section>
        <InfiniteScroll
  dataLength={moreData.length} 
  next={fetchMoreData}
  hasMore={moreData.length < 80}
  loader={<h4 className='btn block m-auto mt-12 uppercase font-semibold text-center w-max hover:cursor-default'>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center'}} className='btn block m-auto mt-12 uppercase font-semibold text-center w-max hover:cursor-default'>End of the feed</p>
  
  }>

  </InfiniteScroll>
    </div>
    </>
  )
}

export default Blog
