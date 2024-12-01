import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body as ContactData;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Add your email sending logic here

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}
