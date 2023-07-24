export interface HeicConverterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
