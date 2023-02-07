export default function ScriptureQuote({children, reference, version}) { 
    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white ">
        <div className="pl-10 pr-4 ml-10 py-5 sm:p-6">{children}</div>
        <div className="px-4 py-2 sm:px-6 font-semibold grid grid-cols-3">
          <div className="text-right col-span-2">
          {reference}
          </div>
          <div className="text-right col-span-1">
          {version}
          </div>
        </div>
      </div>
    )
  }