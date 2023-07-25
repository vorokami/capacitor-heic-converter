export interface HeicConverterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  convert(options: { uri: string }): Promise<{base64String: string}>;
}
