interface FlutterInAppWebView {
  callHandler(handlerName: string, ...args: any[]): Promise<any>;
}
declare global {
  interface Window {
    flutter_inappwebview?: FlutterInAppWebView;
  }
}

export async function sendFlutterToSendToken(setter?: (param: any) => void) {
  if (window.flutter_inappwebview) {
    const res = await window.flutter_inappwebview.callHandler(
      'webToFlutterFCM',
      { message: 'getToken' },
    );
    setter && setter(res);
    return res;
  } else {
    return null;
  }
}
