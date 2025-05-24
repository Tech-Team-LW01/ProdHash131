import { OfferLetterFormData } from "../../types/offerLetter";

// Your Google Apps Script web app URL
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzy5weTcDxjgBBhy-Ct8zuEc7Cym76O6N1ytcU2etVZYIuzWxfIRafgLLh6tgwtp2eo9g/exec';

// Function to fetch data from the Google Apps Script web app
export async function fetchOfferLetterData(): Promise<OfferLetterFormData[]> {
  try {
    const response = await fetch(APPS_SCRIPT_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Map the received data to match your OfferLetterFormData structure
    // Note: This mapping depends on how your Apps Script formats the data
    return data.map((item: any) => ({
      fullName: item.FullName || '',
      email: item.Email || '',
      phoneNumber: item.PhoneNumber || '',
      courseTitle: item.CourseTitle || '',
      startDate: item.StartDate || '',
      endDate: item.EndDate || '',
      address: item.Address || '',
    }));
  } catch (error) {
    console.error('Error fetching data from Google Apps Script:', error);
    throw error;
  }
}