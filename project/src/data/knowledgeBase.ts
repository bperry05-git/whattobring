import type { KnowledgeEntry } from '../types';

export const knowledgeBase: KnowledgeEntry[] = [
  {
    query: ['drivers license', 'license renewal', 'dmv'],
    type: 'direct',
    title: 'Documents Needed for Driver\'s License Renewal',
    items: [
      { text: 'Current driver\'s license', isRequired: true },
      { text: 'Proof of identity (passport or birth certificate)', isRequired: true },
      { text: 'Proof of residence (utility bill, lease)', isRequired: true },
      { text: 'Social Security card', isRequired: true },
      { text: 'Payment method (check, credit card)', isRequired: true },
      { text: 'Glasses or contacts if needed for vision test', isRequired: false },
    ],
    source: 'DMV.gov guidelines'
  },
  {
    query: ['passport', 'passport renewal'],
    type: 'direct',
    title: 'Required Items for Passport Renewal',
    items: [
      { text: 'Current or expired passport', isRequired: true },
      { text: 'Passport photo (2x2 inches)', isRequired: true },
      { text: 'Government-issued photo ID', isRequired: true },
      { text: 'Application form DS-82', isRequired: true },
      { text: 'Check or money order for fees', isRequired: true },
    ],
    source: 'travel.state.gov guidelines'
  }
];