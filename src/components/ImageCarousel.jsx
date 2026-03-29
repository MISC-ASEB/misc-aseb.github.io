import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { CalendarLtrRegular } from "@fluentui/react-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

/**
 * ImageCarousel Component
 *
 * Renders a 3D coverflow carousel for past events.
 * Uses Swiper.js for smooth, touch-friendly interactions.
 *
 * @param {Object} props
 * @param {Array} props.events - Array of event objects to display
 */
function ImageCarousel({ events }) {
  return (
    <div className="w-full py-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false, // Disabled default shadows to use custom glass shadows
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full pb-12" // Padding bottom for pagination dots
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] max-w-md"
          >
            <div className="glass-card overflow-hidden group relative h-[400px] flex flex-col">
              {/* Image Section */}
              <div className="relative h-3/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Date Badge overlaying image */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center text-white text-sm font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                  <CalendarLtrRegular className="mr-2" />
                  {event.date}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-white/40 dark:bg-slate-900/40 backdrop-blur-md">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-misc-blue dark:group-hover:text-misc-lightBlue transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
