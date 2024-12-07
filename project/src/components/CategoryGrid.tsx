import React from 'react';
import { Calendar, Users, Plane, MapPin } from 'lucide-react';
import type { Category } from '../types';

const categories: Category[] = [
  {
    id: 'party',
    name: 'Parties',
    icon: 'Users',
    description: 'From birthday bashes to dinner parties',
  },
  {
    id: 'appointment',
    name: 'Appointments',
    icon: 'Calendar',
    description: 'Medical visits, interviews, and meetings',
  },
  {
    id: 'vacation',
    name: 'Vacations',
    icon: 'Plane',
    description: 'Travel essentials for any destination',
  },
  {
    id: 'other',
    name: 'Custom Events',
    icon: 'MapPin',
    description: 'Create a custom checklist for any occasion',
  },
];

const iconMap = {
  Users,
  Calendar,
  Plane,
  MapPin,
};

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {categories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <div
            key={category.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors duration-200">
                <Icon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}