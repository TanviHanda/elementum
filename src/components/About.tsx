export default function About() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">

      {/* random shapes */}
      <div className="hidden md:block w-20 h-20 bg-[#FF7171] [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] absolute left-[12%] top-[50%]"></div>
      <div className="hidden md:block w-20 h-20 bg-[#FF7171] [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] absolute left-[27%] top-[75%] z-10"></div>
      <div className="hidden md:block [clip-path:inset(5%_9%_15%_10%)] bg-[#FF7171] w-20 h-20 absolute right-[17%] top-[18%] rotate-[10deg]"></div>
       {/* bg circle */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(210,98,112,0.7) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <svg
        className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full md:block"
        viewBox="0 0 1200 700"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 1045 175 C 980 175, 950 215, 900 290 C 845 372, 760 450, 665 455 C 560 462, 470 360, 370 350 C 270 340, 220 370, 150 500"
          stroke="#FF7171"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start md:items-center">

          {/* LEFT SIDE */}
          <div className="relative reveal-item" data-reveal style={{ ['--reveal-delay' as string]: '140ms' }}>
 
            <h2 className="font-gerbil text-[30px] sm:text-[34px] md:text-[50px] leading-tight anim-text-rise" style={{ ['--text-delay' as string]: '180ms' }}>
              <span className="relative">
                Tomorrow
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></span>
              </span>{" "}
              should <br />
              be better than{" "}
              <span className="bg-green-200 px-3 rounded-full">today</span>
            </h2>

            <p className="mt-5 text-sm text-gray-600 max-w-[320px] anim-text-rise" style={{ ['--text-delay' as string]: '340ms' }}>
              We are a team of strategists, designers and researchers.
              We believe progress happens when you stop playing safe.
            </p>

            <a href="#" className="mt-4 inline-flex items-center gap-3 text-sm hover-rise">
              Read more
              <span className="inline-block h-px w-16 bg-gray-400" />
            </a>

            {/* circle image */}
           
            <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
              <div className="w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-md hover-rise">
                <img
                  src="/img2.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative reveal-item" data-reveal style={{ ['--reveal-delay' as string]: '300ms' }}>

            <div className="w-[210px] h-[210px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-md mx-auto md:ml-auto hover-rise">
              <img
                src="/img1.png"
                className="w-full h-full object-cover object-[85%_40%]"
              />
            </div>

            <div className="mt-8 md:mt-10 max-w-[400px] mx-auto md:ml-auto">

              <h2 className="font-gerbil text-[28px] sm:text-[32px] md:text-[48px] leading-tight anim-text-rise" style={{ ['--text-delay' as string]: '260ms' }}>
                <span className="bg-green-200 px-3 rounded-full">See</span>{" "}
                how we can <br />
                help you{" "}
                <span className="relative">
                  progress
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></span>
                </span>
              </h2>

              <p className="mt-5 text-sm text-gray-600 max-w-[360px] anim-text-rise" style={{ ['--text-delay' as string]: '420ms' }}>
                We help teams move faster with better design and clear thinking.
              </p>

              <a href="#" className="mt-4 inline-flex items-center gap-3 text-sm hover-rise">
                Read more
                <span className="inline-block h-px w-16 bg-gray-400" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
