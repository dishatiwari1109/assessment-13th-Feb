
import { useQuery } from '@tanstack/react-query'
import HouseCard from './HouseCard'

/**
 * Houses component displays all Hogwarts houses
 * Uses React Query for data fetching and caching
 */
function Houses() {
    // useQuery hook for fetching and caching houses data
    const {data, error, isLoading} = useQuery({
        queryKey: ["houses"], // Unique key for this query
        queryFn: () => fetch("https://potterapi-fedeperin.vercel.app/en/houses/")
        .then(res => res.json()),
        staleTime: 10000, 
        gcTime: 20000, 
    })

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-purple-400">Loading houses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-red-400">Error: {error.message}</p>
      </div>
    );
  }

  // Render houses grid
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
          🏰 Hogwarts Houses
        </h1>

        {/* Grid of house cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {data?.map((house) => (
            <HouseCard key={house.house} house={house} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Houses

