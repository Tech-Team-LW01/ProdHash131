"use client";

import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import OfferLetterForm from './OfferLetterForm';
import OfferLetterPDF from './OfferLetterPdf';
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

// Helper function to format dates
function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid
    
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  } catch (e) {
    return dateString; // Return original on error
  }
}

// Helper function to map Google Sheet data to our expected format
function mapSheetDataToFormData(item: any): OfferLetterFormData {
  // Create a normalized version of the item with lowercase keys for flexible matching
  const normalizedItem: Record<string, any> = {};
  Object.keys(item).forEach(key => {
    normalizedItem[key.toLowerCase().trim()] = item[key];
  });
  
  // Extract values using various possible key formats
  return {
    fullName: 
      item["Full Name "] || 
      item["Full Name"] || 
      normalizedItem["full name"] || 
      normalizedItem["fullname"] || 
      '',
    email: 
      item["Email"] || 
      normalizedItem["email"] || 
      '',
    phoneNumber: 
      item["Phone Number "] || 
      item["Phone Number"] || 
      normalizedItem["phone number"] || 
      normalizedItem["phonenumber"] || 
      '',
    courseTitle: 
      item["Course Title "] || 
      item["Course Title"] || 
      normalizedItem["course title"] || 
      normalizedItem["coursetitle"] || 
      '',
    startDate: formatDate(
      item["Start Date "] || 
      item["Start Date"] || 
      normalizedItem["start date"] || 
      normalizedItem["startdate"] || 
      ''
    ),
    endDate: formatDate(
      item["End Date "] || 
      item["End Date"] || 
      normalizedItem["end date"] || 
      normalizedItem["enddate"] || 
      ''
    ),
    address: 
      item["Address"] || 
      normalizedItem["address"] || 
      '',
  };
}

export default function OfferLetterGenerator() {
  const [formData, setFormData] = useState<OfferLetterFormData | null>(null);
  const [sheetData, setSheetData] = useState<OfferLetterFormData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
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
        
        // Transform the data to match your expected format
        const formattedData = Array.isArray(rawData) ? rawData.map(mapSheetDataToFormData) : [];
        
        if (formattedData.length === 0) {
          throw new Error("No data received from API");
        }
        
        setSheetData(formattedData);
      } catch (err) {
        console.error("Error fetching Google Sheets data:", err);
        setError('Error loading data from Google Sheets');
        
        // Use mock data on error
        const mockData = [
          {
            fullName: "Bhupesh Choudary",
            email: "bhupeshi.choudary@example.com",
            phoneNumber: "7489356891",
            courseTitle: "Devops End to End",
            startDate: "06/11/2025",
            endDate: "25/12/2025",
            address: "Jaipur"
          }
        ];
        setSheetData(mockData);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  // Handle form submission
  const handleSubmit = (data: OfferLetterFormData) => {
    setFormData(data);
  };
  
  // Handle selecting a person from the list
  const handleSelectPerson = (person: OfferLetterFormData) => {
    setFormData(person);
  };
  
  // Filter data based on search term
  const filteredData = sheetData.filter(person => 
    (person.fullName && person.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.email && person.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (person.courseTitle && person.courseTitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="container mx-auto py-10 px-4">
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p><span className="font-medium">Name:</span> {formData.fullName}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Phone:</span> {formData.phoneNumber}</p>
              </div>
              <div>
                <p><span className="font-medium">Course:</span> {formData.courseTitle}</p>
                <p><span className="font-medium">Start Date:</span> {formData.startDate}</p>
                <p><span className="font-medium">End Date:</span> {formData.endDate}</p>
              </div>
            </div>
            <p className="mt-2"><span className="font-medium">Address:</span> {formData.address}</p>
          </div>
          
          <div className="flex justify-center gap-4">
            <PDFDownloadLink 
              document={<OfferLetterPDF data={formData} />} 
              fileName={`confirmation-letter-${formData.fullName.replace(/\s+/g, '-').toLowerCase()}.pdf`}
              className="no-underline"
            >
              {({ loading }) => 
                <Button disabled={loading}>
                  {loading ? 'Generating PDF...' : 'Download Confirmation Letter'}
                </Button>
              }
            </PDFDownloadLink>
            
            <Button variant="outline" onClick={() => setFormData(null)}>
              Create Another Letter
            </Button>
          </div>
        </div>
      )}
      
      {/* Google Sheets Data Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Students Data from Google Sheets</CardTitle>
          <div className="mt-2">
            <Input 
              placeholder="Search by name, email, or course..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-6">Loading data...</div>
          ) : error ? (
            <div className="text-center py-6 text-red-500">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Course Title</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4">
                        No records found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredData.map((person, index) => (
                      <TableRow key={index}>
                        <TableCell>{person.fullName || 'N/A'}</TableCell>
                        <TableCell>{person.email || 'N/A'}</TableCell>
                        <TableCell>{person.courseTitle || 'N/A'}</TableCell>
                        <TableCell>{person.startDate || 'N/A'}</TableCell>
                        <TableCell>{person.endDate || 'N/A'}</TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            onClick={() => handleSelectPerson(person)}
                          >
                            Generate Letter
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
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