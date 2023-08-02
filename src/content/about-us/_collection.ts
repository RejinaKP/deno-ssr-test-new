import * as ac from 'astro:content';
import * as s from '../../governance/information-model/schemas';

const collectionIdentity = 'about-us' as const;
type CollectionEntry = ac.CollectionEntry<typeof collectionIdentity>;


export const aboutusSevicesCollection = ac.defineCollection({ schema: s.aboutUsSchema });

export default aboutusSevicesCollection;