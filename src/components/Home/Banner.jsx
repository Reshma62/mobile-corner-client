// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import slider2 from "../../assets/slider2.webp";
import slider3 from "../../assets/slider1.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={"bg-no-repeat h-[500px] w-full bg-cover"}
            style={{
              backgroundImage: `url(${slider2}) `,
              backgroundSize: "cover",
            }}
          >
            <div className=" w-[1320px] flex items-center h-full mx-auto">
              <div className="space-y-3">
                <h1 className="text-6xl">Dual Front</h1>
                <h2 className="text-6xl font-bold text-indigo-600">
                  camera 20mp
                </h2>
                <p>
                  exclusive offer{" "}
                  <span className="text-indigo-600"> 20% off </span> this week
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={"bg-no-repeat h-[500px] bg-cover"}
            style={{ backgroundImage: `url(${slider3})` }}
          >
            <div className=" w-[1320px] flex items-center h-full mx-auto">
              <div className="space-y-3">
                <h1 className="text-6xl">Dual Front</h1>
                <h2 className="text-6xl font-bold text-indigo-600">
                  camera 20mp
                </h2>
                <p>
                  exclusive offer{" "}
                  <span className="text-indigo-600"> 20% off </span> this week
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Banner;
