export interface DonorForm {
  fullName: string;
  age: number;
  bloodGroup: string;
  weight: number;
  hasHealthIssues: boolean;
  hasConsumedAlcohol: boolean;
  lastDonationDate: string;
  phone: string;
  email: string;
}

export interface Donor extends DonorForm {
  id: string;
  registrationDate: string;
}