// Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance, { API_KEY, IMG_URL } from "../components/instance/instance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper/modules";

export default function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    instance
      .get(`/movie/popular?api_key=${API_KEY}`)
      .then((res) => setMovies(res.data.results.slice(0, 4)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white flex flex-col">
      {/* Header */}
      <div className="px-6 mt-4 text-center">
        <h1 className="text-3xl font-bold mb-2">🎬 Movie World</h1>
        <p className="text-gray-400">
          اكتشف أحدث وأشهر الأفلام وتابع تفاصيلها لحظة بلحظة
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full mt-8 flex justify-center ">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView={1.1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper w-full  h-[500px]"
        >
          {movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="relative h-[250px] w-[00px]   rounded-lg overflow-hidden mx-auto"
            >
              <img
                src={IMG_URL + movie.backdrop_path}
                alt={movie.title}
                className="w-full h-full object-contain brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-3 text-left">
                <h2 className="text-lg font-bold mb-1">{movie.title}</h2>
                <p className="max-w-xs mb-2 text-xs text-gray-300">
                  {movie.overview.slice(0, 60)}...
                </p>
                <button
                  onClick={() => navigate(`/details/${movie.id}`)}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white w-fit text-xs"
                >
                  Watch Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trending Movies */}
      <h2 className="text-2xl font-semibold mt-10 px-6">Trending Movies</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-6 flex-1">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={IMG_URL + movie.poster_path}
              alt={movie.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-3">
              <h3 className="text-base font-bold mb-2">{movie.title}</h3>
              <button
                onClick={() => navigate(`/details/${movie.id}`)}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded w-full text-sm"
              >
                Show Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-neutral-950 text-gray-300 px-8 py-12 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Dashboard</a></li>
              <li><a href="#" className="hover:text-red-500">Marketplace</a></li>
              <li><a href="#" className="hover:text-red-500">Hire designers</a></li>
            </ul>
          </div>
          {/* Learn & Get Help */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learn & Get Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Support</a></li>
              <li><a href="#" className="hover:text-red-500">University</a></li>
              <li><a href="#" className="hover:text-red-500">Courses</a></li>
              <li><a href="#" className="hover:text-red-500">Blog</a></li>
              <li><a href="#" className="hover:text-red-500">Ebooks</a></li>
              <li><a href="#" className="hover:text-red-500">Forum</a></li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
              <li><a href="#" className="hover:text-red-500">Sitemap</a></li>
            </ul>
          </div>
          {/* Terms & Policy */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Terms & Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500">Cookie Policy</a></li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-red-500">Facebook</a>
              <a href="#" className="hover:text-red-500">Instagram</a>
              <a href="#" className="hover:text-red-500">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

