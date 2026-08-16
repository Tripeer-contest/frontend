import cookie from 'js-cookie';

export default function getTokenInfo() {
  const token = cookie.get('Authorization');
  const payload = token?.split('.')[1];
  if (payload) {
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(
      decodeURIComponent(
        window
          .atob(base64)
          .split('')
          .map((code) => {
            return '%' + ('00' + code.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(''),
      ),
    );
  }
  return null;
}
