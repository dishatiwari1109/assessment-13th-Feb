import { useQuery } from "@tanstack/react-query";
import CharCard from "./CharCard";

/**
 * Characters component displays all Harry Potter characters
 * Uses React Query for data fetching and caching
 */
function Characters() {
  // useQuery hook for fetching and caching character data
  const { data, error, isLoading } = useQuery({
    queryKey: ["characters"], // Unique key for this query
    queryFn: () =>
      fetch("https://potterapi-fedeperin.vercel.app/en/characters/").then(
        (res) => res.json(),
      ),
<<<<<<< HEAD
    staleTime: 1000*60*5,  // Data stays fresh for 5 minutes
    gcTime: 1000*60*10,    // Cache persists for 10 minutes
=======
    staleTime: 1000*60*10,
    gcTime: 1000*60,
>>>>>>> 2241926b03955aca0272bb2fceab39512a1d00fe
  });

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-xl text-purple-400">Loading characters...</p>
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

  // Render characters grid
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-400">
          Characters
        </h1>

        {/* Grid of character cards */}
        <div className="flex flex-wrap justify-center gap-4">
          {data?.map((character) => (
            <CharCard key={character.fullName} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characters;
