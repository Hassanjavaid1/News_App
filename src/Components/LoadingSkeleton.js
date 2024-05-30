import React from "react";
import Skeleton from "react-loading-skeleton";

function LoadingSkeleton() {
  return (
    <>
      <div className="skeletonContainer" key={'skeleton'}>
        <div className="subContainer flex flex-col justify-center items-center mt-16 mb-16">
          <div className="HeroSection hero_skeleton flex items-center gap-4 bg-[#f5f9ff] px-[5rem] py-[3rem]">
            <Skeleton height={"18rem"} width={"33rem"} className="hero_skeleton_img" />
            <div className="hero_skeleton_detail flex flex-col align-baseline gap-y-3">
              <Skeleton width={"15rem"} height={"1.7rem"} />
              <Skeleton width={"25rem"} height={"1.7rem"} />
              <Skeleton width={"25rem"} height={"1.7rem"} />
              <div className="profileSkeleton flex items-center gap-3 mt-3">
                <Skeleton circle width={"3rem"} height={"3rem"} />
                <div>
                  <Skeleton width={"5rem"} height={"1.2rem"} />
                  <Skeleton width={"7rem"} height={"1.2rem"} />
                </div>
              </div>
            </div>
          </div>
          <div className="blogPageSkeleton mt-28">
            <Skeleton height={"3rem"} width={"15rem"} className="latestBlog" />
            <div className="blogSubSkeleton grid grid-cols-3 gap-3">
                {
             [1, 2, 3,4,5,6].map((_, index) => (
               <div className="skeleton_item flex flex-col items-center w-full sm:w-96 gap-4 bg-[#f5f9ff] p-4 mt-7">
                  <Skeleton height={"13rem"} width="22rem" className="blog_skeleton_img"/>{" "}
                  {/* Image Skeleton */}
                  <div className="blog_detail hero_skeleton_detail flex flex-col items-baseline gap-2 w-full">
                    <Skeleton width="7rem" className="blog_category"/> {/* Category Skeleton */}
                    <Skeleton width="15rem" height={24} className="blog_title"/>{" "}
                    {/* Title Skeleton */}
                    <Skeleton count={3} width="19rem" className="blog_summary" />{" "}
                    {/* Summary Skeleton */}
                    <div className="bloger_detail flex items-center gap-3 w-full mt-3">
                      <Skeleton circle={true} height={40} width={40}/>{" "}
                      {/* Author Image Skeleton */}
                      <div className="moreDetail w-full">
                        <Skeleton width="50%" className="bloger_name" /> {/* Author Name Skeleton */}
                        <Skeleton width="70%" className="blog_date_time"/> {/* Date and Time Skeleton */}
                      </div>
                    </div>
                  </div>
                </div>
                  )
                  )
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingSkeleton;
