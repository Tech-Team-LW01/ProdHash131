








// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import OfferLetterForm from './OfferLetterForm';
// import { Button } from '@/components/ui/button';
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableHead, 
//   TableHeader, 
//   TableRow 
// } from '@/components/ui/table';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { OfferLetterFormData } from '../../../../types/offerLetter';
// import { Input } from '@/components/ui/input';
// import HtmlOfferLetter from './HtmlOfferLetter';
// import toast, { Toaster } from 'react-hot-toast'; 
  
// // Helper function to format dates
// function formatDate(dateString: string): string {
//   if (!dateString) return '';
  
//   try {
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) return dateString;
    
//     return date.toLocaleDateString('en-GB', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     });
//   } catch (e) {
//     return dateString;
//   }
// }

// // Helper function to map Google Sheet data to our expected format
// function mapSheetDataToFormData(item: any): OfferLetterFormData | null {
//   // Skip if this looks like a header row
//   if (
//     item["Full Name"] === "Full Name" ||
//     item["E-mail Id"] === "E-mail Id" ||
//     item["College Name"] === "College Name" ||
//     item["Domain"] === "Domain" ||
//     item["Sr. No."] === "Sr. No." ||
//     item["Preferred Batch"] === "Preferred Batch"
//   ) {
//     return null;
//   }

//   // Skip empty rows
//   if (!item["Full Name"] && !item["E-mail Id"] && !item["College Name"]) {
//     return null;
//   }

//   const normalizedItem: Record<string, any> = {};
//   Object.keys(item).forEach(key => {
//     normalizedItem[key.toLowerCase().trim()] = item[key];
//   });
  
//   // Extract Sr. No. from the sheet
//   const srNo = parseInt(item["Sr. No."] || item["Sr.No."] || item["Sr No"] || "0");
  
//   return {
//     fullName: 
//       item["Full Name"] || 
//       normalizedItem["full name"] || 
//       normalizedItem["fullname"] || 
//       '',
//     email: 
//       item["E-mail Id"] || 
//       normalizedItem["email"] || 
//       '',
//     // phoneNumber: 
//     //   item["WhatsApp Number"] || 
//     //   normalizedItem["phone number"] || 
//     //   normalizedItem["phonenumber"] || 
//     //   '',
//     courseTitle: 
//       item["Domain"] || 
//       normalizedItem["course title"] || 
//       normalizedItem["coursetitle"] || 
//       '',
//     instituteName: 
//       item["College Name"] || 
//       normalizedItem["institute name"] || 
//       normalizedItem["institutename"] || 
//       '',
//     // startDate: formatDate(
//     //   item["Time & Date"] || 
//     //   normalizedItem["start date"] || 
//     //   normalizedItem["startdate"] || 
//     //   ''
//     // ),
//     // endDate: formatDate(
//     //   item["End Date"] || 
//     //   normalizedItem["end date"] || 
//     //   normalizedItem["enddate"] || 
//     //   ''
//     // ),
//     // address: 
//     //   item["Address"] || 
//     //   normalizedItem["address"] || 
//     //   '',
//     preferredBatch: 
//       item["Preferred Batch"] || 
//       normalizedItem["preferred batch"] || 
//       normalizedItem["preferredbatch"] || 
//       '',
//     serialNumber: srNo || undefined
//   };
// }

// export default function OfferLetterGenerator() {
//   const letterRef = useRef<HTMLDivElement>(null);
//   const [formData, setFormData] = useState<OfferLetterFormData | null>(null);
//   const [sheetData, setSheetData] = useState<OfferLetterFormData[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
//   const [isSendingEmail, setIsSendingEmail] = useState(false);
//   const [nextSerialNumber, setNextSerialNumber] = useState<number>(1000);
  
//   // Fetch data from Google Sheets API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
        
//         const response = await fetch('/api/offer-letter-data');
        
//         if (!response.ok) {
//           throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
//         }
        
//         const rawData = await response.json();
        
//         // Transform the data and filter out null values (header rows)
//         const formattedData = Array.isArray(rawData) 
//           ? rawData
//               .map(mapSheetDataToFormData)
//               .filter((item): item is OfferLetterFormData => item !== null)
//           : [];
        
//         // Remove duplicates based on email (or email + name combination)
//         const uniqueData = formattedData.reduce((acc: OfferLetterFormData[], current) => {
//           const duplicate = acc.find(item => 
//             item.email === current.email && 
//             item.fullName === current.fullName
//           );
//           if (!duplicate) {
//             acc.push(current);
//           }
//           return acc;
//         }, []);
        
//         if (uniqueData.length === 0) {
//           throw new Error("No data received from API");
//         }
        
//         // Find the highest serial number from the sheet data
//         const maxSerialFromSheet = Math.max(
//           ...uniqueData
//             .map(item => item.serialNumber || 0)
//             .filter(num => num > 0),
//           999
//         );
        
//         setNextSerialNumber(maxSerialFromSheet + 1);
//         setSheetData(uniqueData);
//       } catch (err) {
//         console.error("Error fetching Google Sheets data:", err);
//         setError('Error loading data from Google Sheets');
//         setSheetData([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchData();
//   }, []);
  
//   // Replace the existing handleSubmit function with this:
//   const handleSubmit = (data: OfferLetterFormData) => {
//     // Convert the refNumber string to a number for serialNumber
//     const dataWithSerial = {
//       ...data,
//       serialNumber: data.refNumber ? parseInt(data.refNumber) : nextSerialNumber
//     };
    
//     // If no refNumber provided, increment the nextSerialNumber
//     if (!data.refNumber) {
//       setNextSerialNumber(prev => prev + 1);
//     }
    
//     setFormData(dataWithSerial);
//     setError(null);
//   };
  
//   // Handle selecting a person from the list
//   const handleSelectPerson = (person: OfferLetterFormData) => {
//     setFormData(person);
//     setError(null);
//   };
  
//   // Helper function to prepare the letter for PDF generation or email
//   const prepareLetter = async (): Promise<{ canvas: HTMLCanvasElement } | null> => {
//     if (!formData || !letterRef.current) {
//       setError('Please wait for resources to load before processing.');
//       return null;
//     }
    
//     try {
//       letterRef.current.style.display = 'block';
      
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       const canvas = await html2canvas(letterRef.current, {
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//         backgroundColor: '#ffffff',
//         logging: false,
//         onclone: (clonedDoc) => {
//           const imgElement = clonedDoc.querySelector('img');
//           if (imgElement) {
//             return new Promise((resolve) => {
//               if (imgElement.complete) {
//                 resolve(undefined);
//               } else {
//                 imgElement.onload = () => resolve(undefined);
//               }
//             });
//           }
//           return Promise.resolve(undefined);
//         }
//       });
      
//       letterRef.current.style.display = 'none';
      
//       return { canvas };
//     } catch (err) {
//       console.error('Error preparing letter:', err);
//       setError('Failed to prepare the letter. Please try again.');
//       return null;
//     }
//   };
  
//   // PDF download function
//   const handleDownloadPdf = async () => {
//     setIsGeneratingPdf(true);
//     setError(null);
    
//     try {
//       const result = await prepareLetter();
      
//       if (!result) {
//         return;
//       }
      
//       const { canvas } = result;
      
//       const imgData = canvas.toDataURL('image/jpeg', 1.0);
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });
      
//       pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      
//       const cleanName = formData!.fullName.replace(/\s+/g, '-').toLowerCase();
//       pdf.save(`confirmation-letter-${cleanName}.pdf`);
      
//       toast.success("Your confirmation letter has been downloaded");
      
//     } catch (err) {
//       console.error('Error generating PDF:', err);
//       setError('Failed to generate PDF. Please try again.');
//     } finally {
//       setIsGeneratingPdf(false);
//     }
//   };
  
//   // Handle sending email with PDF attachment
//   const handleSendEmail = async () => {
//     if (!formData) {
//       setError('Please wait for resources to load before sending email.');
//       return;
//     }
    
//     try {
//       setIsSendingEmail(true);
//       setError(null);
      
//       const letterResult = await prepareLetter();
      
//       if (!letterResult) {
//         return;
//       }
      
//       const { canvas } = letterResult;
      
//       const imgData = canvas.toDataURL('image/jpeg', 1.0);
//       const pdf = new jsPDF({
//         orientation: 'portrait',
//         unit: 'mm',
//         format: 'a4'
//       });
      
//       pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      
//       const pdfBase64 = pdf.output('datauristring');
      
//       const response = await fetch('/api/send-offer-letter', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           fullName: formData.fullName,
//           pdfBase64: pdfBase64,
//           instituteName: formData.instituteName,
//           courseTitle: formData.courseTitle
//         }),
//       });
      
//       const responseData = await response.json();
      
//       if (!response.ok) {
//         throw new Error(responseData.error || 'Failed to send email');
//       }
      
//       toast.success(`Confirmation letter has been sent to ${formData.email}`);
      
//     } catch (err) {
//       console.error('Error sending email:', err);
//       setError(typeof err === 'object' && err !== null && 'message' in err 
//         ? (err as Error).message 
//         : 'Failed to send email. Please try again.');
        
//       toast.error("There was a problem sending the email. Please try again.");
//     } finally {
//       setIsSendingEmail(false);
//     }
//   };

//   // Filter data based on search term
//   const filteredData = sheetData.filter(person => 
//     (person.fullName && person.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (person.email && person.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (person.courseTitle && person.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (person.instituteName && person.instituteName.toLowerCase().includes(searchTerm.toLowerCase())) ||
//     (person.preferredBatch && person.preferredBatch.toLowerCase().includes(searchTerm.toLowerCase()))
//   );
  
//   return (
//     <div className="container mx-auto py-10 px-4">
//       <Toaster position="top-right" />
//       <h1 className="text-3xl font-bold text-center mb-8">Course Confirmation Letter Generator</h1>
      
//       {/* Form Section */}
//       {!formData && ( 
//         <div className="mb-12">
//           <OfferLetterForm onSubmit={handleSubmit} />
//         </div>
//       )}
      
//       {/* Preview & Download Section */}
//       {formData && (
//         <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
//           <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Form Submitted Successfully!</h2>
//           <div className="mb-6 p-4 bg-gray-50 rounded-md">
//             <h3 className="text-lg font-semibold mb-2">Preview of your information:</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p><span className="font-medium">Name:</span> {formData.fullName}</p>
//                 <p><span className="font-medium">Email:</span> {formData.email}</p>
//                 {/* <p><span className="font-medium">Phone:</span> {formData.phoneNumber}</p> */}
//                 <p><span className="font-medium">Institute:</span> {formData.instituteName}</p>
//               </div>
//               <div>
//                 <p><span className="font-medium">Course:</span> {formData.courseTitle}</p>
//                 <p><span className="font-medium">Preferred Batch:</span> {formData.preferredBatch}</p>
//                 {/* <p><span className="font-medium">Start Date:</span> {formData.startDate}</p> */}
//                 {/* <p><span className="font-medium">End Date:</span> {formData.endDate}</p> */}
//                 {/* <p><span className="font-medium">Address:</span> {formData.address}</p> */}
//                 <p><span className="font-medium">Reference No:</span> LWIPL-JPR-2025-{formData.serialNumber}</p>
//               </div>
//             </div>
//           </div>
          
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
//               <p>{error}</p>
//             </div>
//           )}
          
//           <div className="flex flex-wrap justify-center gap-4">
//             <Button 
//               onClick={handleDownloadPdf}
//               disabled={isGeneratingPdf || isSendingEmail}
//               className="bg-blue-600 hover:bg-blue-700"
//             >
//               {isGeneratingPdf ? 'Generating PDF...' : 'Download Confirmation Letter'}
//             </Button>
            
//             <Button 
//               onClick={handleSendEmail}
//               disabled={isGeneratingPdf || isSendingEmail}
//               className="bg-green-600 hover:bg-green-700"
//             >
//               {isSendingEmail ? 'Sending Email...' : 'Send via Email'}
//             </Button>
            
//             <Button variant="outline" onClick={() => setFormData(null)}>
//               Create Another Letter
//             </Button>
//           </div>
//         </div>
//       )}
      
//       {/* Hidden Letter Template for PDF generation */}
//       {formData && <HtmlOfferLetter data={formData} innerRef={letterRef} />}
      
//       {/* Google Sheets Data Table */}
//       <Card className="mt-8">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold">
//             Students Data from Google Sheets 
//             {sheetData.length > 0 && <span className="text-sm font-normal ml-2">({sheetData.length} records)</span>}
//           </CardTitle>
//           <div className="mt-2">
//             <Input 
//               placeholder="Search by name, email, institute, course or preferred batch..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="max-w-md"
//             />
//           </div>
//         </CardHeader>
//         <CardContent>
//           {isLoading ? (
//             <div className="text-center py-6">Loading data...</div>
//           ) : error && filteredData.length === 0 ? (
//             <div className="text-center py-6 text-red-500">{error}</div>
//           ) : (
//             <div className="overflow-x-auto">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Sr. No.</TableHead>
//                     <TableHead>Full Name</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead>Institute Name</TableHead>
//                     <TableHead>Course Title</TableHead>
//                     <TableHead>Preferred Batch</TableHead>
//                     {/* <TableHead>Start Date</TableHead>
//                     <TableHead>End Date</TableHead> */}
//                     <TableHead>Action</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredData.length === 0 ? (
//                     <TableRow>
//                       <TableCell colSpan={9} className="text-center py-4">
//                         No records found
//                       </TableCell>
//                     </TableRow>
//                   ) : (
//                     filteredData.map((person, index) => {
//                       return (
//                         <TableRow key={`${person.email}-${index}`}>
//                           <TableCell className="font-medium">{person.serialNumber || 'N/A'}</TableCell>
//                           <TableCell>{person.fullName || 'N/A'}</TableCell>
//                           <TableCell>{person.email || 'N/A'}</TableCell>
//                           <TableCell>{person.instituteName || 'N/A'}</TableCell>
//                           <TableCell>{person.courseTitle || 'N/A'}</TableCell>
//                           <TableCell>{person.preferredBatch || 'N/A'}</TableCell>
//                           {/* <TableCell>{person.startDate || 'N/A'}</TableCell> */}
//                           {/* <TableCell>{person.endDate || 'N/A'}</TableCell> */}
//                           <TableCell>
//                             <div className="flex gap-2">
//                               <Button 
//                                 size="sm" 
//                                 onClick={() => handleSelectPerson(person)}
//                               >
//                                 Generate Letter
//                               </Button>
//                             </div>
//                           </TableCell>
//                         </TableRow>
//                       );
//                     })
//                   )}
//                 </TableBody>
//               </Table>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





// Your main component file
"use client";

import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import OfferLetterForm from './OfferLetterForm';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OfferLetterFormData } from '../../../../types/offerLetter';
import { Input } from '@/components/ui/input';
import HtmlOfferLetter from './HtmlOfferLetter';
import toast, { Toaster } from 'react-hot-toast'; 
  
// Helper function to format dates
function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch (e) {
    return dateString;
  }
}

// Helper function to map Google Sheet data to our expected format
function mapSheetDataToFormData(item: any): OfferLetterFormData | null {
  // Skip if this looks like a header row
  if (
    item["Full Name"] === "Full Name" ||
    item["E-mail Id"] === "E-mail Id" ||
    item["College Name"] === "College Name" ||
    item["Domain"] === "Domain" ||
    item["Sr. No."] === "Sr. No." ||
    item["Preferred Batch"] === "Preferred Batch" ||
    item["Status"] === "Status"
  ) {
    return null;
  }

  // Skip empty rows
  if (!item["Full Name"] && !item["E-mail Id"] && !item["College Name"]) {
    return null;
  }

  const normalizedItem: Record<string, any> = {};
  Object.keys(item).forEach(key => {
    normalizedItem[key.toLowerCase().trim()] = item[key];
  });
  
  // Extract Sr. No. from the sheet
  const srNo = parseInt(item["Sr. No."] || item["Sr.No."] || item["Sr No"] || "0");
  
  return {
    fullName: 
      item["Full Name"] || 
      normalizedItem["full name"] || 
      normalizedItem["fullname"] || 
      '',
    email: 
      item["E-mail Id"] || 
      normalizedItem["email"] || 
      '',
    courseTitle: 
      item["Domain"] || 
      normalizedItem["course title"] || 
      normalizedItem["coursetitle"] || 
      '',
    instituteName: 
      item["College Name"] || 
      normalizedItem["institute name"] || 
      normalizedItem["institutename"] || 
      '',
    preferredBatch: 
      item["Preferred Batch"] || 
      normalizedItem["preferred batch"] || 
      normalizedItem["preferredbatch"] || 
      '',
    status: 
      item["Status"] || 
      normalizedItem["status"] || 
      '', // Add status mapping
    serialNumber: srNo || undefined
  };
}

export default function OfferLetterGenerator() {
  const letterRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<OfferLetterFormData | null>(null);
  const [sheetData, setSheetData] = useState<OfferLetterFormData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [nextSerialNumber, setNextSerialNumber] = useState<number>(1000);
  
  // Fetch data from Google Sheets API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch('/api/offer-letter-data');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        
        const rawData = await response.json();
        
        // Transform the data and filter out null values (header rows)
        const formattedData = Array.isArray(rawData) 
          ? rawData
              .map(mapSheetDataToFormData)
              .filter((item): item is OfferLetterFormData => item !== null)
          : [];
        
        // Remove duplicates based on email (or email + name combination)
        const uniqueData = formattedData.reduce((acc: OfferLetterFormData[], current) => {
          const duplicate = acc.find(item => 
            item.email === current.email && 
            item.fullName === current.fullName
          );
          if (!duplicate) {
            acc.push(current);
          }
          return acc;
        }, []);
        
        if (uniqueData.length === 0) {
          throw new Error("No data received from API");
        }
        
        // Find the highest serial number from the sheet data
        const maxSerialFromSheet = Math.max(
          ...uniqueData
            .map(item => item.serialNumber || 0)
            .filter(num => num > 0),
          999
        );
        
        setNextSerialNumber(maxSerialFromSheet + 1);
        setSheetData(uniqueData);
      } catch (err) {
        console.error("Error fetching Google Sheets data:", err);
        setError('Error loading data from Google Sheets');
        setSheetData([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Function to update status in Google Sheets
  const updateStatusInSheet = async (email: string, fullName: string, status: string) => {
    try {
      const response = await fetch('/api/update-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          fullName,
          status
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status in sheet');
      }

      // Update local state
      setSheetData(prevData => 
        prevData.map(person => 
          person.email === email && person.fullName === fullName
            ? { ...person, status }
            : person
        )
      );

      return true;
    } catch (error) {
      console.error('Error updating status:', error);
      return false;
    }
  };
  
  // Replace the existing handleSubmit function with this:
  const handleSubmit = (data: OfferLetterFormData) => {
    // Convert the refNumber string to a number for serialNumber
    const dataWithSerial = {
      ...data,
      serialNumber: data.refNumber ? parseInt(data.refNumber) : nextSerialNumber
    };
    
    // If no refNumber provided, increment the nextSerialNumber
    if (!data.refNumber) {
      setNextSerialNumber(prev => prev + 1);
    }
    
    setFormData(dataWithSerial);
    setError(null);
  };
  
  // Handle selecting a person from the list
  const handleSelectPerson = (person: OfferLetterFormData) => {
    setFormData(person);
    setError(null);
  };
  
  // Helper function to prepare the letter for PDF generation or email
  const prepareLetter = async (): Promise<{ canvas: HTMLCanvasElement } | null> => {
    if (!formData || !letterRef.current) {
      setError('Please wait for resources to load before processing.');
      return null;
    }
    
    try {
      letterRef.current.style.display = 'block';
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const canvas = await html2canvas(letterRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: (clonedDoc) => {
          const imgElement = clonedDoc.querySelector('img');
          if (imgElement) {
            return new Promise((resolve) => {
              if (imgElement.complete) {
                resolve(undefined);
              } else {
                imgElement.onload = () => resolve(undefined);
              }
            });
          }
          return Promise.resolve(undefined);
        }
      });
      
      letterRef.current.style.display = 'none';
      
      return { canvas };
    } catch (err) {
      console.error('Error preparing letter:', err);
      setError('Failed to prepare the letter. Please try again.');
      return null;
    }
  };
  
  // PDF download function
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setError(null);
    
    try {
      const result = await prepareLetter();
      
      if (!result) {
        return;
      }
      
      const { canvas } = result;
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      
      const cleanName = formData!.fullName.replace(/\s+/g, '-').toLowerCase();
      pdf.save(`confirmation-letter-${cleanName}.pdf`);
      
      // Update status to "Sent" after successful PDF generation
      if (formData) {
        await updateStatusInSheet(formData.email, formData.fullName, 'Sent');
      }
      
      toast.success("Your confirmation letter has been downloaded and status updated");
      
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  // Handle sending email with PDF attachment
  const handleSendEmail = async () => {
    if (!formData) {
      setError('Please wait for resources to load before sending email.');
      return;
    }
    
    try {
      setIsSendingEmail(true);
      setError(null);
      
      const letterResult = await prepareLetter();
      
      if (!letterResult) {
        return;
      }
      
      const { canvas } = letterResult;
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      
      const pdfBase64 = pdf.output('datauristring');
      
      const response = await fetch('/api/send-offer-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          fullName: formData.fullName,
          pdfBase64: pdfBase64,
          instituteName: formData.instituteName,
          courseTitle: formData.courseTitle
        }),
      });
      
      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to send email');
      }
      
      // Update status to "Sent" after successful email sending
      await updateStatusInSheet(formData.email, formData.fullName, 'Sent');
      
      toast.success(`Confirmation letter has been sent to ${formData.email} and status updated`);
      
    } catch (err) {
      console.error('Error sending email:', err);
      setError(typeof err === 'object' && err !== null && 'message' in err 
        ? (err as Error).message 
        : 'Failed to send email. Please try again.');
        
      toast.error("There was a problem sending the email. Please try again.");
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Filter data based on search term
  const filteredData = sheetData.filter(person => 
    (person.fullName && person.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.email && person.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.courseTitle && person.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.instituteName && person.instituteName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.preferredBatch && person.preferredBatch.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.status && person.status.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="container mx-auto py-10 px-4">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-center mb-8">Course Confirmation Letter Generator</h1>
      
      {/* Form Section */}
      {!formData && ( 
        <div className="mb-12">
          <OfferLetterForm onSubmit={handleSubmit} />
        </div>
      )}
      
      {/* Preview & Download Section */}
      {formData && (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Form Submitted Successfully!</h2>
          <div className="mb-6 p-4 bg-gray-50 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Preview of your information:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><span className="font-medium">Name:</span> {formData.fullName}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Institute:</span> {formData.instituteName}</p>
              </div>
              <div>
                <p><span className="font-medium">Course:</span> {formData.courseTitle}</p>
                <p><span className="font-medium">Preferred Batch:</span> {formData.preferredBatch}</p>
                <p><span className="font-medium">Reference No:</span> LWIPL-JPR-2025-{formData.serialNumber}</p>
                <p><span className="font-medium">Status:</span> {formData.status || 'Not Sent'}</p>
              </div>
            </div>
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf || isSendingEmail}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isGeneratingPdf ? 'Generating PDF...' : 'Download Confirmation Letter'}
            </Button>
            
            <Button 
              onClick={handleSendEmail}
              disabled={isGeneratingPdf || isSendingEmail}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSendingEmail ? 'Sending Email...' : 'Send via Email'}
            </Button>
            
            <Button variant="outline" onClick={() => setFormData(null)}>
              Create Another Letter
            </Button>
          </div>
        </div>
      )}
      
      {/* Hidden Letter Template for PDF generation */}
      {formData && <HtmlOfferLetter data={formData} innerRef={letterRef} />}
      
      {/* Google Sheets Data Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Students Data from Google Sheets 
            {sheetData.length > 0 && <span className="text-sm font-normal ml-2">({sheetData.length} records)</span>}
          </CardTitle>
          <div className="mt-2">
            <Input 
              placeholder="Search by name, email, institute, course, preferred batch or status..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-6">Loading data...</div>
          ) : error && filteredData.length === 0 ? (
            <div className="text-center py-6 text-red-500">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sr. No.</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Institute Name</TableHead>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Preferred Batch</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-4">
                        No records found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredData.map((person, index) => {
                      return (
                        <TableRow key={`${person.email}-${index}`}>
                          <TableCell className="font-medium">{person.serialNumber || 'N/A'}</TableCell>
                          <TableCell>{person.fullName || 'N/A'}</TableCell>
                          <TableCell>{person.email || 'N/A'}</TableCell>
                          <TableCell>{person.instituteName || 'N/A'}</TableCell>
                          <TableCell>{person.courseTitle || 'N/A'}</TableCell>
                          <TableCell>{person.preferredBatch || 'N/A'}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              person.status === 'Sent' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {person.status || 'Not Sent'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                onClick={() => handleSelectPerson(person)}
                                disabled={person.status === 'Sent'}
                                className={person.status === 'Sent' ? 'opacity-50' : ''}
                              >
                                {person.status === 'Sent' ? 'Already Sent' : 'Generate Letter'}
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}