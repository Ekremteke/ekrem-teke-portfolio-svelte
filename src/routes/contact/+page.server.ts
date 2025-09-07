import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name')?.toString();
        const email = formData.get('email')?.toString();
        const subject = formData.get('subject')?.toString();
        const message = formData.get('message')?.toString();

        if (!name || !email || !message) {
            return fail(400, { error: 'Please fill in all required fields.' });
        }

      const powerAutomateUrl = 'https://defaultb3946708d7484dcf963d354fb648b4.d2.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/49810e61a162491c9ca617045ed4819a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=71heziHMgnq9c4gUShmqLAVeBQC5XIdhZ2J_KILL3Jo'; // Flow URL


        const response = await fetch(powerAutomateUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, message })
        });

        if (!response.ok) {
            return fail(500, { error: 'Failed to send message via Power Automate.' });
        }

        return {
            success: true,
            message: 'Your message has been successfully sent.'
        };
    }
};
