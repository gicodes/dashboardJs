import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message?: string
  error?: string
}

const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAILSERVICE,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAILUSER,
    pass: process.env.NEXT_PUBLIC_EMAILPASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
  ) {  
  if (req.method !== 'POST') return res.status(404).send({ error: "Failed!" });

  const { 
    name, 
    'do-you-like': like, 
    'what-brought-you': reason, 
    'how-to-improve': improvement, 
    email 
  } = req.body;

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAILUSER,
    to: 'your-email@example.com',
    subject: 'New Feedback Submission',
    text: `
      Name: ${name}
      Likes DashboardJs: ${like}
      Reason for visiting: ${reason}
      Improvement suggestion: ${improvement}
      User email: ${email}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({
      message: 'Feedback sent successfully!',
      error: 'no error'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      error: 'Failed to send feedback',
      message: 'Failed!'
    });
  }
}
