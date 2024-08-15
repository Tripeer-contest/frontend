export const padStart = (target: string, length: number, pad: string) => {
  if (target.length >= length) return target;
  length = length - target.length;
  pad = pad.repeat(length);
  return pad + target;
};
