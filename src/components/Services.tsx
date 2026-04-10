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
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    },
  ];

  return (
    <section className="py-16 md:py-24">

      <div className="max-w-[1200px] mx-auto px-4">

        {/* heading */}
        <h2 className="text-[42px] md:text-[62px] leading-tight">
          What we <span className="bg-green-200 px-3 rounded-full">can</span> <br />
          offer you!
        </h2>

        {/* list */}
        <div className="mt-10 border-t">

          {data.map((item, i) => (
            <div
              key={i}
              className="border-b py-5 grid md:grid-cols-[220px_1fr_auto] gap-4 items-center"
            >
              {/* left text */}
              <p className="text-sm whitespace-pre-line text-gray-700">
                {item.left}
              </p>

              {/* title */}
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-[24px] md:text-[38px] leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3">

                  {/* optional image */}
                  {item.img && (
                    <div className="hidden md:block w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={item.img}
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
