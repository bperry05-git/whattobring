export type EventType = 'party' | 'appointment' | 'vacation' | 'other';

export interface EventDetails {
  type: EventType;
  date: string;
  location: string;
  weather?: string;
  preferences: string[];
  attendees: string[];
}

export interface ChecklistItem {
  id: string;
  category: string;
  name: string;
  isRequired: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface SearchResult {
  type: 'direct' | 'suggestions';
  title: string;
  items: Array<{
    id: string;
    text: string;
    isRequired?: boolean;
    note?: string;
  }>;
  source?: string;
}

export interface KnowledgeEntry {
  query: string[];
  type: 'direct';
  title: string;
  items: Array<{
    text: string;
    isRequired: boolean;
    note?: string;
  }>;
  source?: string;
}