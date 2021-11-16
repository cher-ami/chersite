/**
 * Merge strings together
 * @param str
 * @param join
 */
export const merge = (str: any[], join: string = " "): string => {
  if (str?.length > 0) {
    return str
      .reduce((a, b) => a.concat(b), [])
      .filter((v) => v)
      .join(join);
  }
};
