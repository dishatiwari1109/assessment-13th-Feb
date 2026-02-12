
import { useQuery } from '@tanstack/react-query'
import HouseCard from './HouseCard'

function Houses() {
    const {data, error, isLoading} = useQuery({
        queryKey: ["houses"],
        queryFn: () => fetch("https://potterapi-fedeperin.vercel.app/en/houses/")
        .then(res => res.json()),
        staleTime: 1000*60*5, 
        gcTime: 1000*60*6, 
    })

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

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
          🏰 Hogwarts Houses
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {data?.map((house, index) => (
            <HouseCard key={index} house={house} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Houses

