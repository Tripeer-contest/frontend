export const padStart = (target: string, length: number, pad: string) => {
  if (target.length >= length) return target;
  length = length - target.length;
  pad = pad.repeat(length);
  return pad + target;
};

export const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + '...';
  }
  return text;
};

export const cleanHTMLString = (text: string) => {
  return text.replace(/<[^>]*>?/g, '');
};
