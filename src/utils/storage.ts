import { Donor } from '../types/donor';

export const saveEligibleDonor = (donor: Donor) => {
  const donors = getEligibleDonors();
  donors.push(donor);
  localStorage.setItem('eligibleDonors', JSON.stringify(donors));
};

export const getEligibleDonors = (): Donor[] => {
  const donors = localStorage.getItem('eligibleDonors');
  return donors ? JSON.parse(donors) : [];
};