const avatars = [
  { src: "https://randomuser.me/api/portraits/men/75.jpg", position: "left-[0%] top-[50px]" },
  { src: "https://randomuser.me/api/portraits/men/56.jpg", position: "left-[13%] top-[42px]" },
  { src: "https://randomuser.me/api/portraits/women/44.jpg", position: "left-[28%] top-[2px]" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg", position: "left-[39%] top-[68px]" },
  { src: "https://randomuser.me/api/portraits/men/18.jpg", position: "left-[53%] top-[8px]" },
  { src: "https://randomuser.me/api/portraits/men/62.jpg", position: "left-[64%] top-[40px]" },
  { src: "https://randomuser.me/api/portraits/men/41.jpg", position: "left-[78%] top-[8px]" },
  { src: "https://randomuser.me/api/portraits/men/91.jpg", position: "left-[91%] top-[44px]" }
];

export default function Hero() {
  return (
    <section className="py-12 md:py-16 overflow-hidden">

      <div className="container mx-auto px-4 text-center">

        <h1 className="mx-auto max-w-6xl text-[42px] md:text-[72px] lg:text-[80px] xl:text-[88px] leading-[1.05] text-[#151515]">
          The{" "}
          <span className="relative inline-block">
            thinkers
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[10px] w-[110%] bg-[#F2C347] rounded-full"></span>
          </span>{" "}
          and <br className="hidden md:block" />
          doers were{" "}
          <span className="bg-[#F5ACE1] px-3 md:px-5 rounded-full">changing</span>
          <br className="hidden md:block" />
          the{" "}
          <span className="bg-[#CFE9D7] px-3 md:px-5 rounded-full">status</span>{" "}
          Quo with
        </h1>

          <p className="mt-5 text-[13px] md:text-[15px] text-[#5A5A5A] max-w-[640px] mx-auto">
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe progress happens when you don’t play safe.
        </p>

        {/* mobile avatars view */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 md:hidden">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a.src}
              className="w-16 h-16 rounded-full object-cover border-4 border-[#EFEFEF]"
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

