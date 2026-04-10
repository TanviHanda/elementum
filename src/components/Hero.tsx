const avatars = [
  { src: "/image(4).png", position: "left-[0%] top-[50px]" },
  { src: "https://randomuser.me/api/portraits/men/56.jpg", position: "left-[13%] top-[42px]" },
  { src: "/image(2).png", position: "left-[28%] top-[2px]" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg", position: "left-[39%] top-[68px]" },
  { src: "https://randomuser.me/api/portraits/men/18.jpg", position: "left-[53%] top-[8px]" },
  { src: "/image(3).png", position: "left-[64%] top-[40px]" },
  { src: "https://randomuser.me/api/portraits/men/41.jpg", position: "left-[78%] top-[8px]" },
  { src: "/image(1).png", position: "left-[91%] top-[44px]" }
];

export default function Hero() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">

    <div className="pointer-events-none absolute left-0 top-[70%] hidden -translate-y-1/2 lg:block">
      <svg width="84" height="260" viewBox="0 0 84 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M0 34C31 46 31 84 0 98S-10 126 0 132S31 184 0 198S-10 226 0 232" stroke="#FF8A95" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M30 30C64 42 64 82 30 96C14 104 14 122 30 130C64 144 64 184 30 198C14 206 14 224 30" stroke="#1D1D1D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>

    <div className="hidden md:block w-32 h-16 bg-[#934CEC] rounded-t-full rotate-[130deg] absolute right-[10%] top-[45%]"></div>
      <div className="mx-auto max-w-[1200px] px-4 text-center md:px-8">

        <h1 className="font-gerbil mx-auto max-w-[280px] sm:max-w-6xl text-[26px] sm:text-[40px] md:text-[72px] lg:text-[80px] xl:text-[88px] leading-[1.12] sm:leading-[1.05] tracking-[-0.03em] text-[#151515]">
          The{" "}
          <span className="relative inline-block whitespace-nowrap">
            thinkers
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[6px] sm:h-[10px] w-[110%] bg-[#F2C347] rounded-full"></span>
          </span>{" "}
          and <br className="md:hidden" />
          doers were <br className="md:hidden" />
          <span className="inline-block whitespace-nowrap bg-[#F5ACE1] px-2 md:px-5 rounded-full">changing</span>{" "}
          the{" "}
          <span className="inline-block whitespace-nowrap bg-[#CFE9D7] px-2 md:px-5 rounded-full">status</span>{" "}
          Quo with
        </h1>

          <p className="mt-5 text-[13px] md:text-[15px] text-[#5A5A5A] max-w-[640px] mx-auto px-2 md:px-0">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe progress happens when you don’t play safe.
        </p>

        {/* mobile avatars view */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 md:hidden">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a.src}
              className="w-14 h-14 rounded-full object-cover border-4 border-[#EFEFEF]"
            />
          ))}
        </div>

        {/* avatars */}
        <div className="hidden md:block relative mt-8 h-[170px] max-w-[980px] mx-auto">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a.src}
              className={`absolute ${a.position} -translate-x-1/2 w-24 h-24 rounded-full object-cover border-4 border-[#EFEFEF]`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

