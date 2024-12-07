import React from 'react';
import { SearchBar } from './components/SearchBar';
import { CategoryGrid } from './components/CategoryGrid';
import { SearchResults } from './components/SearchResults';
import { Sparkles } from 'lucide-react';
import { processSearch } from './utils/searchUtils';
import type { SearchResult } from './types';

function App() {
  const [searchResult, setSearchResult] = React.useState<SearchResult | null>(null);

  const handleSearch = (query: string) => {
    const result = processSearch(query);
    setSearchResult(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Never Forget What to Bring Again!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let AI help you pack perfectly for any occasion, from parties to
            business meetings and vacations.
          </p>
          <SearchBar onSearch={handleSearch} />
          {searchResult && <SearchResults result={searchResult} />}
        </div>

        {/* Features Section */}
        <div className="space-y-12">
          <h2 className="text-2xl font-semibold text-center text-gray-900">
            Choose Your Event Type
          </h2>
          <CategoryGrid />
        </div>

        {/* AI Feature Highlight */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-900">
              AI-Powered Suggestions
            </h2>
          </div>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Our smart AI analyzes your event details to create personalized
            checklists, considering weather, location, and special requirements.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
