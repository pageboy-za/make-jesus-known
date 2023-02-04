export default function ScriptureQuote({children, reference}) { 
    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">{children}</div>
        <div className="px-4 py-4 sm:px-6 text-right">
          {reference}
        </div>
      </div>
    )
  }