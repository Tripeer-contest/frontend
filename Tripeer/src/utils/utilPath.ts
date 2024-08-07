import { UrlStringType } from '../types/UrlTypes';

const trimUrlNumber = (url: UrlStringType) => {
  const reg = /\/(\d+)$/;
  const hasNumber = url.match(reg);
  return hasNumber ? url.slice(0, url.length - hasNumber[0].length) : url;
};

const checkIsNav = (param: UrlStringType) => {
  const NOT_SHOW_NAV_URL: UrlStringType[] = []; // nav 안보여주고 싶은 URL들 추가
  const trimNumberUrl = trimUrlNumber(param);
  for (const URL of NOT_SHOW_NAV_URL) {
    if (URL.endsWith(trimNumberUrl)) return false;
  }
  return true;
};

export { trimUrlNumber, checkIsNav };
