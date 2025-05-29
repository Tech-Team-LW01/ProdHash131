// api/update-status/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, fullName, status } = await request.json();

    if (!email || !fullName || !status) {
      return NextResponse.json(
        { error: 'Email, fullName, and status are required' },
        { status: 400 }
      );
    }

    // Your Google Apps Script URL for updating status
    const APPS_SCRIPT_UPDATE_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_UPDATE_URL || 
      'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

    const response = await fetch(APPS_SCRIPT_UPDATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'updateStatus',
        email,
        fullName,
        status
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update status: ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json({ 
      success: true, 
      message: 'Status updated successfully',
      result 
    });

  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json(
      { error: 'Failed to update status in Google Sheets' },
      { status: 500 }
    );
  }
}