/**
 * Ugly render patch middleware
 * because react add ="" after nomodule
 * @param render
 */
export const patchScriptAttribute = (render: string): string =>
  render.replaceAll('<script nomodule=""', "<script nomodule")
