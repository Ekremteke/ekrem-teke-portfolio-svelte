// src/routes/portfolio/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
    const validSlugs = ['project-1', 'project-2', 'project-3', 'project-4', 'project-5', 'project-6'];
    
    if (!validSlugs.includes(params.slug)) {
        throw error(404, 'Project not found');
    }

    return {
        slug: params.slug
    };
};