import nodemailer from 'nodemailer';
import User from '../Models/User.model.js'; // Import your User model
import dotenv from 'dotenv';


dotenv.config();
// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL, // Replace with your company email
    pass: process.env.APPPASS // Replace with your email password
  }
});

// Handle form submission and send email
export const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Retrieve user's email from the database based on the provided email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Send email
    await transporter.sendMail({
      from: email, // Use the user's email as the "from" address
      to: process.env.EMAIL,  // Replace with your company email
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};

