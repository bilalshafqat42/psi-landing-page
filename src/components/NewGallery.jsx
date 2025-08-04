import React, { useRef, useEffect } from "react";

const slides = [
  {
    title: "The Raven",
    label: "bestseller",
    src: "https://cdn.pixabay.com/photo/2023/03/12/20/58/ai-generated-7847847_1280.jpg",
  },
  {
    title: "Mademoiselle",
    subtitle: "epic drama",
    label: "bestseller",
    src: "https://cdn.pixabay.com/photo/2022/06/26/21/12/cover-7286312_1280.jpg",
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
  },
];

const NewGallery = () => {
  const containerRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    const onWheel = (e) => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const atEnd = container.scrollLeft >= maxScroll;
      const atStart = container.scrollLeft <= 0;

      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="h-screen bg-white text-gray-900 px-6 py-20 font-[Poppins] overflow-y-auto"
    >
      <div className="max-w-[1440px] mx-auto mb-12">
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Welcome to Online Book Store
        </h2>
        <p className="text-base leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          quam magnam obcaecati error consequatur repellat fugiat, deleniti nisi
          eum voluptates.
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
            <span className="text-xs text-gray-600 block mt-1">customers</span>
          </li>
        </ul>
        <button className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded text-white font-semibold transition duration-300">
          Go to Collections <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-16"
        style={{ height: "fit-content" }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 snap-start rounded-xl bg-cover bg-center relative cursor-pointer shadow-lg"
            style={{
              backgroundImage: `url(${slide.src})`,
              width: "calc(100vw / 3.5)",
              aspectRatio: "16 / 9",
            }}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewGallery;
