export default function Footer() {

  const data = [
    {
      name: "Company",
      items: ["Home", "Studio", "Service", "Blog"],
    },
    {
      name: "Terms & Policies",
      items: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
    },
    {
      name: "Follow Us",
      items: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
    },
    {
      name: "Contact",
      items: [
        "1498w Fluton ste. STE.\n2D Chicago, IL 63867.",
        "(123)456789000",
        "info@elementum.com",
      ],
    },
  ];

  return (
    <footer className="bg-[#DCEEDC] py-12">

      <div className="max-w-[1200px] mx-auto px-4">

        {/* heading */}
        <div className="text-center">
          <h2 className="text-[40px] md:text-[60px] leading-tight">
            Subscribe to <br /> our newsletter
          </h2>

          <p className="text-[12px] mt-3 text-gray-600">
            To make your stay special and even more memorable.
          </p>

          <button className="mt-5 bg-black text-white px-5 py-2 rounded-full text-[12px]">
            Subscribe Now
          </button>
        </div>

        <div className="bg-black w-full h-[1px] mt-20"></div>

        {/* links */}
        <div className="mt-12 border-t pt-8">

          <div className="grid md:grid-cols-4 gap-8">

            {data.map((col, i) => (
              <div key={i}>
                <h3 className="text-[15px] mb-4">{col.name}</h3>

                {col.items.map((item, j) => (
                  <p key={j} className="text-[12px] text-gray-700 mb-2 whitespace-pre-line">
                    {item}
                  </p>
                ))}
              </div>
            ))}

          </div>

          <p className="text-center text-[11px] mt-12 text-gray-500">
            ©2023 Elementum. All rights reserved
          </p>

        </div>

      </div>
    </footer>
  );
}
