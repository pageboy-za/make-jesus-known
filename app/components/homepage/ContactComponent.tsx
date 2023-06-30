import Link from "next/link"

const navigation = [
  {
    name: 'Telgram',
    href: 'https://t.me/MAKEJESUSKNOWN',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" 
        d="M22.1566 12.3736C22.1566 17.8965 17.6794 22.3736 12.1566 22.3736C6.63373 22.3736 2.15658 17.8965 2.15658 12.3736C2.15658 6.85077 6.63373 2.37362 12.1566 2.37362C17.6794 2.37362 22.1566 6.85077 22.1566 12.3736ZM12.5153 9.75612C11.5428 10.1611 9.59783 10.9986 6.68283 12.2686C6.21033 12.4561 5.96158 12.6411 5.93908 12.8211C5.90158 13.1249 6.28283 13.2449 6.80158 13.4086L7.02033 13.4774C7.53033 13.6436 8.21783 13.8374 8.57408 13.8449C8.89908 13.8524 9.26033 13.7199 9.65908 13.4449C12.3828 11.6061 13.7891 10.6774 13.8766 10.6574C13.9391 10.6424 14.0266 10.6249 14.0841 10.6774C14.1428 10.7286 14.1366 10.8274 14.1303 10.8536C14.0928 11.0149 12.5966 12.4049 11.8228 13.1249C11.5816 13.3499 11.4103 13.5086 11.3753 13.5449C11.2983 13.6236 11.2199 13.7011 11.1403 13.7774C10.6653 14.2349 10.3103 14.5774 11.1591 15.1374C11.5678 15.4074 11.8953 15.6286 12.2216 15.8511C12.5766 16.0936 12.9316 16.3349 13.3916 16.6374C13.5078 16.7124 13.6203 16.7936 13.7291 16.8711C14.1428 17.1661 14.5166 17.4311 14.9753 17.3886C15.2428 17.3636 15.5191 17.1136 15.6591 16.3636C15.9903 14.5924 16.6416 10.7561 16.7916 9.17487C16.8007 9.04342 16.7953 8.91136 16.7753 8.78112C16.7636 8.67602 16.7127 8.57919 16.6328 8.50987C16.5191 8.43135 16.3835 8.39068 16.2453 8.39362C15.8703 8.39987 15.2916 8.60112 12.5153 9.75612Z"
        clipRule="evenodd" />
      </svg>
    ),
  }, 
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@CalvaryCambridge',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/calvarychapelcambridge/',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  }, 
  {
      name: 'Facebook',
      href: 'https://www.facebook.com/calvarychapelcambridge',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ]

export default function Contact() {
    return (
      <div className="bg-gray-50 pt-12 sm:pt-16" id="contact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="bville text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Connect with us on Social Media
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              To keep up to date or to find out about the latest events follow us on our social channels.
            </p>
            <div className="pt-4 pb-2 text-center">
              <Link href="/contact">Get our address here to visit in person</Link>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50" />
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                {navigation.map((item) => (
                    <div key={item.name} className="flex flex-col border-b border-gray-100 p-6 rounded-lg text-center sm:border-0 sm:border-r">
                      <div className="order-1 text-5xl font-bold text-gray-900 flex justify-center">
                          <a href={item.href} target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-700">
                            <item.icon className=" flex align-middle justify-center h-6 w-6 content-center" aria-hidden="true" />
                          </a>
                        </div>
                        <div className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                            <a href={item.href} target="_blank" rel="noreferrer" className="text-gray-900 hover:text-gray-700">
                                <span>{item.name}</span>  
                            </a>                            
                        </div>
                      
                     </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  