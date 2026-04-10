import { CgArrowLongRight } from "react-icons/cg";

export default function About() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="relative">

            <h2 className="text-[34px] md:text-[50px] leading-tight">
              <span className="relative">
                Tomorrow
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></span>
              </span>{" "}
              should <br />
              be better than{" "}
              <span className="bg-green-200 px-3 rounded-full">today</span>
            </h2>

            <p className="mt-6 text-sm text-gray-600 max-w-[300px]">
              We are a team of strategists, designers and researchers.
              We believe progress happens when you stop playing safe.
            </p>

            <a href="#" className="mt-4 inline-block text-sm">
              Read more <CgArrowLongRight className="text-lg mt-[1px]"/>
            </a>

            {/* circle image */}
            <div className="mt-10">
              <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-md">
                <img
                  src="/img2.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden shadow-md ml-auto">
              <img
                src="/img1.png"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-10 max-w-[400px] ml-auto">

              <h2 className="text-[32px] md:text-[48px] leading-tight">
                <span className="bg-green-200 px-3 rounded-full">See</span>{" "}
                how we can <br />
                help you{" "}
                <span className="relative">
                  progress
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-yellow-400"></span>
                </span>
              </h2>

              <p className="mt-6 text-sm text-gray-600">
                We help teams move faster with better design and clear thinking.
              </p>

              <a href="#" className="mt-4 inline-block text-sm">
                Read more <CgArrowLongRight className="text-lg mt-[1px]"/>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
