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
