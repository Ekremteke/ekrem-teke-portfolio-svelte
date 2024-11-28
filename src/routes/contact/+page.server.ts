import { fail, type Actions } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { emailConfig } from '$lib/server/config';

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const name = formData.get('name')?.toString();
            const email = formData.get('email')?.toString();
            const subject = formData.get('subject')?.toString();
            const message = formData.get('message')?.toString();

            if (!name || !email || !message) {
                return fail(400, { error: 'Please fill in all required fields.' });
            }

            if (!emailConfig.SMTP_USER || !emailConfig.SMTP_PASS) {
                console.error('SMTP credentials are missing');
                return fail(500, { error: 'Email configuration is missing.' });
            }

            // Create a transporter using Gmail SMTP configuration
            const transporter = nodemailer.createTransport({
                host: emailConfig.SMTP_HOST,
                port: emailConfig.SMTP_PORT,
                secure: false, // TLS için false (587 portu ile)
                auth: {
                    user: emailConfig.SMTP_USER,
                    pass: emailConfig.SMTP_PASS
                }
            });

            const mailOptions = {
                from: `"Contact Form" <${emailConfig.SMTP_USER}>`, // Giriş e-posta adresi
                to: emailConfig.SMTP_USER, // Gönderilecek e-posta adresi (yani size)
                replyTo: email,
                subject: `Contact Form: ${subject || 'New Contact Form Message'}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Subject: ${subject || 'Not specified'}
                    Message: ${message}
                `,
                html: `
                    <h2>New Contact Form Message</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                `
            };

            // E-postayı gönder
            await transporter.sendMail(mailOptions);

            return {
                success: true,
                message: 'Your message has been successfully sent.'
            };

        } catch (error) {
            console.error('Form submission error:', error);
            return fail(500, {
                error: 'An error occurred. Please try again.',
                details: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    }
} satisfies Actions;
