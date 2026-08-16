interface FlutterInAppWebView {
  callHandler(handlerName: string, ...args: any[]): Promise<any>;
}
declare global {
  interface Window {
    flutter_inappwebview?: FlutterInAppWebView;
  }
}

export async function sendFlutterToSendToken() {
  if (window.flutter_inappwebview) {
    const res = await window.flutter_inappwebview.callHandler(
      'webToFlutterFCM',
      { message: 'getToken' },
    );
    return res;
  } else {
    return null;
  }
}

export async function setFlutterToSendPermission() {
  if (window.flutter_inappwebview) {
    const res = await window.flutter_inappwebview.callHandler(
      'webToFlutterPermission',
      { message: 'getPermission' },
    );
    return res;
  } else {
    return null;
  }
}

export async function sendFlutterToSendDeviceInfo() {
  if (window.flutter_inappwebview) {
    const res =
      await window.flutter_inappwebview.callHandler('webToFlutterDevice');
    return res;
  } else {
    return 'BROWSER';
  }
}

export default async function getDeviceInfo() {
  try {
    const res = await sendFlutterToSendDeviceInfo();
    if (res === 'ANDROID' || res === 'BROWSER')
      return ['google', 'kakao', 'naver'];
    else return ['apple', 'kakao', 'naver'];
  } catch {
    return ['google', 'kakao', 'naver'];
  }
}
