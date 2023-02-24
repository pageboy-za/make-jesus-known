export default function ScriptureQuote({children, reference, version}) { 
    return (
      <blockquote className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white ">
        <div className="pl-2 m-1 pr-2 py-1 sm:p-6 border-l-4 border-gray-400 pb-4">
          {children}
        </div>
        <div className="mt-2 px-2 py-2 w-full sm:px-6 font-semibold flex gap-2">
          <div className="w-11/12 text-right">
          {reference}
          </div>
          <div className="w-1/12 px-1 text-xs text-end">
          {version}
          </div>
        </div>
      </blockquote>
    )
  }