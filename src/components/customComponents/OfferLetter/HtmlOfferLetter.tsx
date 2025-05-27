
// components/HtmlOfferLetter.tsx
import React from 'react';
import { OfferLetterFormData } from '../../../../types/offerLetter';
import lwlogo from "../../../../public/assets/OfferLetter/LW-JAZBAA[1].jpg";
import seal from "../../../../public/assets/OfferLetter/seal.png";
import sign from "../../../../public/assets/OfferLetter/sign.png";

interface HtmlOfferLetterProps {
  data: OfferLetterFormData;
  innerRef: React.RefObject<HTMLDivElement>;
}

const HtmlOfferLetter: React.FC<HtmlOfferLetterProps> = ({ data, innerRef }) => {
  // Format today's date with ordinal suffix (1st, 2nd, 3rd, etc.)
  const formatDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleDateString('en-US', { month: 'long' });
    const year = today.getFullYear();
    
    // Add ordinal suffix
    const getOrdinalSuffix = (d: number) => {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
    
    return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
  };

  // Generate reference number based on course
  const generateRefNumber = () => {
    const projectCodeMap: {[key: string]: string} = {
      "DevOps End to End": "JPR",
      "Cloud Computing": "JPR",
      "Data Science": "JPR",
      "Machine Learning": "JPR",
      "Artificial Intelligence": "JPR",
    };
    
    const projectCode = projectCodeMap[data.courseTitle] || "JPR";
    const year = new Date().getFullYear();
    
    return `LWIPL-${projectCode}-${year}-101`;
  };

  return (
    <div 
      ref={innerRef} 
      className="w-[210mm] h-[297mm] mx-auto bg-white relative font-sans hidden overflow-hidden"
    >
      {/* Background image */}
      <img 
        src={lwlogo.src}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 z-0"
      />

      {/* Content container */}
      <div className="relative z-10 pt-[240px] pl-[100px] pr-[60px] h-full box-border">
        {/* Reference and Date - formatted to match image */}
        <div className="flex justify-between mb-8 text-sm font-medium">
          <div><span className="font-bold">Ref:</span> {generateRefNumber()}</div>
          <div><span className="font-bold">Date:</span> {formatDate()}</div>
        </div>

        {/* Addressee */}
        <div className="mb-6 text-sm leading-relaxed">
          <p className="mb-1">To,</p>
          <p className="mb-1">The Training & Placement Officer</p>
          <p className="mb-1 font-bold">{data.instituteName}</p>
        </div>

        {/* Subject Line */}
        {/* <div className="mb-5 text-sm font-bold">
          <p>Subject: Confirmation of Course Enrollment for {data.fullName}</p>
        </div> */}

        {/* Letter Body */}
        <div className="text-sm leading-relaxed text-justify mb-6">
          <p className="mb-4">
            This is to certify that <span className="font-bold"> {data.fullName}</span> Student of <span className="font-bold">{data.instituteName}</span> will be undergoing the Summer Internship Program on <span className="font-bold">&ldquo;{data.courseTitle}&rdquo;</span> at LinuxWorld Informatics Pvt. Ltd. under the mentorship of The World Record Holder & CTO- <span className="font-bold">Mr. Vimal Daga</span>, for a period of <span className="font-bold">45 days</span> as per the official college Curriculum.
          </p>
          
          <p className="mb-2">
            The management will continuously monitor his performance during the summer period of research and development.
          </p>
        </div>

        {/* Signature Area */}
        <div className="mt-">
          <p className="mb-1">Regards,</p>
          <p className="mb-2">LinuxWorld Informatics Pvt Ltd</p>
          
          {/* Signature and Seal Container */}
          <div className="relative mt-2 h-[100px] w-[200px]">
            {/* Seal Image */}
            <img 
              src={seal.src}
              alt="Official Seal"
              className="absolute bottom-0 left-0 w-[80px] h-[80px] object-contain z-10"
            />
            
            {/* Signature Image */}
            <img 
              src={sign.src}
              alt="Signature"
              className="absolute top-0 left-[20px] w-[120px] object-contain z-20"
            />
          </div>
          
          <p className="font-bold mt-">Ms. Preeti Daga</p>
          
        </div>
      </div>
    </div>
  );
};

export default HtmlOfferLetter;