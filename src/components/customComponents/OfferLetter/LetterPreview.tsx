import React from 'react';
import { OfferLetterFormData } from '../../../../types/offerLetter';
import lwlogo from "../../../../public/assets/OfferLetter/LW JAZBAA.png";
import seal from "../../../../public/assets/OfferLetter/seal.png";
import sign from "../../../../public/assets/OfferLetter/sign.png";

interface LetterPreviewProps {
  data: OfferLetterFormData;
}

const LetterPreview: React.FC<LetterPreviewProps> = ({ data }) => {
  return (
    <div className="w-full h-full bg-white relative font-sans">
      <img src={lwlogo.src} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover opacity-10" />
      <div className="relative z-10 p-4">
        <p><strong>To:</strong> {data.fullName}</p>
        <p><strong>Re:</strong> Offer of Internship</p>
        <p className="mt-4">This is a preview of the offer letter for {data.fullName}. The full letter will be generated in the PDF.</p>
        <div className="absolute bottom-10 left-4">
          <img src={seal.src} alt="Seal" width={50} height={50} className="opacity-80" />
          <img src={sign.src} alt="Signature" width={70} height={40} className="absolute top-2 left-2" />
        </div>
      </div>
    </div>
  );
};

export default LetterPreview; 