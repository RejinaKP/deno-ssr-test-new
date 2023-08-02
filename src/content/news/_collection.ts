import * as ac from 'astro:content';
import * as s from '../../governance/information-model/schemas';

const collectionIdentity = 'news' as const;
type CollectionEntry = ac.CollectionEntry<typeof collectionIdentity>;

export const newsCollection = ac.defineCollection({ schema: s.newsSchema });
export default newsCollection;