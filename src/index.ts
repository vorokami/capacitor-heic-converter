import { registerPlugin } from '@capacitor/core';

import type { HeicConverterPlugin } from './definitions';

const CapacitorHeicConverter = registerPlugin<HeicConverterPlugin>('HeicConverter', {
  web: () => import('./web').then(m => new m.HeicConverterWeb()),
});

export * from './definitions';
export { CapacitorHeicConverter };
