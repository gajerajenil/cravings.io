export default function Simmer() {
  return (
    <div className="flex flex-wrap mt-32 justify-center gap-4">
      {Array(15) // Show 15 shimmer placeholders
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-80 bg-gray-200 rounded-lg shadow-md overflow-hidden relative animate-pulse"
          >
            <div className="w-full h-40 bg-gray-300 rounded-md"></div>
            <div className="h-4 bg-gray-300 rounded-md mt-4 w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded-md mt-2 w-1/2"></div>
            <div className="h-3 bg-gray-300 rounded-md mt-2 w-1/3"></div>
          </div>
        ))}
    </div>
  );
}
