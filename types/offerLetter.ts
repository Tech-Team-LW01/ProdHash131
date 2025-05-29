// types/offerLetter.ts
export interface OfferLetterFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  courseTitle: string;
  instituteName: string;
  startDate: string;
  endDate: string;
  address: string;
  serialNumber?: number;
  refNumber?: string; // Add this for manual reference number input
}


export interface OfferLetterPDFProps {
  data: OfferLetterFormData;
}

export interface OfferLetterFormProps {
  onSubmit: (data: OfferLetterFormData) => void;
}