export interface OfferLetterFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  courseTitle: string;
  startDate: string;
  endDate: string;
  address: string;
}

export interface OfferLetterPDFProps {
  data: OfferLetterFormData;
}

export interface OfferLetterFormProps {
  onSubmit: (data: OfferLetterFormData) => void;
}