export default function SectionHeader({children}) {
    return (
      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-xl text-gray-800 bville">{children}</span>
        </div>
      </div>
    )
  }
  