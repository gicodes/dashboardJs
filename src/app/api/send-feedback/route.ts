import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAILSERVICE,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAILUSER,
    pass: process.env.NEXT_PUBLIC_EMAILPASS,
  },
});

export async function POST(request: Request) {
  try {
    const userInput = await request.json();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAILUSER,
      to: process.env.NEXT_PUBLIC_EMAILUSER,
      subject: 'New Feedback Submission',
      text: `
        Name: ${userInput?.name || 'N/A'}
        Likes DashboardJs? ${userInput?.rateMe || 'N/A'}
        Reason for visiting: ${userInput?.whatInterestsYou || 'N/A'}
        Improvement suggestion: ${userInput?.yourRecon || 'N/A'}
        User email: ${userInput?.email || 'N/A'}
      `,
    };
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: 'Feedback sent successfully!',
        error: 'no error'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to send feedback',
        message: 'Failed!'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
