import { WebPlugin } from '@capacitor/core';

import type { HeicConverterPlugin } from './definitions';

export class HeicConverterWeb extends WebPlugin implements HeicConverterPlugin {
  convert(_options: { uri: string }): Promise<{ base64String: string; }> {
    throw new Error('Method not implemented on web.');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
