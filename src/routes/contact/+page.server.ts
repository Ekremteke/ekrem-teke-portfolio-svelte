import { fail, type Actions } from '@sveltejs/kit';
import type { Transporter } from 'nodemailer';
import nodemailer from 'nodemailer';
import { emailConfig } from '$lib/server/config';

export const actions = {
    default: async ({ request }) => {
        try {
            // Form verilerini al
            const formData = await request.formData();
            const name = formData.get('name')?.toString();
            const email = formData.get('email')?.toString();
            const subject = formData.get('subject')?.toString();
            const message = formData.get('message')?.toString();

            // Gerekli alanlar kontrolü
            if (!name || !email || !message) {
                return fail(400, { error: 'Please fill in all required fields.' });
            }

            // E-posta yapılandırma kontrolü
            if (!emailConfig.auth.user || !emailConfig.auth.pass) {
                console.error('Email credentials are missing');
                return fail(500, { error: 'Email configuration is missing.' });
            }

            // Nodemailer transporter oluştur
            const transporter: Transporter = nodemailer.createTransport(emailConfig);

            // E-posta içeriğini oluştur
            const mailOptions = {
                from: `"Contact Form" <${emailConfig.auth.user}>`,
                to: emailConfig.auth.user,
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
