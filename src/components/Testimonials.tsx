import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
export default function Testimonials() {

  const imgs = [
    { src: "https://randomuser.me/api/portraits/men/32.jpg", className: "left-[15%] top-[14%] w-[70px] h-[70px]" },
    { src: "img6.png", className: "left-[15%] top-[45%] w-[116px] h-[116px]" },
    { src: "https://randomuser.me/api/portraits/men/75.jpg", className: "left-[9%] top-[75%] w-[55px] h-[55px]" },
    { src: "/img3.png", className: "left-[7%] top-[34%] w-[40px] h-[40px]" },
    { src: "/img5.png", className: "left-[80%] top-[14%] w-[65px] h-[65px]" },
    { src: "/img4.png", className: "left-[74%] top-[25%] w-[45px] h-[45px]" },
    { src: "/img7.png", className: "left-[76%] top-[40%] w-[56px] h-[56px]" },
    { src: "/img8.jpg", className: "left-[80%] top-[60%] w-[130px] h-[130px]" },
  ];

  return (
    <section className="py-16 md:py-24 relative">

      <div className="max-w-[1200px] mx-auto px-4">

        <div className="relative min-h-[520px]">

          {/* background avatars */}
          <div className="hidden md:block absolute inset-0">
            {imgs.map((item, i) => (
              <img
                key={i}
                src={item.src}
                className={`absolute rounded-full object-cover ${item.className}`}
                alt="Testimonial portrait"
              />
            ))}
          </div>

          {/* content */}
          <div className="relative z-10 text-center max-w-[700px] mx-auto">

            <h2 className="text-[36px] md:text-[50px] leading-tight">
              <span className="bg-[#D7EEDD] px-3 rounded-full">What</span>{" "}
              our customer <br />
              says{" "}
              <span className="relative">
                About Us
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] h-[2px] bg-yellow-400"></span>
              </span>
            </h2>

            {/* testimonial box */}
            <div className="mt-8 md:mt-10 bg-[#D7EEDD4D] rounded-[30px] px-6 py-8 md:px-10 md:py-10 max-w-[450px] mx-auto">

              <p className="relative px-6 md:px-8 text-[8px] md:text-[14px] text-gray-700 text-center leading-relaxed">
                <ImQuotesLeft className="pointer-events-none absolute left-[3%] bottom-[85%] text-gray-300 text-2xl md:text-4xl" />
                Elementum delivered the site within the timeline. After launch,
                traffic increased by 50% in just a few days. They also used new
                technologies which turned out to be reliable and easy to use and reliable
                <ImQuotesRight className="pointer-events-none absolute right-[12%] top-[75%] text-gray-300 text-2xl md:text-4xl" />
              </p>

        </div>

          </div>

        </div>

      </div>
    </section>
  );
}

