import React from 'react';
import { Users } from 'lucide-react';
import { Donor } from '../types/donor';

interface Props {
  donors: Donor[];
}

export default function EligibleDonors({ donors }: Props) {
  if (donors.length === 0) {
    return (
      <div className="text-center py-8">
        <Users className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No eligible donors</h3>
        <p className="mt-1 text-sm text-gray-500">Start by registering new donors.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{donor.fullName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.bloodGroup}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {donor.phone}<br/>{donor.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(donor.registrationDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}