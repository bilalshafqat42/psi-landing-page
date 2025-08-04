import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    title: "The Raven",
    label: "bestseller",
    src: "https://cdn.pixabay.com/photo/2023/03/12/20/58/ai-generated-7847847_1280.jpg",
    className: "font-[Courgette]",
  },
  {
    title: "Mademoiselle",
    subtitle: "epic drama",
    label: "bestseller",
    src: "https://cdn.pixabay.com/photo/2022/06/26/21/12/cover-7286312_1280.jpg",
    className: 'font-["Noto_Serif_Vithkuqi"]',
  },
  {
    label: "bestseller",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/92/THE_BOOK_cover_image.png",
  },
  {
    label: "bestseller",
    src: "https://covers.audiobooks.com/images/covers/full/9781511358378.jpg",
  },
  {
    label: "bestseller",
    src: "https://cdn.pixabay.com/photo/2015/02/20/16/59/deer-643340_1280.jpg",
  },
  {
    title: "Woman in the dark",
    label: "bestseller",
    src: "https://cdn.pixabay.com/photo/2022/11/04/23/15/woman-7570834_1280.jpg",
    className: "font-[Chonburi]",
  },
];

const GallerySection = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="bg-white text-gray-900 px-6 py-20 flex items-center justify-center gap-12 relative font-[Poppins]">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-start gap-12 mx-auto">
        {/* Left Content */}
        <div className="md:w-2/5 z-10">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Welcome to Online Book Store
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae quam magnam obcaecati error consequatur repellat fugiat,
            deleniti nisi eum voluptates.
          </p>
          <ul className="flex gap-8 mb-6">
            <li>
              <h3 className="text-2xl font-semibold">
                <i className="fa-solid fa-book mr-2"></i>68+k
              </h3>
              <span className="text-xs text-gray-600 block mt-1">
                book collections
              </span>
            </li>
            <li>
              <h3 className="text-2xl font-semibold">
                <i className="fa-solid fa-user mr-2"></i>25,634
              </h3>
              <span className="text-xs text-gray-600 block mt-1">
                customers
              </span>
            </li>
          </ul>
          <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded text-white font-semibold transition duration-300">
            Go to Collections <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        </div>

        {/* Swiper */}
        <div className="md:w-3/5 w-full relative">
          <Swiper
            modules={[Pagination, Keyboard, Mousewheel, Navigation]}
            pagination={false}
            navigation={false}
            keyboard={{ enabled: true }}
            mousewheel={{ thresholdDelta: 70 }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
            }}
            className="w-full h-[26rem]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`rounded-xl h-full bg-cover bg-center relative cursor-pointer transition-all duration-300 ${slide.className}`}
                onClick={() => setModalImage(slide.src)}
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <span className="inline-block bg-purple-600 px-5 py-2 text-sm rounded-tr-full rounded-br-full absolute top-6 left-0 text-white">
                  {slide.label}
                </span>
                {(slide.title || slide.subtitle) && (
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] text-center text-white">
                    {slide.title && (
                      <h3 className="text-lg font-bold mb-1">{slide.title}</h3>
                    )}
                    {slide.subtitle && (
                      <p className="text-sm text-white/90">{slide.subtitle}</p>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal Fullscreen Swiper */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
          <Swiper
            modules={[Navigation, Pagination, Keyboard]}
            navigation={true}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            loop={true}
            className="w-full h-full flex items-center justify-center"
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={slide.src}
                  alt={slide.title || "Preview"}
                  className="max-h-[90vh] object-contain mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="absolute top-6 right-6 text-white text-2xl z-50"
            onClick={() => setModalImage(null)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
