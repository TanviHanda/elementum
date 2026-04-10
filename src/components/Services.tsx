import { CgArrowLongRight } from "react-icons/cg";

export default function Services() {
  const data = [
    {
      left: "Office of multiple\ninterest content",
      title: "Collaborative & partnership",
    },
    {
      left: "The hanger US Air force\ndigital experimental",
      title: "We talk about our weight",
    },
    {
      left: "Delta faucet content,\nsocial, digital",
      title: "Piloting digital confidence",
      img: {
        src:"/img9.jpg",
      },
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <svg
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-[240px] w-[360px] md:block md:h-[320px] md:w-[520px]"
        viewBox="0 0 520 320"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 520 30 C 478 58, 460 112, 415 118 C 350 126, 305 16, 250 26 C 188 37, 195 157, 153 162 C 120 166, 110 112, 80 112"
          stroke="#FF7171"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8">

        {/* heading */}
        <h2 className="font-gerbil max-w-[520px] text-[32px] sm:text-[42px] md:text-[62px] leading-[0.92] tracking-[-0.04em]">
          What we <span className="bg-green-200 px-3 rounded-full">can</span> <br />
          offer you!
        </h2>
        <div className="mt-2 h-[3px] w-28 bg-orange-400 rotate-[-4deg] origin-left" />

        {/* list */}
        <div className="mt-10 border-t border-gray-200">

          {data.map((item, i) => (
            <div
              key={i}
              className="border-b border-gray-200 py-5 grid md:grid-cols-[220px_1fr_auto] gap-4 md:gap-6 items-center"
            >
              {/* left text */}
                <p className="text-sm whitespace-pre-line text-gray-700 max-w-[170px] md:max-w-[170px]">
                {item.left}
              </p>

              {/* title */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4 min-w-0">
                  <h3 className="font-gerbil text-[22px] sm:text-[24px] md:text-[46px] leading-none tracking-[-0.04em] min-w-0">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 shrink-0">

                  {/* optional image */}
                  {item.img && (
                    <div className="hidden md:block w-16 h-16 rounded-full overflow-hidden border border-gray-200">
                      <img
                        src={item.img.src}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* arrow */}
                  <CgArrowLongRight className="text-2xl md:text-3xl" />

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
