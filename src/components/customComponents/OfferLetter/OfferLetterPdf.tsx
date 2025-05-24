import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { OfferLetterFormData } from '../../../../types/offerLetter';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1px solid #666',
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  strong: {
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    borderTop: '1px solid #666',
    paddingTop: 10,
    fontSize: 10,
    textAlign: 'center',
  },
  signature: {
    marginTop: 50,
    fontSize: 12,
  },
});

interface OfferLetterPDFProps {
  data: OfferLetterFormData;
}

// PDF Document Component
const OfferLetterPDF: React.FC<OfferLetterPDFProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
        <View style={styles.header}>
  <Text style={styles.logo}>#13 LinuxWorld</Text>
  <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
</View>

<Text style={styles.title}>Course Confirmation Letter</Text>

<View style={styles.section}>
  <Text style={styles.text}>Dear {data.fullName},</Text>
  
  <Text style={styles.text}>
    We are pleased to confirm your enrollment in our <Text style={styles.strong}>{data.courseTitle}</Text> course.
    Your enrollment has been successfully processed and we are excited to welcome you to our learning community.
  </Text>
  
  <Text style={styles.text}>
    <Text style={styles.strong}>Course Details:</Text>
    {'\n'}Course: {data.courseTitle}
    {'\n'}Start Date: {data.startDate}
    {'\n'}End Date: {data.endDate}
  </Text>
  
  <Text style={styles.text}>
    <Text style={styles.strong}>Your Information:</Text>
    {'\n'}Name: {data.fullName}
    {'\n'}Email: {data.email}
    {'\n'}Phone: {data.phoneNumber}
    {'\n'}Address: {data.address}
  </Text>
  
  <Text style={styles.text}>
    Please ensure that you have completed all the prerequisites for this course. 
    If you have any questions or require additional information, please do not hesitate
    to contact our support team at support@linuxworld.in or call us at +91-XXXXXXXXXX.
  </Text>
  
  <Text style={styles.text}>
    We look forward to providing you with an enriching learning experience and helping
    you achieve your professional goals.
  </Text>
  
  <View style={styles.signature}>
    <Text>Sincerely,</Text>
    <Text style={[styles.text, styles.strong]}>Course Administration Team</Text>
    <Text>LinuxWorld Informatics Pvt Ltd</Text>
  </View>
</View>

<View style={styles.footer}>
  <Text>LinuxWorld Informatics Pvt Ltd | Jaipur, Rajasthan | www.linuxworld.in</Text>
</View>
</Page>
</Document>
);

export default OfferLetterPDF;