export default function Footer() {
  const data = [
    {
      name: "Company",
      items: ["Home", "Studio", "Service", "Blog"],
    },
    {
      name: "Terms & Policies",
      items: [
        "Privacy Policy",
        "Terms & Conditions",
        "Explore",
        "Accessibility",
      ],
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
    <footer className="bg-[#DCEEDC] py-12 relative overflow-hidden">

      {/* arrows  */}
      <div
        className="pointer-events-none absolute left-[40%] top-0 hidden md:block"
        aria-hidden="true"
      >
        <svg
          width="180"
          height="120"
          viewBox="0 0 180 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58 0C58 24 45 36 31 45C18 53 9 66 9 86"
            stroke="#FF7171"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M5 83L9 90L14 82"
            stroke="#FF7171"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M126 0C126 24 113 36 99 45C86 53 77 66 77 86"
            stroke="#FF7171"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M73 83L77 90L82 82"
            stroke="#FF7171"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        {/* heading */}
        <div className="text-center pt-8 md:pt-10">
          <h2 className="font-gerbil text-[32px] sm:text-[40px] md:text-[60px] leading-tight">
            Subscribe to <br /> our newsletter
          </h2>

          <p className="mx-auto max-w-[340px] text-[12px] mt-3 text-gray-600 px-2">
            To make your stay special and even more memorable.
          </p>

          <button className="mt-5 bg-black text-white px-5 py-2 rounded-full text-[12px]">
            Subscribe Now
          </button>
        </div>

        <div className="bg-black w-full h-[1px] mt-16 md:mt-20"></div>

        {/* links */}
        <div className="mt-10 md:mt-12 border-t pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {data.map((col, i) => (
              <div key={i}>
                <h3 className="text-[15px] mb-4">{col.name}</h3>

                {col.items.map((item, j) => (
                  <p
                    key={j}
                    className="text-[12px] text-gray-700 mb-2 whitespace-pre-line"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] mt-12 text-gray-500 px-2">
            ©2023 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
