
import { getCollection } from 'astro:content';

async function test() {
    try {
        const entries = await getCollection('entries');
        console.log('Total entries found:', entries.length);
        entries.forEach(e => {
            console.log(`- Slug: ${e.slug}, Type: ${e.data.type}, Title: ${e.data.title}, pubDate: ${e.data.pubDate}`);
        });
    } catch (e) {
        console.error('Error fetching collection:', e);
    }
}

test();
