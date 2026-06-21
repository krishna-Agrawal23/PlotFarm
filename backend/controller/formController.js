import Form from '../models/formModel.js';
import emailService from '../services/emailService.js';
export const submitForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body; // Debugging log

    const newForm = new Form({
      name,
      email,
      phone,
      message,
    });

    const savedForm = await newForm.save();

    const subject = `New Schedule Call Request: ${name}`;
    const htmlContent = `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #E6E0DA; border-radius: 10px;">
        <h2 style="color: #221410;">New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr style="border: 0; border-top: 1px solid #EEE;" />
        <p style="font-size: 12px; color: #666;">This request was sent from the PlotFarm Schedule Call page.</p>
      </div>
    `;

    // Use the instance method sendEmail
    const myEmail = 'krishnaagr218@gmail.com';
    // const adminEmail = process.env.ADMIN_EMAIL || 'admin@plotfarm.com';
    await emailService.sendEmail(myEmail, subject, htmlContent);
    const result = await emailService.sendEmail(myEmail, `Call Request: ${name}`, `Contact: ${phone}`);

    console.log("Email Result:", result); // Log success
    

    res.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};