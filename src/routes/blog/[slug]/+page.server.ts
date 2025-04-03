// src/routes/portfolio/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = ({ params }) => {
    const validSlugs = ['code-your-future', 'accenture-impact-week'];
    
    if (!validSlugs.includes(params.slug)) {
        throw error(404, 'Project not found');
    }

    return {
        slug: params.slug
    };
};