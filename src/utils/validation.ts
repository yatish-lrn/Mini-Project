export const isEligibleToDonate = (donor: {
  age: number;
  weight: number;
  hasHealthIssues: boolean;
  hasConsumedAlcohol: boolean;
  lastDonationDate: string;
}): { eligible: boolean; reason?: string } => {
  if (donor.age < 18 || donor.age > 65) {
    return { eligible: false, reason: "Age must be between 18 and 65 years" };
  }

  if (donor.weight < 50) {
    return { eligible: false, reason: "Weight must be at least 50 kg" };
  }

  if (donor.hasHealthIssues) {
    return { eligible: false, reason: "Cannot donate due to health issues" };
  }

  if (donor.hasConsumedAlcohol) {
    return { eligible: false, reason: "Cannot donate if alcohol was consumed recently" };
  }

  const lastDonation = new Date(donor.lastDonationDate);
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  if (lastDonation > threeMonthsAgo) {
    return { eligible: false, reason: "Must wait 3 months between donations" };
  }

  return { eligible: true };
};