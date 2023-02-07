export default function ScriptureQuote({children, reference, version}) { 
    return (
      <blockquote className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white ">
        <div className="pl-1 pr-4 ml-1 py-5 sm:p-6 border-l-4 border-gray-500 pb-4">
          {children}
        </div>
        <div className="mt-2 px-4 py-2 sm:px-6 font-semibold flex text-right">
          <span className="px-4 text-right">
          {reference}
          </span>
          <span className="px-4 text-right">
          {version}
          </span>
        </div>
      </blockquote>
    )
  }