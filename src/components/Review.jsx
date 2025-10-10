import { useState } from "react";

const reviews = [
  {
    name: "Ana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi molestiae fuga autem quo repellat quam laboriosam veniam necessitatibus. A incidunt doloremque eum cumque iusto adipisci molestias, ipsum vero aperiam?",
  },
  {
    name: "Luis",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi molestiae fuga autem quo repellat quam laboriosam veniam necessitatibus. A incidunt doloremque eum cumque iusto adipisci molestias, ipsum vero aperiam?",
  },
  {
    name: "María",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In excepturi molestiae fuga autem quo repellat quam laboriosam veniam necessitatibus. A incidunt doloremque eum cumque iusto adipisci molestias, ipsum vero aperiam?",
  },
];

export default function Review() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      className="py-[70px] bg-white w-full text-center  max-w-sm sm:max-w-xl mx-auto relative overflow-hidden  md:max-w-none ">
      <h3 className="font-semibold text-[2.3rem] mb-5 tracking-wide ">TESTIMONIOS</h3>
      <div className="flex transition-transform duration-500  md:w-full md:justify-center  ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>


        {reviews.map((review, index) => (
        <div key={index} className="min-w-full md:min-w-0 px-4">
            <div className="hover:scale-110 transition bg-red-500 shadow-md border-b-red-100 border-b-4 md:w-[300px] p-4 rounded-xl text-center">
                <p className="text-gray-100 italic">"{review.text}"</p>
                <span className="block mt-2 font-semibold text-white">
                    {review.name}
                </span>
            </div>
        </div>
        ))}
    </div>

    <button onClick={prevSlide}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 border-1 border-red-100 bg-white text-red-500 px-2 py-1 rounded-full text-sm md:hidden">
      ‹
    </button>
    <button onClick={nextSlide}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 border-1 border-red-100 bg-white text-red-500 px-2 py-1 rounded-full text-sm md:hidden">
      ›
    </button>
    </section>
  );
}
