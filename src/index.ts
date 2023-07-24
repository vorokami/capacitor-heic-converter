import { registerPlugin } from '@capacitor/core';

import type { HeicConverterPlugin } from './definitions';

const HeicConverter = registerPlugin<HeicConverterPlugin>('HeicConverter', {
  web: () => import('./web').then(m => new m.HeicConverterWeb()),
});

export * from './definitions';
export { HeicConverter };
