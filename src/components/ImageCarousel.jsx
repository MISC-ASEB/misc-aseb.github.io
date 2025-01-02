import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  Card,
  CardHeader,
  Image,
  Text,
  Button,
} from "@fluentui/react-components";
import { ArrowRight24Filled } from "@fluentui/react-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function ImageCarousel({ events }) {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          enabled: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className="w-4/5 max-w-xl my-2">
            <Card className="overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <CardHeader
                header={
                  <Text weight="semibold" size={400}>
                    {event.title}
                  </Text>
                }
                description={
                  <Text size={300} className="text-gray-500">
                    {event.description}
                  </Text>
                }
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
