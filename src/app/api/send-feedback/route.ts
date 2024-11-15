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
      to: userInput?.email || process.env.NEXT_PUBLIC_EMAILUSER,
      subject: 'New Feedback Submission',
      text: `
        Here is a copy of the form you filled on DashboardJs- Beta...
        \n\n
        Name: ${userInput?.name || 'Empty field'}
        Fancy DashboardJs? ${userInput?.rateMe || 'Maybe'}
        Your review and recommendation: ${userInput?.yourRecon || 'Empty field'}
        What brings you to DashboardJs: ${userInput?.whatInterestsYou || 'I am a fan'}
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
