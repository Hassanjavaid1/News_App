import React from 'react'
import Skeleton from 'react-loading-skeleton'

function PostSkeleton() {
  return (
    <>
       <div className="blog flex flex-col items-center w-full sm:w-96 gap-4 bg-[#f5f9ff] p-4 mt-7">
                  <Skeleton height={"13rem"} width="22rem" />{" "}
                  {/* Image Skeleton */}
                  <div className="blog_detail flex flex-col items-baseline gap-2 w-full">
                    <Skeleton width="7rem" /> {/* Category Skeleton */}
                    <Skeleton width="15rem" height={24} />{" "}
                    {/* Title Skeleton */}
                    <Skeleton count={3} width="19rem" />{" "}
                    {/* Summary Skeleton */}
                    <div className="bloger_detail flex items-center gap-3 w-full mt-3">
                      <Skeleton circle={true} height={40} width={40} />{" "}
                      {/* Author Image Skeleton */}
                      <div className="moreDetail w-full">
                        <Skeleton width="50%" /> {/* Author Name Skeleton */}
                        <Skeleton width="70%" /> {/* Date and Time Skeleton */}
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default PostSkeleton
