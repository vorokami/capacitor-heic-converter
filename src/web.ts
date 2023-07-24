import { WebPlugin } from '@capacitor/core';

import type { HeicConverterPlugin } from './definitions';

export class HeicConverterWeb extends WebPlugin implements HeicConverterPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
