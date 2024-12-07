import type { SearchResult } from '../types';
import { knowledgeBase } from '../data/knowledgeBase';

export function generateSuggestions(query: string): SearchResult {
  // Example suggestions for a potluck
  if (query.toLowerCase().includes('potluck')) {
    return {
      type: 'suggestions',
      title: 'Potluck Ideas & Suggestions',
      items: [
        {
          id: '1',
          text: 'Main Dishes',
          note: 'Casseroles, lasagna, or slow-cooker dishes travel well'
        },
        {
          id: '2',
          text: 'Side Dishes',
          note: 'Salads, roasted vegetables, or pasta salads are popular'
        },
        {
          id: '3',
          text: 'Desserts',
          note: 'Cookies, brownies, or fruit pies are always welcome'
        },
        {
          id: '4',
          text: 'Serving Utensils',
          note: 'Bring serving spoons or tongs for your dish'
        }
      ]
    };
  }

  // Default suggestions
  return {
    type: 'suggestions',
    title: 'General Event Suggestions',
    items: [
      {
        id: '1',
        text: 'Consider the venue',
        note: 'Indoor or outdoor? Formal or casual?'
      },
      {
        id: '2',
        text: 'Think about duration',
        note: 'Will you need to bring extra items for a longer event?'
      },
      {
        id: '3',
        text: 'Check the weather',
        note: 'Bring appropriate clothing or protection'
      }
    ]
  };
}

export function searchKnowledgeBase(query: string): SearchResult | null {
  const normalizedQuery = query.toLowerCase();
  
  const matchingEntry = knowledgeBase.find(entry =>
    entry.query.some(q => normalizedQuery.includes(q))
  );

  if (matchingEntry) {
    return {
      type: 'direct',
      title: matchingEntry.title,
      items: matchingEntry.items.map((item, index) => ({
        id: index.toString(),
        text: item.text,
        isRequired: item.isRequired,
        note: item.note
      })),
      source: matchingEntry.source
    };
  }

  return null;
}

export function processSearch(query: string): SearchResult {
  const directResult = searchKnowledgeBase(query);
  if (directResult) {
    return directResult;
  }
  return generateSuggestions(query);
}