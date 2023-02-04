/* This example requires Tailwind CSS v3.0+ */
import Image from "next/image"

export default function HeroContent() {
    return (
      <div className="relative bg-gray-900">
        <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" 
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" 
                    clipRule="evenodd" 
                    />
            </svg>
          <Image
            className="h-full w-full object-cover "
            src="/poster.jpg"
            alt=""
            width={2000}
            height={1000}
          />
          
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 926 676"
            aria-hidden="true"
            className="absolute left-24 -bottom-24 w-[57.875rem] transform-gpu blur-[118px]"
          >
            <path
              fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
              fillOpacity=".4"
              d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
            />
            <defs>
              <linearGradient
                id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                x1="926.392"
                x2="-109.635"
                y1=".176"
                y2="321.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-6xl font-semibold leading-7 text-white">Make Jesus Known</h2>
            <p className="mt-2 text-xl font-bold tracking-tight text-white">Jesus! Everyone says His name &hellip;</p>
            <p className="mt-6 text-xl leading-7 text-gray-300">
                <br />
                But who is he?
            </p>
            <div className="mt-8">
              <div
                className="inline-flex rounded-full bg-white/10 px-3.5 py-1.5 text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white align-middle"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" 
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" 
                    clipRule="evenodd" 
                    />
                </svg>
                <span className="pl-2 text-center align-middle">Play</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  