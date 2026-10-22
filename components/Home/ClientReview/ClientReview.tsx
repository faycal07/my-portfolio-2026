'use client';
import SectionHeading from "@/components/Helper/SectionHeading";
import { userReviewData } from "@/data";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from "./ReviewCard";

const ClientReview = () => {


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1164 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1164, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


  return (
    <section id="client-review" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="w-[90%] mx-auto">
        <SectionHeading
          title_1="Some Clients'"
          title_2="Feedback"
          description="Take a brief look to some feedback we got"
        />
        <div className="mt-14 ">
            <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["mobile"]}
  dotListClass="custom-dot-list-style"
  arrows={true}
>
{userReviewData.map((user)=>{
    return <div key={user.id}>

        <ReviewCard user={user}/>

    </div>
})}
</Carousel>;
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
