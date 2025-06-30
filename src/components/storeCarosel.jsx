import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Banners from '../assets/storeImages'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [Banners.banner7, Banners.banner8, Banners.banner9, Banners.banner4, Banners.banner5, Banners.banner6];

function StoreCarosel() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                    type: "bullets"
                }}
                autoplay={{ delay: 2000 }}
                loop={true}
            >
                {banners.map((img, key) => (
                    <SwiperSlide key={key}>
                        <img className="w-full" src={img} alt={key} />
                    </SwiperSlide>))}
            </Swiper>
            
        </div>
    )
}

export default StoreCarosel
