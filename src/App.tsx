import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import DonorForm from './components/DonorForm';
import EligibleDonors from './components/EligibleDonors';
import { isEligibleToDonate } from './utils/validation';
import { saveEligibleDonor, getEligibleDonors } from './utils/storage';
import { DonorForm as DonorFormType, Donor } from './types/donor';

function App() {
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [donors, setDonors] = useState<Donor[]>(getEligibleDonors());

  const handleSubmit = (formData: DonorFormType) => {
    const eligibilityCheck = isEligibleToDonate(formData);

    if (!eligibilityCheck.eligible) {
      setMessage({ type: 'error', text: eligibilityCheck.reason || 'Not eligible to donate' });
      return;
    }

    const newDonor: Donor = {
      ...formData,
      id: crypto.randomUUID(),
      registrationDate: new Date().toISOString(),
    };

    saveEligibleDonor(newDonor);
    setDonors(getEligibleDonors());
    setMessage({ type: 'success', text: 'Successfully registered as a donor!' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center mb-8">
            <Heart className="mx-auto h-12 w-12 text-red-600" />
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Blood Donation Registration</h1>
            <p className="mt-2 text-gray-600">Register to become a blood donor and help save lives</p>
          </div>

          {message && (
            <div className={`mb-4 p-4 rounded-md ${
              message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <DonorForm onSubmit={handleSubmit} />
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligible Donors</h2>
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <EligibleDonors donors={donors} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;