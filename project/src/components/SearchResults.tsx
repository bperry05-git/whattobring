import React from 'react';
import { CheckCircle2, HelpCircle, AlertCircle } from 'lucide-react';
import type { SearchResult } from '../types';

interface SearchResultsProps {
  result: SearchResult;
}

export function SearchResults({ result }: SearchResultsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{result.title}</h2>
      
      {result.source && (
        <p className="text-sm text-gray-500 mb-4">
          Source: {result.source}
        </p>
      )}

      <div className="space-y-4">
        {result.items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-150"
          >
            {result.type === 'direct' ? (
              item.isRequired ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              ) : (
                <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              )
            ) : (
              <AlertCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
            )}
            <div>
              <p className="text-gray-900">{item.text}</p>
              {item.note && (
                <p className="text-sm text-gray-600 mt-1">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}