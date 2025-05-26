// types/offerLetter.ts
export interface OfferLetterFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  courseTitle: string;
  instituteName: string; // Added institute name field
  startDate: string;
  endDate: string;
  address: string;
  gender?: 'male' | 'female' | 'other';
}

export interface OfferLetterPDFProps {
  data: OfferLetterFormData;
}

export interface OfferLetterFormProps {
  onSubmit: (data: OfferLetterFormData) => void;
}