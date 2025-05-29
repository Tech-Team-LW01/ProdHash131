// types/offerLetter.ts
export interface OfferLetterFormData {
  fullName: string;
  email: string;
  // phoneNumber: string;
  serialNumber?: number;
  refNumber?: string;
  courseTitle: string;
  instituteName: string;
  // startDate: string;
  // endDate: string;
  // address: string;
  preferredBatch: string; // Add this new field
}

export interface OfferLetterPDFProps {
  data: OfferLetterFormData;
}

export interface OfferLetterFormProps {
  onSubmit: (data: OfferLetterFormData) => void;
}