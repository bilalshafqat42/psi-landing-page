const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-16">
        {/* Headline & Subheading */}
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Solution to All Your Property Needs
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-200">
            Get the features you need in all the property we offer with the best
            price you can get
          </p>
        </div>

        {/* Search Panel */}
        <div className="mt-10 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl overflow-hidden w-full max-w-3xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r border-white/20 text-white">
              <p className="text-xs uppercase">Location</p>
              <p className="text-sm">Karimunjawa, Jepara</p>
            </div>
            <div className="w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r border-white/20 text-white">
              <p className="text-xs uppercase">Price</p>
              <p className="text-sm">IDR 1,300,000</p>
            </div>
            <div className="w-full md:w-1/3 p-4 flex items-center justify-between text-white">
              <div>
                <p className="text-xs uppercase">Type</p>
                <p className="text-sm">Minimalist</p>
              </div>
              <button className="bg-white text-black rounded-full p-2">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 flex flex-wrap gap-8 text-white font-medium">
          <div>
            <p className="text-2xl font-bold">10</p>
            <p className="text-sm text-gray-300">Cities</p>
          </div>
          <div>
            <p className="text-2xl font-bold">27,725</p>
            <p className="text-sm text-gray-300">Properties</p>
          </div>
          <div>
            <p className="text-2xl font-bold">5,827</p>
            <p className="text-sm text-gray-300">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
